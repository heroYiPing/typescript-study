// 类：描述了所创建的对象共同的属性和方法
// 实例化对象
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log('hi' + str);
    }
}
let p = new Person('ly', 456); // new的时候，会执行类中的constructor方法
p.sayHi('ly');
