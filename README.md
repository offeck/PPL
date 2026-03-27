# PPL - Principles of Programming Languages

Course assignments for **PPL (Principles of Programming Languages, 262)** at Ben-Gurion University of the Negev, 2026.

## Authors

- **Offeck Hamdi**
- **Nir Ganon**

## Course Overview

This course covers the fundamental principles of programming languages, including:

- **Functional Programming** — higher-order functions, closures, map/filter/reduce, currying, composition (TypeScript + Ramda)
- **Operational Semantics** — interpreters for languages L1-L5, AST, eval/apply, substitution & environment models
- **Type Systems** — type checking, type inference, unification
- **Runtime Abstractions** — Continuation Passing Style (CPS), generators, lazy evaluation, promises
- **Logic Programming** — Prolog, relational languages, unification, proof trees

## Repository Structure

```
PPL/
├── lecture-notes.pdf           # Course lecture notes (ground truth)
├── work1/                      # Assignment 1
│   ├── ppl262_hw_1.pdf         # Assignment instructions
│   └── ex1_template/           # Template with source and tests
│       ├── src/
│       │   ├── lib/result.ts   # Result<T> monad for error handling
│       │   ├── part2.ts        # Functional programming with Ramda
│       │   ├── part3.ts        # Error handling with Result type
│       │   └── part4.l3        # Racket/Scheme exercises
│       └── tests/              # Pre-written test suites
├── work2/                      # Assignment 2 (future)
├── work3/                      # Assignment 3 (future)
└── ...
```

## Getting Started

Each assignment lives in its own `workN/exN_template/` directory.

```bash
cd work1/ex1_template
npm install
```

## Running Tests

```bash
npm test             # Run all tests
npm run coverage     # Generate coverage report
npx tsc --noEmit     # Type check without compiling
```

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| TypeScript | 5.9 | Primary language (strict mode) |
| Ramda | 0.32 | Functional programming utilities |
| Jest | 30 | Test framework |
| ts-jest | 29.4 | TypeScript + Jest integration |
| Node.js | 22.x | Runtime |

## Assignments

| # | Topic | Status |
|---|-------|--------|
| 1 | FP in TypeScript, Result type, Racket basics | In Progress |
| 2 | TBD | - |
| 3 | TBD | - |
