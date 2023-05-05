interface ISing {
  // 这个方法是没有任何的实现
  sing()
}
interface IDance {
  dance()
}
class P implements ISing, IDance {
  dance() {
    console.log('跳舞')
  }
  sing() {
    console.log('唱歌')
  }
  // 人 唱歌，跳舞
}

class An implements ISing, IDance {
  dance() {
    console.log('跳舞')
  }
  // 动物 唱歌，跳舞
  sing() {
    console.log('唱歌')
  }
}

const p1 = new P()
const an = new An()
p1.sing()
an.sing()
p1.dance()
an.dance()
