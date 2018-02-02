<!--
 @author: 羋渡(lllomh)
 @mail:lllomh@qq.com
 @website:http://gonghaibo.cn/
 @time:2018
 @tool:phpstorm
-->
<template>
    <div>
        <div class="list" id="app">
            <ul class="ww">
                <li v-for="(item,index) in list">
                    111
                    <a href="#">{{item.content}}
                        <i @click="del('111',index)">删除</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    function resizeRoot(){
        var deviceWidth = document.documentElement.clientWidth,                 //计算根节点HTML的字体大小
                num = 750,
                num1 = num / 100;
        if(deviceWidth > num){
            deviceWidth = num;
        }
        document.documentElement.style.fontSize = deviceWidth / num1 + "px";
    }
    resizeRoot();                                                               //根节点HTML的字体大小初始化
    window.onresize = function(){
        resizeRoot();
    };

    export default {
        name: 'test',
        data () {
            return {
                list: [
                    {"content": "第一条数据"},
                    {"content": "第二条数据"},
                    {"content": "第三条数据"},
                ],
                expansion: null,
            }
        },
        mounted(){
            this.leftoch();

    },
    methods:{
        leftoch()
        {
            var $this = this;														//将$this保存 区分以下触发事件的this
            var container = document.querySelectorAll('.ww li');
            alert(container.length);
            for (var i = 0; i < container.length; i++) {                          //为每个特定DOM元素绑定touchstart touchmove时间监听 判断滑动方向
                var x, X;
                container[i].addEventListener('touchstart', function (event) {   //记录初始触控点横坐标
                    x = event.changedTouches[0].pageX;
                });
                container[i].addEventListener('touchmove', function (event) {
                    X = event.changedTouches[0].pageX;                          //记录当前触控点横坐标
                    if ($this.expansion) {                                       //判断是否展开，如果展开则收起
                        $this.expansion.className = "";
                    }
                    if (X - x > 10) {                                             //右滑
                        this.className = "";                                    //右滑收起
                    }
                    if (x - X > 10) {                                             //左滑
                        this.className = "swipeleft";                           //左滑展开
                        $this.expansion = this;
                    }
                });
            }
        },
        del(name, idx)
        {
            alert("确认删除" + name);
            this.list.splice(idx, 1);                                        //删除List这条数据 DOM随之更新渲染
            var container = document.querySelector('.swipeleft');           //将展开的DOM归位 除掉样式类
            container.className = "";
            this.expansion = null;
        }

    }
    }
</script>

<style scoped>
    a{color:#393939;text-decoration:none;}
    .list{overflow:hidden;margin-top:.2rem;padding-left:.3rem;border-top:1px solid #ddd;}
    .list li{overflow:hidden;width:120%;border-bottom:1px solid #ddd;}
    .list li a{display:block;height:.88rem;line-height:.88rem;-webkit-transition:all 0.3s;transition:all 0.3s;}
    .list li i{float:right;width:15%;text-align:center;background:#E2421B;color:#fff;}
    .swipeleft{transform:translateX(-15%);-webkit-transform:translateX(-15%);}
</style>