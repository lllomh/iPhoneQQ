# 前言

  这是仿手机QQ的vue2.0项目,也算是新手捣鼓的入门吧.为啥选择QQ呢?因为QQ里的交互算是挺多的了,此项目还正在完善中,也是用业余时间来写.
  周期有点长,每天都添砖加瓦一点.慢慢累积!
__注：此项目纯属个人瞎搞，不涉及QQ等问题。__





## 技术栈
vue2.0  + vue-router + webpack + ES6/7 + svg



# 项目运行

#### 注意：由于涉及 ES6/7 等新属性，nodejs 必须是 6.0 以上版本 ，node 7 是测试版，有可能会出问题，建议使用 node 6 稳定版 😱

```
git clone https://github.com/lllomh/iPhoneQQ.git 

cd iPhoneQQ

npm install

```

### 编译环境
```
npm run dev

访问 http://localhost:8080
```


### 线上版本
```
npm run build

生成的dist文件夹放在服务器即可正常访问
```




# 说明

>  本项目主要用于熟悉如何用 vue2 架构一个交互形项目

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  开发环境 macOS 10.12.3  Chrome 55 + win10 + 火狐

>  特别感谢我自己,一天一天坚持下来,辛苦了🌹

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍

>  另外一个 vue2 + vue-router 的入门项目，比当前的项目简单很多，非常适合入门练习。[地址在这里](https://github.com/lllomh/vue-blog.git)



# 关于 demo 与 数据 的说明🤔

1、demo的数据为模拟的固定数据，只做为效果演示。


## 效果演示

#### (demo使用的是模拟数据，数据是固定的，只做为样式的演示，要获取真实的数据，请clone代码并运行);

[查看demo请戳这里](http://app.gonghaibo.cn/)（请用chrome手机模式预览）
   
### 移动端扫描下方二维码

![](http://app.gonghaibo.cn/static/img/fnx.png)





# 目标功能
- [x] 消息列表页面 -- 完成
- [x] 消息列表滑动菜单 -- 完成
- [x] 消息删除 -- 完成
- [x] 消息标记未读已读 -- 完成
- [x] 下拉刷新 -- 完成
- [ ] 好友列表 -- 未完成
- [ ] 好友列表展开 -- 未完成
- [ ] 聊天界面 -- 未完成
- [ ] 修改个人资料 -- 未完成
- [ ] 好友资料详情 -- 未完成
- [ ] 动态界面 -- 未完成
- [ ] QQ空间模块 -- 未完成




# 总结


1、最近比较忙,进度有些缓慢!做这个让我觉得挺有趣的,反正闲着也是闲着.不如找点事情做!这个QQ全部加起来功能也不少,还需努力!

2、项目还未完成，再接再厉。


# 最终目标

1、用node.js构建一个模拟电商的后台系统。(已经开始规划)

2、利用 vue2 写出跨ios,安卓混合app。

3、如果时间来的及，会出一个pc端的网页版。

所以我的目的是构建一个横跨前后端，移动IOS、Android的完整全栈开发工程师。

。。。敬请期待




# 部分截图


### 整体演示(半成品'正在更新中')

<img src="http://app.gonghaibo.cn/static/img/yanshi/GIF.gif" width="365" height="619"/>






# 项目布局
```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- dist                           	 // 上线项目文件，放在服务器即可正常访问
|-- yanshi                           // 项目截图
|-- src                              // 源码目录
|   |-- components                   // 组件
|       |-- footer                   // 底部公共组件
|       |-- header                 	 // 头部公共组件
|   |-- data                         // 数据目录
|       |-- data.json                // 模拟数据
|   |-- page
|       |-- home                     // 消息列表页
|		  	|--index
|       |-- peoplelist               // 好友列表页
|		  |--index
|
|   |-- router                       // 路由配置
|
|   |-- style                        // 全局样式
|		|-- style.css                 
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```

