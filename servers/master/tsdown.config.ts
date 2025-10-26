import { defineConfig } from 'tsdown';

export default defineConfig((options) => {
  return {
    entry: ['src/main.ts'],
    outDir: 'dist',
    format: 'esm',
    clean: true,
    sourcemap: true,
    bundle: true,
    external: [],

    tsconfig: './tsconfig.json',

    onSuccess: options.watch ? 'node --enable-source-maps dist/main.js' : undefined,
  };
});
