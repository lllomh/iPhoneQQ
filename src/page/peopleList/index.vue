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
                            <ul class="ul">
                                <li>
                                    <span class="float-left color"> > </span>
                                    <span class="float-left">新朋友</span>
                                    <div class="clar"></div>
                                </li>
                                <li>
                                    <span class="float-left color"> > </span>
                                    <span class="float-left">创建群聊</span>
                                    <div class="clar"></div>
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
               tabsName: [{
                   name: "好友",
                   isActive: true
               }, {
                   name: "群聊",
                   isActive: false
               }, {
                   name: "设备",
                   isActive: false
               }, {
                   name: "通讯录",
                   isActive: false
               }, {
                   name: "公众号",
                   isActive: false
               }]
           }
       },
       methods: {
           tabsSwitch: function(tabIndex) {
               var tabCardCollection = document.querySelectorAll(".tab-card"),
                   len = tabCardCollection.length;
               for(var i = 0; i < len; i++) {
                   tabCardCollection[i].style.display = "none";
                   this.tabsName[i].isActive = false;
               }
               this.tabsName[tabIndex].isActive = true;
               tabCardCollection[tabIndex].style.display = "block";
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
        background: red;
    }
     .tab-card {
        display: none;
    }
   .active{
        visibility: visible!important;
    }
</style>
