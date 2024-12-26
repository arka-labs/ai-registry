import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  clean: true,
  splitting: false,
  bundle: true,
  dts: true, // Generate TypeScript declarations
  outDir: 'dist',
});
