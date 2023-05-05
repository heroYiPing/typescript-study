abstract class Y {
  // 定义一个抽象类
  abstract name: string // 抽象属性
  abstract sayHi() // 抽象方法  不能有具体实现
}
// 抽象类不能够实例化
class Z extends Y {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }
  // 在之类中去具体实现抽象类中的抽象方法
  sayHi() {
    console.log('hi')
  }
}
const z = new Z('张三')
console.log(z.name)
z.sayHi()
