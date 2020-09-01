
# webpack

## tree-shaking && code-spliting

tree-shaking 压缩式删除代码无用的模块

code-spliting 切割代码，分成多个bundle，按需加载。

## es module 和  commonJS

前者是编译时加载，后者是运行时加载。(import 必须放在开头， require可以在代码中间)
前者是值的引用，后者是值的拷贝。(import 为解构过程， require为赋值过程)

## plugin 和 loader

相对于loader转换指定类型的模块功能，plugins能够被用于执行更广泛的任务比如打包优化、文件管理、环境注入等……

## npm 模块安装机制

- 发出npm install命令
- 查询node_modules目录之中是否已经存在模块
1、若存在，不再重新安装
2、若不存在，
	a、npm向registry查询模块压缩包的网址
	b、下载压缩包，存放在根目录下的.npm目录里
	c、解压压缩包到当前项目的node_modules目录中。

## 常见loader

- raw-loader: 加载文件原始内容
- file-loader: 把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)
- url-loader: 与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)
- image-loader: 加载并且压缩图片文件
- babel-loader: 把 ES6 转换成 ES5
- ts-loader: 将 TypeScript 转换成 JavaScript
- sass-loader: 将SCSS/SASS代码转换成CSS
- eslint-loader: 通过 ESLint 检查 JavaScript 代码
- i18n-loader: 国际化

## 哪些常见的plugin

- define-plugin: 定义环境变量 (Webpack4 之后指定 mode 会自动配置)
- webpack-bundle-analyzer: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)
- mini-css-extract-plugin: 分离样式文件，CSS 提取为独立文件，支持按需加载

## webpack 构建流程

- 初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler
- 编译： 从