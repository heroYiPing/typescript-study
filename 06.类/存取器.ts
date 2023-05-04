// 存取器，可以帮助我们对对象成员的访问
class Name {
  firstName: string
  lastName: string
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  // 设置存取器
  // 读取器-->用来读取数据
  get fullName() {
    // 姓名= 姓氏+名字
    return this.firstName + '-' + this.lastName
  }
  // 设置器 -> 用来设置数据
  set fullName(value) {
    console.log(value)
    let names = value.split('-')
    this.firstName = names[0]
    this.lastName = names[names.length - 1]
  }
}
const n = new Name('l', 'y')
console.log(n)
n.fullName = '李-一啊'
console.log(n.fullName)
