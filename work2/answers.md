# Assignment 2 - Answers

## Question 1.1

**Q:** Let us define the L11 language as L1 excluding the special form 'define'. Is there a program in L1 which cannot be transformed to an equivalent program in L11?

**A:** No. In L1 there is no `lambda` and no `if`, so `define` can only bind a variable to a value built from literals and primitive operations. Every `define` can be eliminated by inlining — substituting the bound value wherever the variable is referenced. Since L1 has no recursion, no higher-order functions, and no self-reference, every chain of `define`s can be flattened by substitution.

**Example:**

```scheme
(L1
  (define x 5)
  (define y (+ x 1))
  (+ x y))
```

Transforms to the equivalent L11 program:

```scheme
(L11
  (+ 5 (+ 5 1)))
```

## Question 1.2

**Q:** Let us define the L21 language as L2 excluding the special form 'define'. Is there a program in L2 which cannot be transformed to an equivalent program in L21?

**A:** No. L2 adds `lambda` and `if` to L1, and `lambda` allows us to replace every `define` with an immediately-applied lambda. The transformation is: `(define x e) rest...` becomes `((lambda (x) rest...) e)`. Sequential defines become nested lambdas. Additionally, `define` in L2 does not support recursion — the closure captures the environment at creation time, before the binding is added — so no expressive power is lost.

**Example:**

```scheme
(L2
  (define f (lambda (x) (+ x 1)))
  (define y (f 5))
  (+ y 1))
```

Transforms to the equivalent L21 program:

```scheme
(L21
  ((lambda (f) ((lambda (y) (+ y 1)) (f 5))) (lambda (x) (+ x 1))))
```

## Question 1.3

**Q:** Let us define the L22 language as L2, where procedures (lambda) can only have one parameter and a body with one expression. Is there a program in L2 which cannot be transformed to an equivalent program in L22?

**A:** No. Every L2 program can be transformed to L22 using the following transformations:

1. **Multiple parameters → currying:** `(lambda (x y) body)` becomes `(lambda (x) (lambda (y) body))`, and application `(f 3 4)` becomes `((f 3) 4)`.

2. **Zero parameters → dummy parameter:** `(lambda () body)` becomes `(lambda (_) body)`, and application `(f)` becomes `(f #f)`.

3. **Multiple body expressions → chaining with lambda:** `(lambda (x) e1 e2)` becomes `(lambda (x) ((lambda (_) e2) e1))`. This evaluates `e1`, discards its result via `_`, then evaluates `e2`, preserving evaluation order.

**Example:**

```scheme
(lambda (x y) (+ x 1) (+ x y))
```

Transforms to the equivalent L22 expression:

```scheme
(lambda (x) (lambda (y) ((lambda (_) (+ x y)) (+ x 1))))
```
