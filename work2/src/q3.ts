import { map } from "ramda";
import { Exp, Program, CExp, VarDecl,
         isProgram, isDefineExp, isNumExp, isBoolExp, isStrExp,
         isPrimOp, isVarRef, isProcExp, isIfExp, isAppExp } from '../L3/L3-ast';
import { Result, makeOk, makeFailure, bind, mapResult } from '../shared/result';

const pythonOp = (op: string): string =>
    op === "=" || op === "eq?" ? "==" : op;

const pythonPrimOp = (op: string): string =>
    op === "boolean?" ? "(lambda x : (type(x) == bool))" :
    op === "number?" ? "(lambda x : (type(x) == int or type(x) == float))" :
    op === "=" || op === "eq?" ? "==" :
    op;

const pythonPrimOpApp = (op: string, rands: CExp[]): Result<string> =>
    op === "not" ?
        bind(l2ToPython(rands[0]), (rand: string) => makeOk(`(not ${rand})`)) :
    op === "boolean?" ?
        bind(l2ToPython(rands[0]), (rand: string) => makeOk(`(type(${rand}) == bool)`)) :
    op === "number?" ?
        bind(l2ToPython(rands[0]), (rand: string) => makeOk(`(type(${rand}) == int or type(${rand}) == float)`)) :
    bind(mapResult(l2ToPython, rands), (rands: string[]) =>
        makeOk(`(${rands.join(` ${pythonOp(op)} `)})`));

/*
Purpose: Transform L2 AST to Python program string
Signature: l2ToPython(l2AST)
Type: [Parsed | Error] => Result<string>
*/
export const l2ToPython = (exp: Exp | Program): Result<string> =>
    isProgram(exp) ? bind(mapResult(l2ToPython, exp.exps), (exps: string[]) => makeOk(exps.join("\n"))) :
    isDefineExp(exp) ? bind(l2ToPython(exp.val), (val: string) => makeOk(`${exp.var.var} = ${val}`)) :
    isNumExp(exp) ? makeOk(exp.val.toString()) :
    isBoolExp(exp) ? makeOk(exp.val ? "True" : "False") :
    isStrExp(exp) ? makeOk(`"${exp.val}"`) :
    isVarRef(exp) ? makeOk(exp.var) :
    isPrimOp(exp) ? makeOk(pythonPrimOp(exp.op)) :
    isProcExp(exp) ? bind(l2ToPython(exp.body[0]), (body: string) =>
        bind(makeOk(map((p: VarDecl) => p.var, exp.args).join(",")), (args: string) =>
            makeOk(args === "" ? `(lambda : ${body})` : `(lambda ${args} : ${body})`))) :
    isIfExp(exp) ? bind(l2ToPython(exp.test), (test: string) =>
        bind(l2ToPython(exp.then), (then: string) =>
            bind(l2ToPython(exp.alt), (alt: string) =>
                makeOk(`(${then} if ${test} else ${alt})`)))) :
    isAppExp(exp) ? (isPrimOp(exp.rator) ?
        pythonPrimOpApp(exp.rator.op, exp.rands) :
        bind(l2ToPython(exp.rator), (rator: string) =>
            bind(mapResult(l2ToPython, exp.rands), (rands: string[]) =>
                makeOk(`${rator}(${rands.join(",")})`)))) :
    makeFailure("Unsupported expression");
