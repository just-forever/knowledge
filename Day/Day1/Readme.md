# @import 和 link 的区别

html 的设计制作中，css 有四种引入方式。

1、内联样式

2、嵌入样式（放在 style 标签里）

3、链接样式

用 html 头部标签引入外部 CSS 文件。

```css
<head>
<link rel='stylesheet' type='text/css' href='style.css' >
/head>
```

使用这种方式，所有的 css 代码只存于单独的 CSS 文件中，具有很好的可维护性。并且所有的 CSS 代码只存在于 CSS 文件中，CSS 文件只会在第一次加载时引入，以后切换页面只需加载 HTML 文件

4、导入样式

```css
<style>
@import('./da')
<style/>
```

## link 和 @import 的区别

区别1： link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS.
区别2： link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入后加载。所以在网速慢的情况下，会出现一开始没有CSS样式，闪烁一下出现样式后的情况。
区别3： link是XHTML标签，无兼容性问题。@import是CSS2.1提出，低版本浏览器不支持
区别4： link支持使用JavaScript控制DOM去改变样式。而@import不支持。

## 圣杯布局

