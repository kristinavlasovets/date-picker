import { babel } from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import replacement from 'rollup-plugin-module-replacement';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';
import { createRequire } from 'node:module';
import alias from '@rollup/plugin-alias';

const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
const path = require('path');
const Resolver = resolve({
  extensions: ['.mjs', '.ts', '.tsx', '.json', '.js', '.jsx'],
  browser: true,
});

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        plugins: ['@babel/plugin-transform-runtime'],
        external: [/@babel\/runtime/, 'react'],
      }),
      peerDepsExternal(),
      alias({
        entries: [
          {
            find: '@',
            replacement: path.resolve(__dirname, 'src'),
          },
        ],
        Resolver,
      }),
      resolve(),
      svgr({ icon: true }),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['src/**/*.test.(tsx|ts)'],
      }),
      postcss({
        extensions: ['.css'],
      }),
    ],
  },
  {
    input: 'lib/index.d.ts',
    output: [{ file: 'lib/index.d.ts', format: 'es' }],
    plugins: [dts()],
    external: [/\.css$/, 'styled-components'],
  },
];
