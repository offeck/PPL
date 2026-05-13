"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const L3_eval_sub_1 = require("../L3/L3-eval-sub");
const L3_value_1 = require("../L3/L3-value");
const result_1 = require("../shared/result");
const L3_ast_1 = require("../L3/L3-ast");
const evalP = (x) => (0, result_1.bind)((0, L3_ast_1.parseL3)(x), L3_eval_sub_1.evalL3program);
const evalP2String = (x) => {
    const res = (0, result_1.bind)((0, L3_ast_1.parseL3)(x), L3_eval_sub_1.evalL3program);
    return (0, result_1.isOk)(res) ? (0, L3_value_1.valueToString)(res.value) : res.message;
};
describe('Q2B Tests for substitution model', () => {
    it("Test class definition", () => {
        (0, chai_1.expect)(evalP2String(`
        (L3
         (define pair 
            (class (a b) 
               ((first (lambda () a)) 
                (second (lambda () b))
                (sum (lambda () (+ a b)))
                (f (lambda (k) (/ (* k a) (* k b))))
               )
             )
         )
         pair
        )`)).to.deep.equal("Class");
    });
    it("Test object definition", () => {
        (0, chai_1.expect)(evalP2String(`
        (L3
            (define pair 
               (class (a b) 
                  ((first (lambda () a)) 
                   (second (lambda () b))
                   (sum (lambda () (+ a b)))
                   (f (lambda (k) (/ (* k a) (* k b))))
                  )
                )
            )
            (define p34 (pair 3 4))
            p34
        )
        `)).to.deep.equal("Object");
    });
    it("Test object methods application", () => {
        (0, chai_1.expect)(evalP(`
        (L3
            (define pair 
               (class (a b) 
                  ((first (lambda () a)) 
                   (second (lambda () b))
                   (sum (lambda () (+ a b)))
                   (f (lambda (k) (/ (* k a) (* k b))))
                  )
                )
            )
            (define p34 (pair 3 4))
            (p34 'first)
        )
        `)).to.deep.equal((0, result_1.makeOk)(3));
        (0, chai_1.expect)(evalP(`
        (L3
            (define pair 
               (class (a b) 
                  ((first (lambda () a)) 
                   (second (lambda () b))
                   (sum (lambda () (+ a b)))
                   (f (lambda (k) (/ (* k a) (* k b))))
                  )
                )
            )
            (define p34 (pair 3 4))
            (p34 'second)
        )
        `)).to.deep.equal((0, result_1.makeOk)(4));
        (0, chai_1.expect)(evalP(`
        (L3
            (define pair 
               (class (a b) 
                  ((first (lambda () a)) 
                   (second (lambda () b))
                   (sum (lambda () (+ a b)))
                   (f (lambda (k) (/ (* k a) (* k b))))
                  )
                )
            )
            (define p34 (pair 3 4))
            (p34 'sum)
        )
        `)).to.deep.equal((0, result_1.makeOk)(7));
    });
    it("Test object methods application with parameters", () => {
        (0, chai_1.expect)(evalP(`
    (L3
        (define pair 
           (class (a b) 
              ((first (lambda () a)) 
               (second (lambda () b))
               (sum (lambda () (+ a b)))
               (f (lambda (k) (/ (* k a) (* k b))))
              )
            )
        )
        (define p34 (pair 3 4))
        (p34 'f 2)
    )
    `)).to.deep.equal((0, result_1.makeOk)(0.75));
    });
    it("Test unknown methods application for substitution model", () => {
        (0, chai_1.expect)(evalP(`
    (L3
        (define pair 
          (class (a b) 
           ((first (lambda () a)) 
            (second (lambda () b))
            (sum (lambda () (+ a b)))
            (f (lambda (k) (/ (* k a) (* k b))))
           )
          )
        )
        (define p34 (pair 3 4))
        (p34 'power)
    )
`)).to.deep.equal((0, result_1.makeFailure)("Unrecognized method: power"));
    });
    it("Test unknown field in methods application", () => {
        (0, chai_1.expect)(evalP(`
    (L3
      (define pair 
        (class (a b) 
           ((first (lambda () a)) 
            (second (lambda () b))
            (sum (lambda () (+ a c)))
            (f (lambda (k) (/ (* k a) (* k b))))
           )
        )
      )
      (define p34 (pair 3 4))
      (p34 'sum)
    )
`)).to.deep.equal((0, result_1.makeFailure)("var not found: c"));
    });
    it("Test nested object methods application", () => {
        (0, chai_1.expect)(evalP(`
    (L3
        (
         (lambda (obj) (obj 'first))
         (
           (class (a b) 
              ((first (lambda () a)) 
               (second (lambda () b))
               (sum (lambda () (+ a b)))
               (f (lambda (k) (/ (* k a) (* k b))))
              )
            )
            3 4
         )
       )
    )
    `)).to.deep.equal((0, result_1.makeOk)(3));
    });
});
