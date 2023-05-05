// 静态方法
// 静态属性
// 只属于自己的类和方法
class A {
  static name1: string
  // constructor(name: string){}
  static sayHi() {
    console.log('hi')
  }
}

const a1 = new A()
console.log(A.name1)
A.sayHi()

// console.log(a1.name1)
// a1.sayHi()
