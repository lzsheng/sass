## sass+gulp

> 该分支使用gulp编译sass(webpack也可以，就不提供了)

> DEMO使用了rem，动态计算rem使用了淘宝的[flexible.js](https://github.com/amfe/lib-flexible)（在index.html中引用了）

### 安装&运行

>     全局安装node.js
>
>     用git克隆项目(或者直接downing下来):
>     git clone https://github.com/lzsheng/sass.git
>
>     全局安装gulp:
>     npm install gulp -g
> 
>     安装相关依赖文件:
>     npm install
>     
>     编译sass->css：
>     gulp buildDevSass
>     
>     实时编译sass->css：
>     gulp watchSass

### 说明

- /sass/base/_fn.scss 为所有mixin,function的引用入口
>所以在其它*.scss文件中要使用mixin,function的功能，只需要引入_fn.scss即可(参考/sass/common/_border.scss）

- /sass/base/下的文件具体用途，请看各个文件的注释