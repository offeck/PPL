import { map } from "ramda";
import { Binding, ClassExp, CExp, Exp, Program, ProcExp,
         isAppExp, isClassExp, isDefineExp, isIfExp, isLetExp, isProcExp, isProgram,
         makeAppExp, makeBinding, makeDefineExp, makeIfExp, makeLetExp,
         makeLitExp, makePrimOp, makeProcExp, makeProgram, makeVarDecl, makeVarRef } from "./L3-ast";
import { makeSymbolSExp } from "./L3-value";
import { Result, makeOk } from "../shared/result";

/*
Purpose: Transform ClassExp to ProcExp
Signature: class2proc(classExp)
Type: ClassExp => ProcExp
*/
export const class2proc = (exp: ClassExp): ProcExp => {
    const msgRef = makeVarRef("msg");
    const errorVal: CExp = makeLitExp(makeSymbolSExp("error"));

    const ifChain: CExp = exp.methods.reduceRight(
        (alt: CExp, b: Binding): CExp =>
            makeIfExp(
                makeAppExp(makePrimOp("eq?"), [msgRef, makeLitExp(makeSymbolSExp(b.var.var))]),
                isProcExp(b.val) ? b.val.body[0] : b.val,
                alt
            ),
        errorVal
    );

    return makeProcExp(exp.fields, [makeProcExp([makeVarDecl("msg")], [ifChain])]);
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
