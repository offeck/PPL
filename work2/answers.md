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
