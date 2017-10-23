import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";

const config = {
  input: "./src/index.jsx",
  output: {
    file: "./dist/sjs.js",
    format: "umd"
  },
  name: "SJS",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    buble({ jsx: "h" }),
    resolve(), // so Rollup can find `ms`
    commonjs() // so Rollup can convert `ms` to an ES module
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(uglify());
}

export default config;
