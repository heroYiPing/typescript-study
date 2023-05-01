// 扩展现有的类，通过继承
// 继承：类与类之间的关系
// 子类继承父类
class Animal {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  sayHi(str: string): void {
    console.log('hi,' + str)
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age)
  }
  // 可以调用父类的方法，还可以对父类的方法进行重写
  sayHi(): void {
    console.log('dog类的方法')
    super.sayHi('狗狗')
  }
}

const a = new Animal('小猫', 3)
a.sayHi('小猫')
const d = new Dog('拉布拉多犬', 3)
d.sayHi()
// 总结：类与类之间存在继承关系，通过extends进行继承
// 子类可以调用父类的方法，通过super
// 子类还可以重写父类的方法
