[JavaScript小技巧](https://juejin.im/post/5cc6f07ce51d456e3a5f089b)

### 数组去重
```
var j = [...new Set([1,2,3,3,4])];
>>[1,2,3,4]
```
无敌的数组去重方法

### 过滤空值
空值指的是没有具体意义的一些值，比如0，undefined，null，false，空字符串等
```
let res = [1,2,0,undefined,null,false,''].filter(Boolean);
>> 1,2
```

### 创建空对象（Object.create(null)方式）
创建一个空对象，更多的时候会采用{}这种方式，然后这种创建方法并不是纯粹的，它仍然有_proto_属性以及继承Object原型的一些方法，这种创建方式容易被修改。
```
let o = {};
let p = Object.create(null);
Object.prototype.say = function(){
    console.log('hello')
}
console.log(o.say)
console.log(p.say)

>> f(){}
>> undefined

```
可以看到通过{}创建的对象，很容易就被修改了，而通过Object.create(null)这种方式创建的对象就很纯粹，没有任何属性和对象，非常干净。