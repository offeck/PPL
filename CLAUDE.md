# PPL - Principles of Programming Languages (BGU, 2026)

## Project Overview

University course assignments for **PPL (Principles of Programming Languages)** at Ben-Gurion University.
Instructor's lecture notes: `lecture-notes.pdf` (Meni Adler, 160 pages) — this is the **ground truth** for all course material.

## Ground Truth: Lecture Notes Reference

The file `lecture-notes.pdf` is the authoritative source for this course. When helping with assignments:
- **Always consult the lecture notes** before answering theoretical questions or suggesting implementations
- Terminology, definitions, and notation must match the lecture notes exactly
- The notes are in Hebrew with code examples in English (TypeScript, Scheme/Racket, Prolog)

### Lecture Notes Structure (page ranges for quick lookup)
| Chapter | Pages | Topic |
|---------|-------|-------|
| 1 | 1-29 | Intro to FP in TypeScript: syntax, semantics, types, higher-order functions, map/filter/reduce, currying, compose, function equivalence, type checking |
| 2.1-2.2 | 30-49 | Languages L1-L3: lambda, if, let, pairs, lists, closures, environments |
| 2.3-2.4 | 50-69 | Operational semantics: AST, parser, eval, interpreter implementation (L3-eval.ts, L3-value.ts, L3-env.ts) |
| 2.5 | 70-89 | Normal order vs applicative order, substitution model, environment model, letrec, mutation |
| 3 | 92-118 | Type systems (L5): type syntax, type annotations, typing rules, type checker, type inference, substitution-ADT, unification |
| 4.1-4.2 | 119-130 | Runtime: CPS (Continuation Passing Style), tail form, CPS conversion protocol |
| 4.3-4.4 | 131-137 | Generators, lazy lists, promises, async |
| 5.1 | 138-149 | Logic programming: Prolog/relational language, facts, rules, queries, unification, proof trees, Gsel, Rsel |
| 5.2-5.3 | 150-160 | Logic data structures (trees, lists, numbers), interpreter implementation in L4 |

### Key Concepts per Assignment Type
- **Functional programming (TS)**: Ramda library, map/filter/reduce, compose, curry, no side-effects, Result type
- **Scheme/Racket (L3)**: cons/car/cdr, lambda, define, let, recursion, higher-order functions
- **Type system**: typing rules (Tenv |-- e : t), type checking, type inference, unification
- **Interpreter**: AST representation, eval, apply, closures, environments (ExtEnv, makeEnv)
- **CPS**: tail form detection, CPS conversion protocol (add $ suffix, cont parameter)
- **Logic programming**: facts, rules, queries, unification algorithm, proof trees

## Project Structure

```
PPL/
  lecture-notes.pdf          # Ground truth - course lecture notes
  work<N>/                   # Assignment N folder
    ppl262_hw_<N>.pdf        # Assignment instructions
    ex<N>_template/          # Provided template with tests
      src/                   # Source code to implement
      tests/                 # Test files (DO NOT MODIFY)
      package.json           # Dependencies
      tsconfig.json          # TypeScript config
```

## Development

### Commands (run from `work<N>/ex<N>_template/`)
```bash
npm install          # Install dependencies
npm test             # Run all tests (Jest)
npm run coverage     # Test coverage report
npx tsc --noEmit     # Type check only
```

### Tech Stack
- **TypeScript 5.9** with strict mode for Parts 2-3
- **Ramda 0.32** for functional programming utilities
- **Jest 30** with jest-extended for testing
- **Racket/Scheme** syntax for L3 language parts (Part 4)

### Coding Conventions
- Use **functional style**: no mutations, no side-effects, prefer map/filter/reduce
- Use **Ramda** functions as taught in lectures (R.map, R.filter, R.reduce, R.pipe, R.compose, etc.)
- Follow **Result<T> monad pattern** from `src/lib/result.ts` for error handling (makeOk, makeFailure, bind, either)
- Type signatures should be as **general as possible** (use generics, avoid `any`)
- Match lecture notes terminology and approach exactly

## How to Help

1. **Read the assignment PDF** first to understand requirements
2. **Reference lecture notes** (specific pages) when explaining concepts
3. **Guide, don't just give answers** — explain the "why" using course concepts
4. **Tests are provided** — implementation should make them pass
5. **Part 1 (theory)** answers must use course terminology from the lecture notes
6. For theoretical questions, cite the relevant lecture notes section
