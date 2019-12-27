# 单行文本溢出

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

# 多行文本溢出

```js
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```

1. -webkit-line-clamp用来限制在一个块元素显示的文本的行数。实现效果，必须组合其他Webkit属性。
2. display： -webkit-box;必须结合的属性，将对象作为弹性伸缩盒子模型显示。
3. -webkit-box-orient: 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式
