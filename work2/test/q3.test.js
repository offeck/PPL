"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const L3_ast_1 = require("../L3/L3-ast");
const q3_1 = require("../q3");
const result_1 = require("../shared/result");
const chai_1 = require("chai");
const parser_1 = require("../shared/parser");
const l2ToPythonResult = (x) => (0, result_1.bind)((0, result_1.bind)((0, parser_1.parse)(x), L3_ast_1.parseL3Exp), q3_1.l2ToPython);
describe('Q4 Tests', () => {
    it('parse primitive ops', () => {
        (0, chai_1.expect)(l2ToPythonResult(`(+ 3 5 7)`)).to.deep.equal((0, result_1.makeOk)(`(3 + 5 + 7)`));
        (0, chai_1.expect)(l2ToPythonResult(`(= 3 (+ 1 2))`)).to.deep.equal((0, result_1.makeOk)(`(3 == (1 + 2))`));
    });
    it('parse "if" expressions', () => {
        (0, chai_1.expect)(l2ToPythonResult(`(if (> x 3) 4 5)`)).to.deep.equal((0, result_1.makeOk)(`(4 if (x > 3) else 5)`));
    });
    it('parse "lambda" expressions', () => {
        (0, chai_1.expect)(l2ToPythonResult(`(lambda (x y) (* x y))`)).to.deep.equal((0, result_1.makeOk)(`(lambda x,y : (x * y))`));
        (0, chai_1.expect)(l2ToPythonResult(`((lambda (x y) (* x y)) 3 4)`)).to.deep.equal((0, result_1.makeOk)(`(lambda x,y : (x * y))(3,4)`));
    });
    it("define constants", () => {
        (0, chai_1.expect)(l2ToPythonResult(`(define pi 3.14)`)).to.deep.equal((0, result_1.makeOk)(`pi = 3.14`));
    });
    it("define functions", () => {
        (0, chai_1.expect)(l2ToPythonResult(`(define f (lambda (x y) (* x y)))`)).to.deep.equal((0, result_1.makeOk)(`f = (lambda x,y : (x * y))`));
    });
    it("apply user-defined functions", () => {
        (0, chai_1.expect)(l2ToPythonResult(`(f 3 4)`)).to.deep.equal((0, result_1.makeOk)(`f(3,4)`));
    });
    it('program', () => {
        (0, chai_1.expect)((0, result_1.bind)((0, L3_ast_1.parseL3)(`(L3 (define b (> 3 4)) (define x 5) (define f (lambda (y) (+ x y))) (define g (lambda (y) (* x y))) (if (not b) (f 3) (g 4)) (if (= a b) (f 3) (g 4)) (if (> a b) (f 3) (g 4)) ((lambda (x) (* x x)) 7))`), q3_1.l2ToPython)).to.deep.equal((0, result_1.makeOk)(`b = (3 > 4)\nx = 5\nf = (lambda y : (x + y))\ng = (lambda y : (x * y))\n(f(3) if (not b) else g(4))\n(f(3) if (a == b) else g(4))\n(f(3) if (a > b) else g(4))\n(lambda x : (x * x))(7)`));
    });
});
