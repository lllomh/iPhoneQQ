<!--
 @author: 羋渡(lllomh)
 @mail:lllomh@qq.com
 @website:http://gonghaibo.cn/
 @time:2018
 @tool:phpstorm
-->
<template>
    <div>

        <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <section class="section_home">
            <div class="y">
                   <ul class="tmp ul">
                    <li class="acivLi" v-for="(key,index) in list">
                       <div class="mancent flota-left">
                        <div class="ioco pop flota-left">
                            <div class="h">
                                <img :src="`/static/img/${key.src}`" alt="">
                            </div>
                        </div>
                        <div class="text flota-left">
                            <div class="u">
                                <h3>{{key.name}}</h3>
                                <p>{{key.p}}</p>
                            </div>
                        </div>
                        <div class="time flota-left">
                            <div class="t">
                                <time>{{key.time}}</time>
                            </div>
                        </div>
                           <div class="clar"></div>
                           <span class="prompt" v-if="key.num != 0">{{key.num}}</span>
                      </div>
                        <div class="bj flota-left" @click="del('',index)">删除</div>
                        <div class="bj yd flota-left" @click="reade(index)">{{key.text}}</div>
                        <div class="bj zd flota-left" @click="tops(index)">置顶</div>
                        <div class="clar"></div>
                        <div class="udlie"></div>
                        <div class="clar"></div>
                    </li>
                  </ul>
            </div>
        </section>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
            </div>
        </mt-loadmore>

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

//    import data from '../../data/data.json'
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                list:[
                    {
                        "src":"qunzhu.png",
                        "name":"群助手",
                        "p":"javascript技术交流:[图片]",
                        "time":"昨天",
                        "num":"0",
                        "text":"标为未读"
                    },
                    {
                        "src":"renyou.png",
                        "name":"我的电脑",
                        "p":"图片]IMG_1195_JPG",
                        "time":"前天",
                        "num":"0",
                        "text":"标为未读"
                    },
                    {
                        "src":"mycomu.png",
                        "name":"我的其他QQ账号",
                        "p":"暂无消息",
                        "time":"昨天",
                        "num":"0",
                        "text":"标为未读"
                    },
                    {
                        "src":"qiuyue.png",
                        "name":"秋月",
                        "p":"[QQ电话]未接听,点击回拨",
                        "time":"星期二",
                        "num":"0",
                        "text":"标为未读"
                    },
                    {
                        "src":"hu.jpg",
                        "name":"胡燕杰",
                        "p":"在不在",
                        "time":"01-07",
                        "num":"0",
                        "text":"标为未读"
                    },
                    {
                        "src":"qiuyue.png",
                        "name":"秋丹",
                        "p":"好",
                        "time":"01-02",
                        "num":"0",
                        "text":"标为未读"
                    }
                ],
                topStatus: '',
                moveTranslate: "",
                expansion : null,

            }
        },
        mounted(){
            this.leftoch();
        },
        methods: {
            handleTopChange(status) {    //默认没有下拉动作
                this.moveTranslate = 1;
                this.topStatus = status;
            },

            loadTop() {

                setTimeout(() => {       //动作完成

                    this.$refs.loadmore.onTopLoaded();
                }, 1500);
            },

            leftoch(){
                var $this=this;														//将$this保存 区分以下触发事件的this
                var container = document.querySelectorAll('.tmp li');

                for(var i = 0; i < container.length; i++){                          //为每个特定DOM元素绑定touchstart touchmove时间监听 判断滑动方向
                    var x,  X;
                    container[i].addEventListener('touchstart', function(event) {   //记录初始触控点横坐标
                        x = event.changedTouches[0].pageX;
                    });
                    container[i].addEventListener('touchmove', function(event){
                        X = event.changedTouches[0].pageX;                          //记录当前触控点横坐标
                        if($this.expansion){                                       //判断是否展开，如果展开则收起
                            $this.expansion.className = "";
                        }
                        if(X - x > 10){                                             //右滑
                            this.className = "acivLi";
                            container[0].className="active";                        //右滑收起
                        }
                        if(x - X > 10){                                             //左滑
                            this.className = "acivLi swipeleft";                           //左滑展开
                            $this.expansion = this;

                        }
                    });


                }
                container[0].className="active"

            },
            del(name,idx){  //删除
                alert("确认删除"+name);
                this.list.splice(idx,1);                                        //删除List这条数据 DOM随之更新渲染
                var container = document.querySelector('.swipeleft');           //将展开的DOM归位 除掉样式类
                container.className="";
                this.expansion=null;
            },
            reade(id){ //已读操作
                var container = document.querySelectorAll('.tmp li');
                if(this.list[id].num == 0) {
                    this.list[id].text = "标为已读";
                    container[id].className="acivLi";
                    this.list[id].num = 1;

                }else {

                    this.list[id].text = "标为未读";
                    container[id].className="acivLi";
                    this.list[id].num = 0;
                }

            },
            tops(id){                      //置顶排序
                var container = document.querySelectorAll('.tmp li');
                this.list.splice(0,0,(this.list[id]));
                this.list.splice(id+1, 1);
                container[id].className="acivLi";
            }

    }
 }

</script>

<style scoped>
    .mancent{
        width: 100%;
        position: relative;
    }
    .bj{
        background: #ff3b30;
        float: right;
        margin-right: -70%;
        padding: 10% 4%;

        border-bottom: solid 1px #dedfe0;
        color: #fff;
        font-size: 17px;
        text-align: center;
    }
    .yd{
        margin-right: -54%;
        padding: 10% 10%;
        background: #ff9c00;
    }
    .zd{
        margin-right: -19%;
        background: #c7c7cc;
    }
    .prompt{
        position: absolute;
        top:48%;
        right: 4%;
        background: #f74c31;
        width: 15px;
        height: 15px;
        line-height: 15px;
        border-radius: 50%;
        display: block;
        font-size: 12px;
        text-align: center;
        color: #fff;


    }
    .tmp li i{float:right;width:15%;text-align:center;background:#E2421B;color:#fff;}
    .tmp li{

    }
    .swipeleft{transform:translateX(-70%);-webkit-transform:translateX(-70%);}

    .section_home .y{
        margin-top: 2.3%;
    }
    .section_home .y .h{
        padding-left: 18%;
        margin-top: 14%;
        padding-bottom: 11%;
        width: 50px;
        height: 50px;
    }
    .ul li{
        -webkit-transition:all 0.3s;transition:all 0.3s;
    }
    .ul li h3{
        font-size: 18px;
    }
    .section_home ul li{
        background: #fff;
    }
    .ioco{
        width: 20%;
    }
    .pop .h img{
        border-radius: 50%;
    }
    .text{
        width: 60%;
    }
    .time{
        width: 20%;
    }
    .section_home .y .h img{
        width: 100%;
    }

    .active{
        background: #f0f1f2!important;
    }
    .text .u{
        margin-left: 1%;
        margin-top: 7%;
    }
    .text .u p{
        font-size: 15px;
        margin-top: 2%;
        color: #868687;
    }
    .time .t{
        text-align: right;
        padding-right: 17%;
        margin-top: 17%;
        font-size: 12px;
        color: #a1a1a1;
    }
    .udlie{
        background: #dedfe0;height: 1px;width: 80%;float: right
    }
    .tmp li.acivLi:last-child .udlie{
        width: 100%;
    }

</style>










