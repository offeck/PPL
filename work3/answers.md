# Part 1: Theoretical Questions

## Question 1.1

**1.** `{f:(T1 -> T2), g:(T1 -> T2), a: T1} ⊢ (f (g a)):T2`

**False.** `g : (T1 -> T2)` and `a : T1`, so `(g a) : T2`. However, `f : (T1 -> T2)` expects an argument of type `T1`, not `T2`. Since `T1` and `T2` are not necessarily the same type, the application `(f (g a))` is not well-typed.

**2.** `{f:(T1 * T2 -> T3)} ⊢ (lambda (x) (f x y)): (T2 -> T3)`

**False.** `y` is a free variable that does not appear in the type environment, so the expression is not well-typed. Additionally, `(f x y)` applies `f` to two arguments where `x` would need type `T1`, but the lambda parameter `x` is typed as `T2` in the return type — the parameter types are inconsistent.

**3.** `{f:(T1 * T2 -> T3), y: T2} ⊢ (lambda (x) (f x y)):(T1 -> T3)`

**True.** `y : T2` is in the environment. The lambda binds `x`, and in the body `(f x y)`, `x : T1` and `y : T2`, which matches `f : (T1 * T2 -> T3)`. So `(f x y) : T3`, and the lambda has type `(T1 -> T3)`.

## Question 1.2

### 1.2.1: `(lambda (f1 g1 x1 y1) (f1 (g1 y1 x1) (g1 x1 y1)))`

**(i) Pool:**

| TVar | Sub-expression                                      |
| ---- | --------------------------------------------------- |
| T0   | `(lambda (f1 g1 x1 y1) (f1 (g1 y1 x1) (g1 x1 y1)))` |
| T1   | `(f1 (g1 y1 x1) (g1 x1 y1))`                        |
| Tf1  | `f1`                                                |
| Tg1  | `g1`                                                |
| Tx1  | `x1`                                                |
| Ty1  | `y1`                                                |
| T2   | `(g1 y1 x1)`                                        |
| T3   | `(g1 x1 y1)`                                        |

**(ii) Equations:**

1. Lambda: `T0 = [Tf1 * Tg1 * Tx1 * Ty1 -> T1]`
2. Application `(f1 (g1 y1 x1) (g1 x1 y1))`: `Tf1 = [T2 * T3 -> T1]`
3. Application `(g1 y1 x1)`: `Tg1 = [Ty1 * Tx1 -> T2]`
4. Application `(g1 x1 y1)`: `Tg1 = [Tx1 * Ty1 -> T3]`

**(iii) The inference succeeds.**

From equations (3) and (4): `[Ty1 * Tx1 -> T2] = [Tx1 * Ty1 -> T3]`, which gives:

- `Ty1 = Tx1`
- `T2 = T3`

Final substitution:

- `Ty1 = Tx1`
- `T2 = T3`
- `Tg1 = [Tx1 * Tx1 -> T2]`
- `Tf1 = [T2 * T2 -> T1]`
- `T0 = [[T2 * T2 -> T1] * [Tx1 * Tx1 -> T2] * Tx1 * Tx1 -> T1]`

### 1.2.2: `((lambda (f1) (lambda (x1) (f1 x1 x1))) (lambda (y1) y1))`

**(i) Pool:**

| TVar | Sub-expression                                              |
| ---- | ----------------------------------------------------------- |
| T0   | `((lambda (f1) (lambda (x1) (f1 x1 x1))) (lambda (y1) y1))` |
| T1   | `(lambda (f1) (lambda (x1) (f1 x1 x1)))`                    |
| T2   | `(lambda (x1) (f1 x1 x1))`                                  |
| T3   | `(lambda (y1) y1)`                                          |
| T4   | `(f1 x1 x1)`                                                |
| Tf1  | `f1`                                                        |
| Tx1  | `x1`                                                        |
| Ty1  | `y1`                                                        |

**(ii) Equations:**

1. Lambda: `T1 = [Tf1 -> T2]`
2. Lambda: `T2 = [Tx1 -> T4]`
3. Lambda: `T3 = [Ty1 -> Ty1]`
4. Application `((lambda (f1) (lambda (x1) (f1 x1 x1))) (lambda (y1) y1))`: `T1 = [T3 -> T0]`
5. Application `(f1 x1 x1)`: `Tf1 = [Tx1 * Tx1 -> T4]`

**(iii) The inference fails.**

The operand `(lambda (y1) y1)` is the identity function, so from equation (3) it has the one-parameter type `T3 = [Ty1 -> Ty1]`.

Combining equations (1) and (4): `[Tf1 -> T2] = [T3 -> T0]`, which gives `Tf1 = T3 = [Ty1 -> Ty1]`. So `f1` is a procedure with **one** parameter.

But in the body `(f1 x1 x1)`, `f1` is applied to **two** arguments, so equation (5) forces `Tf1 = [Tx1 * Tx1 -> T4]`, a procedure with **two** parameters.

Unification must then solve the conflicting equation:

```
[Ty1 -> Ty1] = [Tx1 * Tx1 -> T4]
```

These are two procedure types of different arity (1 vs 2). `canUnify` requires equal numbers of parameters, so it cannot unify them and the algorithm reports *"Equation contains incompatible types"*. The inference fails because `f1` is bound to the identity (one parameter) yet applied to two arguments.

### 1.2.3: `((lambda (f1) (lambda (x1) ((f1 x1) x1))) (lambda (y1) y1))`

**(i) Pool:**

| TVar | Sub-expression                                              |
| ---- | ----------------------------------------------------------- |
| T0   | `((lambda (f1) (lambda (x1) (f1 x1 x1))) (lambda (y1) y1))` |
| T1   | `(lambda (f1) (lambda (x1) (f1 x1 x1)))`                    |
| T2   | `(lambda (x1) (f1 x1 x1))`                                  |
| T3   | `(lambda (y1) y1)`                                          |
| T4   | `(f1 x1 x1)`                                                |
| Tf1  | `f1`                                                        |
| Tx1  | `x1`                                                        |
| Ty1  | `y1`                                                        |

**(ii) Equations:**

1. Lambda: `T1 = [Tf1 -> T2]`
2. Lambda: `T2 = [Tx1 -> T4]`
3. Lambda: `T3 = [Ty1 -> Ty1]`
4. Application `((lambda (f1) (lambda (x1) (f1 x1 x1))) (lambda (y1) y1))`: `T1 = [T3 -> T0]`
5. Application `(f1 x1 x1)`: `Tf1 = [Tx1 * Tx1 -> T4]`

**(iii) The inference fails.**

The operand `(lambda (y1) y1)` is the identity function, so from equation (3) it has the one-parameter type `T3 = [Ty1 -> Ty1]`.

Combining equations (1) and (4): `[Tf1 -> T2] = [T3 -> T0]`, which gives `Tf1 = T3 = [Ty1 -> Ty1]`. So `f1` is a procedure with **one** parameter.

But in the body `(f1 x1 x1)`, `f1` is applied to **two** arguments, so equation (5) forces `Tf1 = [Tx1 * Tx1 -> T4]`, a procedure with **two** parameters.

Unification must then solve the conflicting equation:

```
[Ty1 -> Ty1] = [Tx1 * Tx1 -> T4]
```

These are two procedure types of different arity (1 vs 2). `canUnify` requires equal numbers of parameters, so it cannot unify them and the algorithm reports *"Equation contains incompatible types"*. The inference fails because `f1` is bound to the identity (one parameter) yet applied to two arguments.
