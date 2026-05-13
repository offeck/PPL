"use strict";
// Environment for L4 (support for Letrec)
// =======================================
// An environment represents a partial function from symbols (variable names) to values.
// It supports the operation: apply-env(env,var)
// which either returns the value of var in the environment, or else throws an error.
//
// Env is defined inductively by the following cases:
// * <env> ::= <empty-env> | <extended-env> | <rec-env>
// * <empty-env> ::= (empty-env) // empty-env()
// * <extended-env> ::= (env (symbol+) (value+) next-env) // env(vars:List(Symbol), vals:List(Value), next-env: Env)
// * <rec-ext-env> ::= (rec-env (symbol+) (params+) (bodies+) next-env)
//       // rec-env(vars:List(Symbol), paramss:List(List(var-decl)), bodiess:List(List(cexp)), next-env: Env)
//
// The key operation on env is apply-env(var) which returns the value associated to var in env
// or throw an error if var is not defined in env.
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyEnv = exports.isEnv = exports.makeRecEnv = exports.makeExtEnv = exports.makeEmptyEnv = void 0;
const L3_value_1 = require("./L3-value");
const result_1 = require("../shared/result");
const makeEmptyEnv = () => ({ tag: "EmptyEnv" });
exports.makeEmptyEnv = makeEmptyEnv;
const makeExtEnv = (vs, vals, env) => ({ tag: "ExtEnv", vars: vs, vals: vals, nextEnv: env });
exports.makeExtEnv = makeExtEnv;
//export const makeRecEnv = (vs: string[], paramss: VarDecl[][], bodiess: CExp[][], env: Env): RecEnv =>
//  ({tag: "RecEnv", vars: vs, paramss: paramss, bodiess: bodiess, nextEnv: env});
const makeRecEnv = (vs, procs, env) => ({ tag: "RecEnv", vars: vs, vals: procs, nextEnv: env });
exports.makeRecEnv = makeRecEnv;
const isEmptyEnv = (x) => x.tag === "EmptyEnv";
const isExtEnv = (x) => x.tag === "ExtEnv";
const isRecEnv = (x) => x.tag === "RecEnv";
const isEnv = (x) => isEmptyEnv(x) || isExtEnv(x) || isRecEnv(x);
exports.isEnv = isEnv;
// Apply-env
const applyEnv = (env, v) => isEmptyEnv(env) ? (0, result_1.makeFailure)(`var not found: ${v}`) :
    isExtEnv(env) ? applyExtEnv(env, v) :
        applyRecEnv(env, v);
exports.applyEnv = applyEnv;
const applyExtEnv = (env, v) => env.vars.includes(v) ? (0, result_1.makeOk)(env.vals[env.vars.indexOf(v)]) :
    (0, exports.applyEnv)(env.nextEnv, v);
//const applyRecEnv = (env: RecEnv, v: string): Result<Value> =>
//  env.vars.includes(v) ? makeOk(makeClosure(env.paramss[env.vars.indexOf(v)],
//                                          env.bodiess[env.vars.indexOf(v)],
//                                        env)) :
//applyEnv(env.nextEnv, v);
const applyRecEnv = (env, v) => env.vars.includes(v) ? (0, result_1.makeOk)((0, L3_value_1.makeClosureEnv)(env.vals[env.vars.indexOf(v)].args, env.vals[env.vars.indexOf(v)].body, env)) :
    (0, exports.applyEnv)(env.nextEnv, v);
