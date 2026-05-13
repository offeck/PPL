"use strict";
// L3-eval.ts
// Evaluator with Environments model
Object.defineProperty(exports, "__esModule", { value: true });
exports.evalParse = exports.evalL3program = exports.evalSequence = exports.isTrueValue = void 0;
const ramda_1 = require("ramda");
const L3_ast_1 = require("./L3-ast");
const L3_env_env_1 = require("./L3-env-env");
const L3_value_1 = require("./L3-value");
const evalPrimitive_1 = require("./evalPrimitive");
const list_1 = require("../shared/list");
const result_1 = require("../shared/result");
const parser_1 = require("../shared/parser");
const format_1 = require("../shared/format");
// ========================================================
// Eval functions
const applicativeEval = (exp, env) => (0, L3_ast_1.isNumExp)(exp) ? (0, result_1.makeOk)(exp.val) :
    (0, L3_ast_1.isBoolExp)(exp) ? (0, result_1.makeOk)(exp.val) :
        (0, L3_ast_1.isStrExp)(exp) ? (0, result_1.makeOk)(exp.val) :
            (0, L3_ast_1.isPrimOp)(exp) ? (0, result_1.makeOk)(exp) :
                (0, L3_ast_1.isVarRef)(exp) ? (0, L3_env_env_1.applyEnv)(env, exp.var) :
                    (0, L3_ast_1.isLitExp)(exp) ? (0, result_1.makeOk)(exp.val) :
                        (0, L3_ast_1.isIfExp)(exp) ? evalIf(exp, env) :
                            (0, L3_ast_1.isProcExp)(exp) ? evalProc(exp, env) :
                                (0, L3_ast_1.isLetExp)(exp) ? evalLet(exp, env) :
                                    (0, L3_ast_1.isAppExp)(exp) ? (0, result_1.bind)(applicativeEval(exp.rator, env), (proc) => (0, result_1.bind)((0, result_1.mapResult)((rand) => applicativeEval(rand, env), exp.rands), (args) => applyProcedure(proc, args))) :
                                        (0, result_1.makeFailure)('"let" not supported (yet)');
const isTrueValue = (x) => !(x === false);
exports.isTrueValue = isTrueValue;
const evalIf = (exp, env) => (0, result_1.bind)(applicativeEval(exp.test, env), (test) => (0, exports.isTrueValue)(test) ? applicativeEval(exp.then, env) :
    applicativeEval(exp.alt, env));
const evalProc = (exp, env) => (0, result_1.makeOk)((0, L3_value_1.makeClosureEnv)(exp.args, exp.body, env));
// KEY: This procedure does NOT have an env parameter.
//      Instead we use the env of the closure.
const applyProcedure = (proc, args) => (0, L3_ast_1.isPrimOp)(proc) ? (0, evalPrimitive_1.applyPrimitive)(proc, args) :
    (0, L3_value_1.isClosure)(proc) ? applyClosure(proc, args) :
        (0, result_1.makeFailure)(`Bad procedure ${(0, format_1.format)(proc)}`);
const applyClosure = (proc, args) => {
    const vars = (0, ramda_1.map)((v) => v.var, proc.params);
    return (0, exports.evalSequence)(proc.body, (0, L3_env_env_1.makeExtEnv)(vars, args, proc.env));
};
// Evaluate a sequence of expressions (in a program)
const evalSequence = (seq, env) => (0, list_1.isNonEmptyList)(seq) ? evalCExps((0, list_1.first)(seq), (0, list_1.rest)(seq), env) :
    (0, result_1.makeFailure)("Empty sequence");
exports.evalSequence = evalSequence;
const evalCExps = (first, rest, env) => (0, L3_ast_1.isDefineExp)(first) ? evalDefineExps(first, rest, env) :
    (0, L3_ast_1.isCExp)(first) && (0, list_1.isEmpty)(rest) ? applicativeEval(first, env) :
        (0, L3_ast_1.isCExp)(first) ? (0, result_1.bind)(applicativeEval(first, env), _ => (0, exports.evalSequence)(rest, env)) :
            first;
// Eval a sequence of expressions when the first exp is a Define.
// Compute the rhs of the define, extend the env with the new binding
// then compute the rest of the exps in the new env.
const evalDefineExps = (def, exps, env) => (0, result_1.bind)(applicativeEval(def.val, env), (rhs) => (0, exports.evalSequence)(exps, (0, L3_env_env_1.makeExtEnv)([def.var.var], [rhs], env)));
// Main program
const evalL3program = (program) => (0, exports.evalSequence)(program.exps, (0, L3_env_env_1.makeEmptyEnv)());
exports.evalL3program = evalL3program;
const evalParse = (s) => (0, result_1.bind)((0, parser_1.parse)(s), (x) => (0, result_1.bind)((0, L3_ast_1.parseL3Exp)(x), (exp) => (0, exports.evalSequence)([exp], (0, L3_env_env_1.makeEmptyEnv)())));
exports.evalParse = evalParse;
// LET: Direct evaluation rule without syntax expansion
// compute the values, extend the env, eval the body.
const evalLet = (exp, env) => {
    const vals = (0, result_1.mapResult)((v) => applicativeEval(v, env), (0, ramda_1.map)((b) => b.val, exp.bindings));
    const vars = (0, ramda_1.map)((b) => b.var.var, exp.bindings);
    return (0, result_1.bind)(vals, (vals) => (0, exports.evalSequence)(exp.body, (0, L3_env_env_1.makeExtEnv)(vars, vals, env)));
};
