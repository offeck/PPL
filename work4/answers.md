1.1.a
Two lazy lists lz1 and lz2 are equivalent iff they produce the same sequence of values:
for every index n, either both lists have no nth element, or both have an nth element and those two elements are equal.

Equivalently, for every natural number n, (take lz1 n) = (take lz2 n).

1.1.b

The two lazy lists are equivalent because they produce the same sequence of values.

`even-square-1` first maps every integer `x` to `x^2`, producing:

0, 1, 4, 9, 16, 25, 36, ...

Then it filters this list and keeps only the even values:

0, 4, 16, 36, 64, ...

`even-square-2` first filters the integers and keeps only the even integers:

0, 2, 4, 6, 8, ...

Then it maps every remaining integer `x` to `x^2`, producing:

0, 4, 16, 36, 64, ...

These two results are the same because for every integer `x`, `x` is even iff `x^2` is even. Therefore filtering after squaring and filtering before squaring keep exactly the same relevant elements, and both lazy lists produce the sequence `(2n)^2` for `n = 0, 1, 2, ...`.

By the equivalence criterion from 1.1.a, for every natural number `n`, `(take even-square-1 n) = (take even-square-2 n)`, so the two lazy lists are equivalent.