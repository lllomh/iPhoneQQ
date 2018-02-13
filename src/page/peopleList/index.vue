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
                    <ul class="ulsd">
                        <li class="span_atv">
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">群聊</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">设备</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">通讯录</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">公众号</router-link>
                            <span></span>
                        </li>
                        <ul style="clear: both"></ul>
                    </ul>
                    <div style="clear: both"></div>
                </div>
            </div>
        </section>`

    </div>
</template>

<script>

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

    }
    .span_atv span{
        background: red;
    }
</style>
