#!/bin/bash

# Install pnpm using corepack (included with Node.js 16+)
corepack enable
corepack prepare pnpm@10.12.4 --activate

# Install dependencies
pnpm install

# Run the build
pnpm run build
