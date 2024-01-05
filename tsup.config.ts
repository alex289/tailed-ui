import { defineConfig } from 'tsup';

export default defineConfig((opts) => ({
  sourcemap: true,
  dts: true,
  format: ['esm', 'cjs'],
  entry: ['./src/index.ts', './src/**.tsx'],
  clean: !opts.watch,
  esbuildOptions: (option) => {
    option.banner = {
      js: `"use client";`,
    };
  },
}));
