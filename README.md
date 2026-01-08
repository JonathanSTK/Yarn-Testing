# Dummy Yarn Repo (TypeScript)

A small dummy repository using yarn as a package manager with TypeScript.

## Setup

Install dependencies:
```bash
yarn add lodash axios dotenv
```

Install dev dependencies:
```bash
yarn add -D typescript @types/node @types/lodash ts-node
```

## Build

Compile TypeScript to JavaScript:
```bash
yarn build
```

## Run

Run the compiled code:
```bash
yarn start
```

Or run directly with ts-node (development):
```bash
yarn dev
```

## Dependencies

- **lodash**: Utility library
- **axios**: HTTP client
- **dotenv**: Environment variable loader

## Dev Dependencies

- **typescript**: TypeScript compiler
- **@types/node**: Type definitions for Node.js
- **@types/lodash**: Type definitions for lodash
- **ts-node**: TypeScript execution engine for Node.js