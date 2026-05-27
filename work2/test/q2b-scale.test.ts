import { expect } from 'chai';
import { evalL3program as evalSub } from '../L3/L3-eval-sub';
import { evalL3program as evalEnv } from '../L3/L3-eval-env';
import { Value } from "../L3/L3-value";
import { Result, bind, makeOk } from "../shared/result";
import { parseL3 } from "../L3/L3-ast";

const scaleProgram = `
(L3
  (define pair
    (class (a b)
      ((first (lambda () a))
       (second (lambda () b))
       (sum (lambda () (+ a b)))
       (scale (lambda (k) (pair (* k a) (* k b)))))))
  (define p34 (pair 3 4))
  ((p34 'scale 2) 'second))
`;

describe('Q2B scale method', () => {
  it('works in the substitution model', () => {
    const evalP = (x: string): Result<Value> => bind(parseL3(x), evalSub);
    expect(evalP(scaleProgram)).to.deep.equal(makeOk(8));
  });

  it('works in the environment model', () => {
    const evalP = (x: string): Result<Value> => bind(parseL3(x), evalEnv);
    expect(evalP(scaleProgram)).to.deep.equal(makeOk(8));
  });
});
