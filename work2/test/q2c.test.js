"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const L3_ast_1 = require("../L3/L3-ast");
const SyntacticTransformation_1 = require("../L3/SyntacticTransformation");
const result_1 = require("../shared/result");
const parser_1 = require("../shared/parser");
describe('Q2C Tests', () => {
    it('trnasform class-exp to app-exp', () => {
        (0, chai_1.expect)((0, result_1.bind)((0, result_1.bind)((0, result_1.bind)((0, parser_1.parse)(`(class (a b) ((first (lambda () a)) (second (lambda () b)) (sum (lambda () (+ a b)))))`), L3_ast_1.parseL3Exp), SyntacticTransformation_1.transform), x => (0, result_1.makeOk)((0, L3_ast_1.unparseL3)(x)))).to.deep.equal((0, result_1.makeOk)(`(lambda (a b) (lambda (msg) (if (eq? msg 'first) a (if (eq? msg 'second) b (if (eq? msg 'sum) (+ a b) 'error)))))`));
    });
    it('trnasform class-exp program to proc-exp', () => {
        (0, chai_1.expect)((0, result_1.bind)((0, result_1.bind)((0, L3_ast_1.parseL3)(`(L3 (define pair (class (a b) ((first (lambda () a)) (second (lambda () b)) (sum (lambda () (+ a b)))))) (let ((p12 (pair 1 2)) (p34 (pair 3 4))) (if (> (p12 'first) (p34 'second)) #t #f)))`), SyntacticTransformation_1.transform), x => (0, result_1.makeOk)((0, L3_ast_1.unparseL3)(x)))).to.deep.equal((0, result_1.makeOk)(`(L3 (define pair (lambda (a b) (lambda (msg) (if (eq? msg 'first) a (if (eq? msg 'second) b (if (eq? msg 'sum) (+ a b) 'error)))))) (let ((p12 (pair 1 2)) (p34 (pair 3 4))) (if (> (p12 'first) (p34 'second)) #t #f)))`));
    });
});
