
// import a from './test-a'
// a.call1('xxa');

// // import b = require('b'); //或者
// import b from 'module-declare';
// b.call('xxb');


// 全局库
// console.log(documentTitle);
// setTitle('sss')

globalLib({x:1})
// globalLib.doSomething()


// 修改全局库
// new Date().format('yyyy')


// 混合类型
// import { People } from './merge-function/merge'
// console.log(People(1)) // 函数
// console.log(People.staticA()) // 类的静态方法
// let p = new People('xx', 18) // 类的构造函数, 返回实例(接口约束)
// console.log(p.name, p.getAge())


// 在npm或UMD扩展全局变量
// import foo from './global-foo/foo';
// console.log('bar'.prependHello());
// console.log(foo())



// 重写声明文件
// success
// import  invert,{RGB}  from 'invert-color'
// let a:RGB = {
//     r: 200,
//     g: 100,
//     b: 0
//   }
//   console.log(a)
//   let instance = invert(a)
// console.log(instance)


// fail
// import {CountUp} from 'countup.js';
// const countUp = new CountUp('targetId', 5234);
// if (!countUp.error) {
//   countUp.start();
// } else {
//   console.error(countUp.error);
// }





