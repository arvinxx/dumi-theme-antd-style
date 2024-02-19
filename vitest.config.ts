import { defineConfig } from 'vitest/config';
import { name } from './package.json';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    setupFiles: './tests/test-setup.ts',
    environment: 'jsdom',
    globals: true,
    alias: {
      '@': new URL('./src/', import.meta.url).pathname,
      [name]: new URL('./src/', import.meta.url).pathname,
    },
    coverage: {
      all: false,
      reporter: ['text', 'text-summary', 'json', 'lcov'],
    },
  },
});
