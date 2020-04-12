import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";
import vue from "rollup-plugin-vue";
import svg from "rollup-plugin-vue-inline-svg";
import typescript from "rollup-plugin-typescript2";
import bundleSize from "rollup-plugin-bundle-size";
import { eslint } from "rollup-plugin-eslint";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const isDev = process.env.NODE_ENV === "development";

const base = {
  input: "src/index.ts",
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: ["node_modules", "src/**/*.svg"],
    }),
    svg(),
    vue(),
    typescript(),
    babel({
      runtimeHelpers: true,
      extensions: [".js", ".ts", ".tsx", ".vue"],
    }),
    commonjs(),
    bundleSize(),
  ],
  external: ["vue", "vue-functional-data-merge"],
};

if (!isDev) {
  base.plugins.push(terser());
}

export default {
  ...base,
  output: [
    ...(!isDev
      ? [
          {
            file: pkg.browser,
            name: "AsComponents",
            format: "umd",
            globals: {
              vue: "Vue",
              "vue-functional-data-merge": "vue-functional-data-merge",
            },
          },
          {
            file: pkg.main,
            format: "cjs",
          },
        ]
      : []),
    {
      file: pkg.module,
      format: "es",
    },
  ],
};
