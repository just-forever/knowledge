// watcher 订阅者 ，为Observer和Compile之间通信的桥梁。
// 1、在自身实例化的时候，往属性订阅器（dep)里面添加自己
// 2、自身必须有一个 update()方法
// 3、待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调，则功成身退。

