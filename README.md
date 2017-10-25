# 这是一个简单的自用书写插件发布到npm用的包

### 安装步骤

    1.请确保全局安装了 webpack npm

    2.下载克隆此工程

    3.npm install

    4.npm run dev (开发环境) npm run build (发布环境)
    
    * 请在lib目录下的脚本顶部加上 module.exports = 
    （因为webpack打包出来的文件没有export，而是一个大的闭包。
    又因为有图片字体等文件，插件比较丰富，所以需要webpack打包，期待更好的处理方法，
    简单的纯脚本plugin可以参考我另一个脚手架：babel-cli-plugin）

### 目录结构

> `src 开发环境`

>> css 里面app.scss用来做为example的样式,plugin.scss是plugin的样式

>> js 里面app.js用来做为example的脚本,plugin.js是plugin的脚本

>> ... 其他类如IMG等等文件夹

>> template.html 主模板/页面

> `dist 发布环境 通常是演示文件`

>> ... 产出文件 index.html为主入口

> `lib 发布NPM包 请在脚本最前面加上 module.exports = `

> node_modules 模块包

> .gitignore git 忽略文件

> index.js npm官方入口,可以在package.json中配置

> .babelrc babel配置文件

> package.json 包信息

> postcss.config.js postcss配置文件

> webpack.config.js webpack配置文件

> README.md 说明文档（本文件）

### webpack 配置

    总体：热加载(不含组件热加载),全局挂载,自动清理产出文件夹,区分处理开发和发布环境

    html：html模板引擎,svg行内挂载

    css: less sass 分离样式表 自动补全前缀hack 支持css4(与less sass 冲突 选择性使用)

    js: 支持es6 typescript 代码分离 提取公共模块 丑化

    图片：压缩 base64编码

    字体：压缩

### npm包说明

* devDependencies 为开发的配置项

* dependencies 为项目的配置项 现包括jquery(已在webpack全局挂载),font-awesome,lodash

