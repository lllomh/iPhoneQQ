<!--
 @author: 羋渡(lllomh)
 @mail:lllomh@qq.com
 @website:http://gonghaibo.cn/
 @time:2018
 @tool:phpstorm
-->

<template>
    <div>
       <header>
           <div class="header">
               <div class="h">
                    <div class="loimg flota-left">
                        <div class="y">
                            <img src="/static/img/logo.jpg" alt="">
                        </div>
                    </div>
                    <div class="lomisg flota-left">
                        <div  class="y">
                            消息
                        </div>
                    </div>
                    <div class="lojia flota-left">
                        <div class="y">
                            <img src="/static/img/jia.svg" alt="">
                        </div>
                    </div>
                    <div class="clar"></div>
               </div>
               <div class="seach">
                   <div class="u">
                       <input type="text" value=""/>
                   </div>
               </div>
           </div>
       </header>
    </div>
</template>



<style>

    @import url('../style/style.css');

 .header .h{
     width: 100%;
     height: auto;
     background: #3ca8fe;
 }
  .header .h .loimg{
      width: 40%;
  }
  .header .h .lomisg{
        width: 20%;
    }
  .header .h .lojia{
        width: 40%;
    }
  .loimg .y{
      margin-top:15%;
      margin-left: 7%;
      margin-bottom: 2%;
      width: 35px;
      height: 35px;
  }
    .loimg .y img{
        width: 100%;
        border-radius:50%;
    }
    .lomisg .y{
        text-align: center;
        color: #fff;
        font-size: 19px;
        margin-top: 37%;
    }
    .lojia .y{
        text-align: right;
        margin-top: 18%;
        margin-right: 7%;

    }
    .lojia .y img{
        width: 20px;
        height: 20px;
    }
    .seach .u{
        text-align: center;
    }
    .seach .u input{
        margin-top: 2.3%;
        width: 88.5%;
        border: none;
        background-color: #eeeff3;
        background-image:url("/static/img/flxio.svg");
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: 4px;
        padding: 1.6% 0;
        padding-left: 7%;
        border-radius: 3px;

    }

</style>