<!--
 @author: 羋渡(lllomh)
 @mail:lllomh@qq.com
 @website:http://gonghaibo.cn/
 @time:2018
 @tool:phpstorm
-->

<template>
    <div>
        <section class="section_list">
            <div class="l">
                <ul class="ul">
                   <li>
                       <span class="float-left">新朋友</span><span class="float-right color"> > </span>
                       <div class="clar"></div>
                   </li>
                   <li>
                       <span class="float-left">创建群聊</span><span class="float-right color"> > </span>
                       <div class="clar"></div>
                   </li>

                </ul>
                <div class="content">
                    <ul class="ulsd tabs">
                        <li class="span_atv"  v-for="(tab,index) in tabsName">
                           <a href="javascript:void(0)" @click="tabsSwitch(index)">{{tab.name}}</a>
                            <span v-bind:class="{active:tab.isActive}"></span>
                        </li>
                        <ul style="clear: both"></ul>
                    </ul>
                    <div style="clear: both"></div>

                    <div class="man_content">
                        <div class="tab-card" style="display: block">
                            <ul class="ul fend_ul">
                                <li v-for="(list,index) in friends">
                                    <span class="float-left color">{{list.ioco}}</span>
                                    <span class="float-left fnd" @click="tabbook(list)">{{list.name}}</span>
                                    <span class="float-right color suz"> {{list.lines}}/{{list.lenght}} </span>
                                    <div class="clar"></div>
                                    <ul v-if="list.isShow != false">
                                        <li class="acivLi" v-for="(chList,chIndx) in list.friendsList">
                                            <div class="mancent float-left">
                                                <div class="ioco pop float-left">
                                                    <div class="h">
                                                        <img :src="`/static/img/${chList.src}`" alt="">
                                                    </div>
                                                </div>
                                                <div class="text float-left">
                                                    <div class="u">
                                                        <h3>{{chList.name}}</h3>
                                                        <p>{{chList.p}}</p>
                                                    </div>
                                                </div>
                                                <div class="clar"></div>
                                            </div>
                                            <div class="clar"></div>
                                            <div class="udlie"></div>
                                        </li>
                                        <div class="clar"></div>

                                    </ul>
                                </li>

                            </ul>
                        </div>
                        <div class="tab-card">2</div>
                        <div class="tab-card">3</div>
                        <div class="tab-card">4</div>
                        <div class="tab-card">5</div>

                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
   export default{
       name: 'list',
       data () {
           return {
               msg: 'Welcome to Your Vue.js App',
               tabsName:[],
               friends:[
                       {
                      name:"特别关心",
                      Online:3,
                      whole:8,
                      isShow:false,
                      ioco:">",
                      friendsList:[{
                           src :"qiuyue.png",
                           name :"欧美婷",
                           p:"[Wifi在线]",
                      }],
                           lenght:0,
                           lines:0
                       },
                      {
                       name:"QQ网友",
                       Online:4,
                       whole:10,
                       isShow:false,
                       ioco:">",
                       friendsList:[{
                          src :"qiuyue.png",
                          name :"迷糊儿",
                          p:"[Wifi在线]",
                      }],
                          lenght:0,
                          lines:0
                      },
                      {
                       name:"大学好友",
                       Online:2,
                       whole:5,
                       isShow:false,
                       ioco:">",
                       friendsList:[{
                          src :"qiuyue.png",
                          name :"涣散撒",
                          p:"[Wifi在线]",
                      },{
                           src :"qiuyue.png",
                           name :"黄搜哇",
                           p:"[Wifi在线]",
                       }

                      ],
                          lenght:0,
                          lines:0
                      }

               ]

           }
       },
       mounted(){
           this.fetchData();
           this.friendLits();
       },
       methods: {
           fetchData(){
               this.$http.get('../static/data/data.json', {
                   params: {
                       OPT: '305'
                   }
               }).then(res => {
                   this.tabsName=res.data.tabsName;

               },err =>{
                   console.log('error')
               });

           },
           tabsSwitch(tabIndex) {//选项卡
               var tabCardCollection = document.querySelectorAll(".tab-card"),
                   len = tabCardCollection.length;
               for(var i = 0; i < len; i++) {
                   tabCardCollection[i].style.display = "none";
                   this.tabsName[i].isActive = false;
               }
               this.tabsName[tabIndex].isActive = true;
               tabCardCollection[tabIndex].style.display = "block";
           },
           friendLits(){//总数在线人数
               this.friends.forEach(function(value,index,array){
                   array[index].lenght=value.friendsList.length;
                   array[index].lines=value.friendsList.length;
                   console.log(array[index].lines);
               });
           },
           tabbook(list){//展开列表
               if(list.isShow==false){
                   list.isShow=true;
                   list.ioco="∨"
               }else{
                   list.isShow=false;
                   list.ioco=">"
               }
           }
       }
   }
</script>

<style scoped>
    .section_list{
        background: #fff;
    }
    .ul li:first-child{
        border-top:solid 1px #dedfe0;
    }
     .ul li{
         border-bottom: solid 1px #dedfe0;
         padding-right: 2.3%;
         padding-left: 2.3%;
     }
    .ul li span{
        font-size: 16px;
        padding-top: 3%;
        padding-bottom: 3%;
    }
    .ul .color{
        color: #c7c7c7;
    }
    .content li{
        font-size: 16px;
    }
    ul.ulsd li{
        border: none;
    }
    .ulsd li{
        float: left;
        width: 20%;
        text-align: center;
        padding-top: 2.5%;
    }
    .ulsd li a{
        color: #777777;
    }
    .ulsd{
        border-bottom: solid 1px #dedfe0;
    }
    .ulsd li span{
        display: block;
        height: 2px;
        width: 50%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 12%;
        visibility: hidden;
    }
    .span_atv span{
        background: red!important;
    }
     .tab-card {
        display: none;
    }
   .active{
        visibility: visible!important;
    }
    ul.fend_ul li{
        border: none;
    }
    ul.fend_ul li:first-child{
        border: none;
    }
    .fend_ul .fnd{
        display: inline-block;
        margin-left: 2%;
        width: 40%;

    }
    .fend_ul .suz{
        display: inline-block;margin-right: 2%;
        font-size: 14px;
    }

    .mancent{
        width: 100%;
        position: relative;
    }
    .man_content{
        margin-top: 10px;
    }

    .tmp li i{float:right;width:15%;text-align:center;background:#E2421B;color:#fff;}
    .tmp li{

    }
    .swipeleft{transform:translateX(-70%);-webkit-transform:translateX(-70%);}

    .section_list .h{
        padding-left: 2%;
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
    .ioco{
        width: 18%;
    }
    .pop .h img{
        border-radius: 50%;
    }
    .text{
        width: 60%;
    }

    .section_list .h img{
        width: 100%;
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
