class P {
    dance() {
        console.log('跳舞');
    }
    sing() {
        console.log('唱歌');
    }
}
class An {
    dance() {
        console.log('跳舞');
    }
    // 动物 唱歌，跳舞
    sing() {
        console.log('唱歌');
    }
}
const p1 = new P();
const an = new An();
p1.sing();
an.sing();
p1.dance();
an.dance();
