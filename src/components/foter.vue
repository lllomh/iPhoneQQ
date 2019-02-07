<!--
 @author: 羋渡(lllomh)
 @mail:lllomh@qq.com
 @website:http://www.lllomh.cn/
 @time:2018
 @tool:phpstorm
-->

<template>
    <div>

        <footer>
            <div class="footer">
                <div class="f">
                     <div class="left_msg float-left q_width">
                         <div class="rentou">
                             <div class="q">
                                 <router-link to="/"><img src="/static/img/xiaolian.png" alt=""></router-link>
                             </div>
                         </div>
                     </div>
                     <div class="midde_poe float-left q_width">
                         <div class="q">
                             <router-link to="/list"> <img src="/static/img/renwu.png" alt=""></router-link>
                         </div>
                     </div>
                     <div class="right_msg float-left q_width">
                         <div class="q">
                             <img src="/static/img/xingxing.png" alt="">
                         </div>
                     </div>
                    <div class="clar"></div>
                </div>
            </div>
        </footer>

    </div>
</template>

<style>
    .footer .f{
        border-top: solid 1px #dedfe0;
        height: 30px;
        background: #fff;
        width: 100%;
        position: fixed;
        bottom: 0;
        padding: 10px 5px;
    }
    .q_width{
        width: 33.333333333%;
    }
    .rentou .q,.midde_poe .q,.right_msg .q{
        width: 30px;
        height: 30px;
       margin: 0 auto;
    }
    .rentou .q img,.midde_poe .q img,.right_msg .q img{
        width: 100%;
        height: auto;
    }
</style>
