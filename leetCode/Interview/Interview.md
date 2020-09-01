# doc

## [].slice.call(arguments)

先放结论：[].slice.call(arguments)能将具有length属性的对象转成数组。
[].slice === Array.prototype.slice

[]本身是一个对象，数组的原型链上有slice这个方法，所以实际上调用的是Array.prototype.slice方法。
通过call来显示绑定arguments, 实现arguments有slice方法。

这就是说：Array.prototype.slice.call(arguments,0)这句里，就是把 arguments 当做当前对象
也就是说 要调用的是 arguments 的slice 方法，后面的 参数 0 也就成了 slice 的第一个参数，slice(0)就是获取所有。
