# CSS

## css的权重问题

- important最高
- 内敛: 1000
- ID: 100
- 类选择器class: 10
- tag： 1

## CSS的垂直居中

## dom结构的渲染

## transform 和 position  margin的优劣

transform 优点：不定宽高， 缺点： CSS3属性，兼容性不好。
margin padding的方式，缺点： 需要定宽高.

## CSS开启GPU 加速

1、 transform
2、 opacity
3、 filter
4、 will-change

1）过多的开启硬件加速可能会耗费较多的内存，因此什么时候开启硬件加速，给多少元素加硬件加速，需要测试。
2）GPU渲染会影响字体的抗锯齿效果，因为GPU和CPU具有不同的渲染机制。

## CSS选择器执行顺序

渲染引擎解析CSS选择器时是从右往左解析的。

```html
<div>
   <div class="jartto">
      <p><span> 111 </span></p>
      <p><span> 222 </span></p>
      <p><span> 333 </span></p>
      <p><span class='yellow'> 444 </span></p>
   </div>
</div>
```

```css
div > div.jartto p span.yellow{
   color:yellow;
}
```

按照「从右往左」的方式分析
1、首先查找class=“yellow” 的 span 元素；
2.接着检测父节点是否为 p 元素，如果不是则进入同级其他节点的遍历，如果是则继续匹配父节点满足 class=“jartto” 的 div 容器；
3.这样就又减少了集合的元素，只有符合当前的子规则才会匹配再上一条子规则。

>浏览器CSS匹配核心算法的规则是从右往左方式匹配节点的。

样做是为了减少无效匹配次数，从而匹配快、性能更优。所以，我们在书写 CSS Selector 时，从右向左的 Selector Term 匹配节点越少越好
