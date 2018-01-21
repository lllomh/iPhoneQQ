<template>
    <div>

        <section class="section_home">
            <div class="y">
                <ul class="ul">
                    <li class="acivLi active">
                        <div class="ioco flota-left">
                            <div class="h">
                                <img src="../../img/qunzhu.png" alt="">
                            </div>
                        </div>
                        <div class="text flota-left">
                            <div class="u">
                                <h3>群助手</h3>
                                <p>2b年代里的一朵2b花:[图片]</p>
                            </div>
                        </div>
                        <div class="time flota-left">
                            <div class="t">
                                <time>昨天</time>
                            </div>
                        </div>
                        <div class="clar"></div>
                    </li>

                    <li class="acivLi">
                        <div class="ioco flota-left">
                            <div class="h">
                                <img src="../../img/renyou.png" alt="">
                            </div>
                        </div>
                        <div class="text flota-left">
                            <div class="u">
                                <h3>我的电脑</h3>
                                <p>[图片]IMG_1195_JPG</p>
                            </div>
                        </div>
                        <div class="time flota-left">
                            <div class="t">
                                <time>昨天</time>
                            </div>
                        </div>
                        <div class="clar"></div>
                        <div class="udlie"></div>
                        <div class="clar"></div>
                    </li>

                    <li class="acivLi">
                        <div class="ioco flota-left">
                            <div class="h">
                                <img src="../../img/mycomu.png" alt="">
                            </div>
                        </div>
                        <div class="text flota-left">
                            <div class="u">
                                <h3>我的其他QQ账号</h3>
                                <p>暂无新消息</p>
                            </div>
                        </div>
                        <div class="time flota-left">
                            <div class="t">
                                <time>昨天</time>
                            </div>
                        </div>
                        <div class="clar"></div>
                        <div class="udlie"></div>
                        <div class="clar"></div>
                    </li>


                    <li class="acivLi" v-for="(key,val) in userlist">
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
                        <div class="udlie"></div>
                        <div class="clar"></div>
                    </li>


                </ul>
            </div>
        </section>

    </div>
</template>

<script>
    import data from '../../data/data.json'
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                userlist:''
            }
        },
        mounted(){
            this.getGoodsList();
        },
        methods: {
            getGoodsList () {

                this.userlist = data.list;

                console.log(this.userlist)
            }
        }
    }

</script>

<style scoped>

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
        background: #f0f1f2;
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
    li.acivLi:last-child .udlie{
        width: 100%;
    }

</style>





















<template>
    <div class="page-loadmore">
        <h1 class="page-title">Pull down</h1>
        <p class="page-loadmore-desc">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</p>
        <p class="page-loadmore-desc">此例请使用手机查看</p>

        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
            <ul class="page-loadmore-list">
                <li >12饿13123</li>
            </ul>
            <div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus === 'loading'"><mt-spinner type="snake"></mt-spinner></span>
            </div>
        </mt-loadmore>

    </div>
</template>

<style>
</style>
<script type="text/babel">
    export default {
        data() {
            return {

                topStatus: '',
                moveTranslate: ""
            };
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
            }
        },

    };
</script>
