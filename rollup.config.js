import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";

const config = {
  input: "./src/index.jsx",
  output: {
    file: `./dist/sjs.${process.env.NODE_ENV === "production" ? "min." : ""}js`,
    format: "umd"
  },
  banner: '/* my-library version 0.12.23 */',
  footer: '/* fork me on github: dmitrykurmanov */',
  name: "SJS",
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    buble(
      { 
        jsx: "h",
        objectAssign: 'Object.assign',
        exclude: ['node_modules/**']
      }
    ),
    resolve(),
    commonjs()
  ]
};

if (process.env.NODE_ENV === "production") {
  config.plugins.push(uglify());
}

export default config;
