# BFC

## BFC 概念

BFC: 块级格式化上下文

具有BFC 特性的元素可以看做是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且BFC容器具有普通容器所没有的特性。

## 触发条件

- body根元素
- 浮动元素： float除none 以外的值。
- 绝对定位元素： position(absolute, fixed)
- display为inline-block、table-cells 、flex
- overflow 除visible之外的值

## BFC特性及应用

1、同一个BFC下外边距会发生折叠，见index1.html

如果要避免外边距的重叠，可以将其放在不同的BFC中，见index2.html

2、BFC可以包含浮动元素（清楚浮动）见index3.html

如果触发容器的BFC，那么容器将会包裹着浮动元素

3、BFC可以阻止元素被浮动元素覆盖,如index4.html

这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 overflow: hidden，就会变成：
