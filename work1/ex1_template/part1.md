## Part 1: Theoretical Questions

Submit the solution to this part as `part1.md`.

### [25 points] Question 1.1

1. Explain in simple words the following programming paradigms:
   1. [5 points] Imperative

      **Answer:** Imperative languages are languages where control flow is an explicit sequence of commands.

   1. [5 points] Object Oriented

      **Answer:** Object Oriented programming organizes code into objects — units that bundle data (properties) and the operations on that data (methods) together into classes. It relies on key principles: encapsulation (hiding internal details behind an interface), inheritance (reusing and extending behavior from parent classes), and polymorphism (allowing different objects to respond to the same method in different ways).

   1. [5 points] Functional

      **Answer:** Functional programming is based on composing pure functions — functions that always return the same output for the same input and produce no side effects. Data is treated as immutable (never modified in place), and instead of using loops and mutable variables, transformations are expressed through function application and composition using operations like map, filter, and reduce.
1. [5 points] How does the object oriented paradigm improve over the imperative paradigm?

   **Answer:** The Object Oriented paradigm improves over the Imperative paradigm by bundling data and the operations that act on it into objects, providing encapsulation, modularity, and code reuse (via inheritance and polymorphism). In imperative programming, data and functions are separate, making it harder to organize and maintain large codebases. OOP introduces clear abstractions and interfaces that allow programs to better model real-world entities, reduce code duplication, and limit the scope in which state can be modified — leading to more maintainable and scalable software.

1. [5 points] How does the functional paradigm improve over the object oriented paradigm?

### [10 points] Question 1.2

Consider the following TypeScript function, which calculates the average price of all discounted products in a given inventory.

```ts
type Product = {
  name: string;
  price: number;
  discounted: boolean;
};

const getDiscountedProductAveragePrice = (inventory: Product[]): number => {
  let discountedPriceSum = 0;
  let discountedProductsCount = 0;

  for (const product of inventory) {
    if (product.discounted) {
      discountedPriceSum += product.price;
      discountedProductsCount++;
    }
  }

  if (discountedProductsCount === 0) {
    return 0;
  }

  return discountedPriceSum / discountedProductsCount;
};
```

This function uses an imperative approach with loops and conditional statements.

Refactor the function `getDiscountedProductAveragePrice` to adhere to the Functional Programming paradigm. Utilize the built-in array methods `map`, `filter`, and `reduce` to achieve the same functionality without explicit iteration and conditional checks.
Write the new function under the name `getDiscountedProductAveragePriceFP`.

**Important**: the new function should have the same signature.

**Note**: there are no tests for this question, and it will not be executed. The task here is to write the code in a functional way.

### [18 points] Question 1.3

Write the most general type for each expression, using type variables where applicable.
Guidelines:

- Arrays must be homogeneous.
- Arithmetic operations must be performed on numbers.
- Use generics where possible.
- Avoid using `any`.

1. [3 points] `(x, y) => x.some(y)`
2. [3 points] `x => x.map(y => y * 2)`
3. [3 points] `(x, y) => x.filter(y)`
4. [3 points] `x => x.reduce((acc, cur) => acc + cur, 0)`
5. [3 points] `(x, y) => x ? y[0] : y[1]`
6. [3 points] `(f,g) => x => f(g(x+1))`
