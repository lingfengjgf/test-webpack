// import "./style/index.css";
// import "./style/index.less";
// import { a } from "./a";

// console.log("index.js" + a);

// js模块处理 babel 7.x

// import "@babel/polyfill";
const arr = [new Promise(() => {}), new Promise(() => {})];

arr.map((item) => {
  console.log(item);
});
