<template>
    <div class="page flex-col" >
        <div class="group1 flex-row">
            <div class="main1 flex-col">
                <div class="group2 flex-col">
                 <!--   <div class="group3 flex-col">
                      &lt;!&ndash;  <div class="box1 flex-row">
                            <img
                                    class="icon1"
                                    referrerpolicy="no-referrer"
                                    src="./img/搜索@2x.png"
                            />
                            <span class="word1">搜索</span>
                        </div>&ndash;&gt;

                    </div>-->
                    <div class="block" style="margin-top: -50px;margin-left: 20px">
                        <el-avatar :size="70" :src="circleUrl">

                        </el-avatar>

                    </div>

                    <div style="float: left;margin-left: 90px;margin-top: -80px;">
                        <p style="width:100px;height:auto; word-wrap: break-word;text-Align:center">
                         <span style='font-size:20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;'>
                                   {{username}}
                            </span>
                        </p>

                        <p style="text-Align:center;width:100px;line-height: 12px"><span style="font-size: 12px">已登录</span>&nbsp;&nbsp;<a href="javascript:void(0);" @click="outLogin"><span style="font-size: 12px">退出</span></a></p>
                    </div>
                    <div class="group4 flex-col">
                        <div class="main2 flex-row" @click="changeMenu('fourFish','group4')">
                            <img
                                    class="label1"
                                    referrerpolicy="no-referrer"
                                    src="./img/应用@2x.png"
                            />
                            <span class="info1">应用下载</span>
                        </div>
                    </div>
                    <div class="group5 flex-col">
                        <div class="bd1 flex-row" @click="changeMenu('twoFish','group5')">
                            <img
                                    class="icon2"
                                    referrerpolicy="no-referrer"
                                    src="./img/上传@2x.png"
                            />
                            <span class="txt1">应用上传</span>
                        </div>
                    </div>
                    <div class="group6 flex-col group11">
                        <div class="layer1 flex-row" @click="changeMenu('oneFish','group11')">
                            <img
                                    class="icon3"
                                    referrerpolicy="no-referrer"
                                    src="./img/视频@2x.png"
                            />
                            <span class="word2">后台管理</span>
                        </div>
                    </div>

                    <div class="group6 flex-col group12">
                        <div class="layer1 flex-row" @click="changeMenu('fiveFish','group12')">
                            <img
                                    class="icon3"
                                    referrerpolicy="no-referrer"
                                    src="./img/应用@2x.png"
                            />
                            <span class="word2">已安装应用</span>
                        </div>
                    </div>

                    <div class="group6 flex-col group13">
                        <div class="layer1 flex-row" @click="changeMenu('threeFish','group13')">
                            <img
                                    class="icon3"
                                    referrerpolicy="no-referrer"
                                    src="./img/应用@2x.png"
                            />
                            <span class="word2">待更新应用</span>
                        </div>
                    </div>

                </div>
            </div>
            <div class="main3 flex-col">


                <span class="word3" >应用商店
                    <el-input placeholder="请输入内容" v-model="inputSeach" class="input-with-select"
                              style="width: 200px;  position: absolute;right: 70px;">

                        <el-button slot="append" icon="el-icon-search" @click="searchFuction"></el-button>
                    </el-input>
                </span>

                <div class="block1 flex-col"></div>
                <router-view />
            </div>
        </div>
    </div>
</template>

<script>

    import MyComm from "./common";

    const ipc = require('electron').ipcRenderer;
    export default {
        data() {
            return {
                constants: {},
                divClass:"group4",
                inputSeach:'',
                channelName:'fourFish',
                username:'',
                circleUrl: MyComm.getUrl()+"/img/userLogo.png",

            };
        },
        methods: {

            //路由内容切换
            changeMenu(route,val){
                // document.getElementsByClassName(val)[0]
                document.getElementsByClassName(this.divClass)[0].style.backgroundColor="";
                document.getElementsByClassName(val)[0].style.backgroundColor="rgba(99, 108, 118, 0.15)";
                this.divClass=val;
                if (this.$route.path !== '/'+route) {
                    //获取路由对象并切换
                    this.$router.push(route)
                }
                this.channelName=route;
            },
            searchFuction(){
                //alert(this.channelName);
                const data={
                    'channelName':this.channelName,
                    'value':this.inputSeach
                };
                ipc.send('searchChannel', data);
                this.inputSeach="";
            },
            outLogin(){
                let that=this;
                localStorage.setItem("username","");
                localStorage.setItem("tokenlo","");
                setTimeout(function () {
                    that.$router.push({path:"/"});
                },1000);
            }
        },
        mounted() {
            //document.body.style.background ="";
           // document.body.style.backgroundImage = this.bodyBgImage
            this.username=localStorage.getItem("username");

            document.getElementsByClassName(this.divClass)[0].style.backgroundColor="rgba(99, 108, 118, 0.15)";
            this.$nextTick(()=>{
                //初始加载路由对象
               this.$router.push("fourFish")

            });

        }
    };
</script>
<style src="./common.css" />
<style src="./index.css" />
<style>


</style>