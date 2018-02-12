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
                        <li>
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                        <li>
                            <router-link to="/">好友</router-link>
                            <span></span>
                        </li>
                    </ul>
                    <div style="clear: both"></div>
                </div>
            </div>
        </section>

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
    }
</style>
