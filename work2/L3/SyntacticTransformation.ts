import { map } from "ramda";
import { Binding, ClassExp, CExp, Exp, Program, ProcExp,
         isAppExp, isClassExp, isDefineExp, isIfExp, isLetExp, isProcExp, isProgram, isVarRef,
         makeAppExp, makeBinding, makeBoolExp, makeDefineExp, makeIfExp, makeLetExp,
         makeLitExp, makePrimOp, makeProcExp, makeProgram, makeVarDecl, makeVarRef } from "./L3-ast";
import { makeSymbolSExp } from "./L3-value";
import { Result, makeOk } from "../shared/result";

const referencedVars = (exp: CExp): string[] =>
    isVarRef(exp) ? [exp.var] :
    isAppExp(exp) ? referencedVars(exp.rator).concat(...map(referencedVars, exp.rands)) :
    isIfExp(exp) ? referencedVars(exp.test).concat(referencedVars(exp.then), referencedVars(exp.alt)) :
    isProcExp(exp) ? ([] as string[]).concat(...map(referencedVars, exp.body)) :
    isLetExp(exp) ? ([] as string[]).concat(
        ...map((b: Binding) => referencedVars(b.val), exp.bindings),
        ...map(referencedVars, exp.body)) :
    [];

const freshName = (base: string, avoid: string[]): string => {
    let candidate = base;
    let i = 1;
    while (avoid.includes(candidate)) {
        candidate = `${base}${i}`;
        i++;
    }
    return candidate;
};

const methodResult = (val: CExp): CExp =>
    isProcExp(val) ?
        val.body.length === 1 ? val.body[0] : makeAppExp(makeProcExp([], val.body), []) :
    val;

/*
Purpose: Transform ClassExp to ProcExp
Signature: class2proc(classExp)
Type: ClassExp => ProcExp
*/
export const class2proc = (exp: ClassExp): ProcExp => {
    const usedNames = map((f) => f.var, exp.fields).concat(
        ...map((b: Binding) => referencedVars(b.val), exp.methods));
    const msgName = freshName("msg", usedNames);
    const msgRef = makeVarRef(msgName);
    const errorVal: CExp = makeBoolExp(false);

    const ifChain: CExp = exp.methods.reduceRight(
        (alt: CExp, b: Binding): CExp =>
            makeIfExp(
                makeAppExp(makePrimOp("eq?"), [msgRef, makeLitExp(makeSymbolSExp(b.var.var))]),
                transformCExp(methodResult(b.val)),
                alt
            ),
        errorVal
    );

    return makeProcExp(exp.fields, [makeProcExp([makeVarDecl(msgName)], [ifChain])]);
};

const transformCExp = (exp: CExp): CExp =>
    isClassExp(exp) ? class2proc(exp) :
    isAppExp(exp) ? makeAppExp(transformCExp(exp.rator), map(transformCExp, exp.rands)) :
    isIfExp(exp) ? makeIfExp(transformCExp(exp.test), transformCExp(exp.then), transformCExp(exp.alt)) :
    isProcExp(exp) ? makeProcExp(exp.args, map(transformCExp, exp.body)) :
    isLetExp(exp) ? makeLetExp(
        map((b: Binding) => makeBinding(b.var.var, transformCExp(b.val)), exp.bindings),
        map(transformCExp, exp.body)) :
    exp;

const transformExp = (exp: Exp): Exp =>
    isDefineExp(exp) ? makeDefineExp(exp.var, transformCExp(exp.val)) :
    transformCExp(exp);

/*
Purpose: Transform all class forms in the given AST to procs
Signature: transform(AST)
Type: [Exp | Program] => Result<Exp | Program>
*/
export const transform = (exp: Exp | Program): Result<Exp | Program> =>
    isProgram(exp) ? makeOk(makeProgram(map(transformExp, exp.exps))) :
    makeOk(transformExp(exp));
