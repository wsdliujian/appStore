<template>
    <div id="components-pagination-demo-mini" :data-source="data">


        <div class="block2 flex-row">
            <div class="wrap1 flex-col">
                <div class="group7 flex-row" v-if="data.fileResponse1">
                    <div class="outer8 flex-col">
                        <img
                                class="pic5"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse1.imgPath"/>
                    </div>

                    <div class="bd2 flex-col">
                        <span class="word4">{{data.fileResponse1.fileName}}</span>
                        <span class="word5">{{data.fileResponse1.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse1.fileDownloadUri,'1')">
                            <span class="info2">{{data.fileResponse1.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="wrap2 flex-col">
                <div class="mod1 flex-row" v-if="data.fileResponse2">
                    <div class="outer8 flex-col">
                        <img
                                class="pic2"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse2.imgPath"
                        />
                    </div>
                    <div class="box4 flex-col">
                        <span class="word4">{{data.fileResponse2.fileName}}</span>
                        <span class="word5">{{data.fileResponse2.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse2.fileDownloadUri,'2')">
                            <span class="word6">{{data.fileResponse2.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="wrap3 flex-col">
                <div class="section1 flex-row" v-if="data.fileResponse3">
                    <div class="outer8 flex-col">
                        <img
                                class="pic3"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse3.imgPath"
                        />
                    </div>
                    <div class="main6 flex-col">
                        <span class="word4">{{data.fileResponse3.fileName}}</span>
                        <span class="word5">{{data.fileResponse3.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse3.fileDownloadUri,'3')">
                            <span class="word8">{{data.fileResponse3.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="wrap4 flex-col">
                <div class="block3 flex-row" v-if="data.fileResponse4">
                    <div class="outer8 flex-col">
                        <img
                                class="img1"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse4.imgPath"/>
                    </div>
                    <div class="box6 flex-col">
                        <span class="word4">{{data.fileResponse4.fileName}}</span>
                        <span class="word5">{{data.fileResponse4.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse4.fileDownloadUri,'4')">
                            <span class="txt4">{{data.fileResponse4.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block4 flex-row">
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
        </div>
        <div class="block5 flex-row">
            <div class="layer2 flex-col">
                <div class="layer3 flex-row" v-if="data.fileResponse5">
                    <div class="outer8 flex-col">
                        <img
                                class="pic4"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse5.imgPath"/>
                    </div>
                    <div class="outer2 flex-col">
                        <span class="word4">{{data.fileResponse5.fileName}}</span>
                        <span class="word5">{{data.fileResponse5.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse5.fileDownloadUri,'5')">
                            <span class="info5">{{data.fileResponse5.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="layer5 flex-col">
                <div class="bd5 flex-row" v-if="data.fileResponse6">
                    <div class="outer8 flex-col">
                        <img
                                class="img2"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse6.imgPath"/>
                    </div>
                    <div class="outer4 flex-col">
                        <span class="word4">{{data.fileResponse6.fileName}}</span>
                        <span class="word5">{{data.fileResponse6.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse6.fileDownloadUri,'6')">
                            <span class="info6">{{data.fileResponse6.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="layer6 flex-col">
                <div class="section6 flex-row" v-if="data.fileResponse7">
                    <div class="group8 flex-col">
                        <div class="outer8 flex-col">
                            <img
                                    class="pic5"
                                    referrerpolicy="no-referrer"
                                    :src="data.fileResponse7.imgPath"/>
                        </div>
                    </div>
                    <div class="group9 flex-col">
                        <span class="word4">{{data.fileResponse7.fileName}}</span>
                        <span class="word5">{{data.fileResponse7.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse7.fileDownloadUri,'7')">
                            <span class="word15">{{data.fileResponse7.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="layer7 flex-col">
                <div class="outer7 flex-row" v-if="data.fileResponse8">
                    <div class="outer8 flex-col">
                        <img
                                class="pic5"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse8.imgPath"/>
                    </div>
                    <div class="outer9 flex-col">
                        <span class="word4">{{data.fileResponse8.fileName}}</span>
                        <span class="word5">{{data.fileResponse8.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse8.fileDownloadUri,'8')">
                            <span class="info8">{{data.fileResponse8.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block6 flex-row">
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
        </div>
        <div class="block7 flex-row">
            <div class="main8 flex-col">
                <div class="outer10 flex-row" v-if="data.fileResponse9">
                    <div class="outer8 flex-col">
                        <img
                                class="pic5"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse9.imgPath"/>
                    </div>

                    <div class="outer11 flex-col">
                        <span class="word4">{{data.fileResponse9.fileName}}</span>
                        <span class="word5">{{data.fileResponse9.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse9.fileDownloadUri,'9')">
                            <span class="word16">{{data.fileResponse9.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="main9 flex-col">
                <div class="section7 flex-row" v-if="data.fileResponse10">
                    <div class="outer8 flex-col">
                        <img
                                class="pic7"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse10.imgPath"/>
                    </div>
                    <div class="block9 flex-col">
                        <span class="word4">{{data.fileResponse10.fileName}}</span>
                        <span class="word5">{{data.fileResponse10.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse10.fileDownloadUri,'10')">
                            <span class="word18">{{data.fileResponse10.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="main10 flex-col">
                <div class="section8 flex-row" v-if="data.fileResponse11">
                    <div class="outer8 flex-col">
                        <img
                                class="img3"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse11.imgPath"/>
                    </div>
                    <div class="mod4 flex-col">
                        <span class="word4">{{data.fileResponse11.fileName}}</span>
                        <span class="word5">{{data.fileResponse11.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse11.fileDownloadUri,'11')">
                            <span class="info10">{{data.fileResponse11.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="main11 flex-col">
                <div class="section9 flex-row" v-if="data.fileResponse12">
                    <div class="outer8 flex-col">
                        <img
                                class="pic8"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse12.imgPath"/>
                    </div>
                    <div class="outer13 flex-col">
                        <span class="word4">{{data.fileResponse12.fileName}}</span>
                        <span class="word5">{{data.fileResponse12.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse12.fileDownloadUri,'12')">
                            <span class="txt11">{{data.fileResponse12.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block10 flex-row">
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
        </div>
        <div class="block11 flex-row">
            <div class="mod5 flex-col">
                <div class="mod6 flex-row" v-if="data.fileResponse13">
                    <div class="outer8 flex-col">
                        <img
                                class="pic9"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse13.imgPath"/>
                    </div>
                    <div class="block13 flex-col">
                        <span class="word4">{{data.fileResponse13.fileName}}</span>
                        <span class="word5">{{data.fileResponse13.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse13.fileDownloadUri,'13')">
                            <span class="word21">{{data.fileResponse13.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mod7 flex-col">
                <div class="layer9 flex-row" v-if="data.fileResponse14">
                    <div class="outer8 flex-col">
                        <img
                                class="img4"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse14.imgPath"/>
                    </div>
                    <div class="block15 flex-col">
                        <span class="word4">{{data.fileResponse14.fileName}}</span>
                        <span class="word5">{{data.fileResponse14.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse14.fileDownloadUri,'14')">
                            <span class="txt12">{{data.fileResponse14.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mod9 flex-col">
                <div class="layer10 flex-row" v-if="data.fileResponse15">

                    <div class="outer8 flex-col">
                        <img
                                class="pic10"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse15.imgPath"/>

                    </div>

                    <div class="mod11 flex-col">
                        <span class="word4">{{data.fileResponse15.fileName}}</span>
                        <span class="word5">{{data.fileResponse15.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse15.fileDownloadUri,'15')">
                            <span class="word24">{{data.fileResponse15.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="mod12 flex-col">
                <div class="box11 flex-row" v-if="data.fileResponse16">
                    <div class="outer8 flex-col">
                        <img
                                class="pic10"
                                referrerpolicy="no-referrer"
                                :src="data.fileResponse16.imgPath"/>
                    </div>
                    <div class="mod14 flex-col">
                        <span class="word4">{{data.fileResponse16.fileName}}</span>
                        <span class="word5">{{data.fileResponse16.fileVersion}}</span>
                        <button class="box2 flex-col" @click="downloadUri(data.fileResponse16.fileDownloadUri,'16')">
                            <span class="txt14">{{data.fileResponse16.loadStatus}}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="block16 flex-row">
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
            <div class="block20 flex-col"></div>
        </div>
        <br><br>
        <a-pagination v-model="current" :total="totalPages" show-less-items @change="pageJump"/>

    </div>
</template>

<script>
    import MyComm from "../common.js";
    const ipc = require('electron').ipcRenderer;
    const systemName=MyComm.getSystem();
    export default {
        name: 'fourFish',

        data() {
            return {

                current: 1,
                totalPages: 10,
                data: {},
                pageSize: 16,
                searchStr:'',
                totalData:{},
                dataLength:0
            };
        },
        methods: {
            downloadUri(val, num) {
                let that = this;
                that.$confirm({
                    title: '确定要' + that.data['fileResponse' + num].loadStatus + '应用吗？',
                    content: '',

                    okText: '确定',

                    okType: 'danger',

                    cancelText: '取消',
                    onOk() {
                        if(val==null || val.trim()==""||val=='undefined'){
                            that.$message.error('下载路径错误！');
                            return;
                        }
                       // console.log("assss", navigator.platform)

                        const status = that.data['fileResponse' + num].loadStatus;
                        if (status == '无效') {
                            that.$message.error('下载路径错误！');
                            return;
                        }
                        if (status !== '打开') {
                            const elink = document.createElement("a")
                            elink.href = val+"?token="+localStorage.getItem("tokenlo");
                            elink.click();

                            that.data['fileResponse' + num].loadStatus = '打开';
                        } else {
                            val = val.substring(val.lastIndexOf("/") + 1, val.lastIndexOf("."));
                            val=decodeURI(val);
                            val=val.split("Setup")[0].trim();
                            ipc.send("openApp", val);
                        }
                        ipc.once('badFile', function () {
                            that.$message.error('下载路径错误！');
                            that.data['fileResponse' + num].loadStatus = '无效';
                        });
                        ipc.once('loginBad', function () {
                            that.$message.warning('登录失效，请重新登录！');
                            setTimeout(function () {
                                that.$router.push({path:"/"});
                            },2000);
                        });
                    },
                    oncancel() {
                    }
                })
            },

            pageJump: async function () {
               let length03 = Object.keys(this.totalData).length;

                    this.data={};
                    let num=this.current-1;
                    num=(num*this.pageSize)+1;
                    let totalNum=this.current*this.pageSize;
                    let index=0;
                    if(totalNum>length03){
                        for(let s=num;s<=length03;s++){
                            index++;
                            this.data['fileResponse' + index]=  this.totalData['fileResponse' + s];
                        }

                    }else{
                        for(let k=num;k<=totalNum;k++){
                            index++;
                            this.data['fileResponse' + index]=  this.totalData['fileResponse' + k];
                        }
                    }
                    this.changeBacground(Object.keys(this.data).length);
            },
            initDta: async function () {
                let that = this;
               let res = await this.$axios.get(MyComm.getUrl()+"/checkFile?search=" + this.searchStr+"&systemName="+systemName);
                if(res.data.state==='false'){
                    this.$message.warning(res.data.meg);
                    setTimeout(function () {
                        that.$router.push({path:"/"});
                    },2000);
                    return ;
                }
                if (res.data.code == 200) {
                    this.data = res.data.datas;
                }
                let length = Object.keys(this.data).length;
                let initData=[];
                if(length>0){
                       ipc.send("sendMessage", "asynchronous");
                     ipc.once('asynchronous', function (event, arg) {    // 接收异步消息
                        if (arg != null && arg.length > 0) {
                        for (let i = 0; i < length; i++) {
                                for (let f = 0; f < arg.length; f++) {
                                    if(that.data[i]!=null){
                                        let url = that.data[i].fileDownloadUri;

                                        if (url != null && url.trim().length > 0) {
                                            url = decodeURI(url);
                                            url = url.substring(url.lastIndexOf("/") + 1,url.lastIndexOf("."));
                                            if (url == arg[f]) {
                                                that.data[i].loadStatus = "打开";
                                                initData.push(that.data[ i]);
                                                break;
                                            } else {
                                                url = url.split("_")[0];
                                                if (arg[f].split("_")[0] == url) {
                                                    that.data[i].loadStatus = "更新";
                                                    initData.push(that.data[i]);
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                       }
                         that.data={};
                         that.totalData={};
                         for(let m=0;m<initData.length;m++){

                             that.totalData['fileResponse' + (m+1)]=initData[m];

                         }
                         length = initData.length;

                         if(length<=0){
                             length=0;
                             this.totalPages = 1;
                         }else {
                             let num= Math.ceil(length/that.pageSize);
                             let n= Math.floor(length/that.pageSize);

                             that.totalPages=num*10;
                             if(n>0){
                                 length=  that.pageSize;
                                 for(let k=1;k<=length;k++){
                                     that.data['fileResponse' + k]=  that.totalData['fileResponse' + k];
                                 }
                             }else {
                                 that.data=that.totalData;

                             }
                         }
                         that.changeBacground(length);
                     });



                }



            },
            changeBacground(length){
                let blockArr = document.getElementsByClassName('block20');
                for (let i = 0; i < length; i++) {
                    blockArr[i].style.backgroundColor = "rgba(216, 216, 216, 1)";
                }
                if (length < blockArr.length) {
                    for (let j = length; j < blockArr.length; j++) {
                        blockArr[j].style.backgroundColor = "";
                    }
                }
            }

        },
        mounted() {

            this.initDta();


            },
        created() {
            let that=this;
            ipc.on('fiveFish', function (event, arg) {
                that.searchStr=arg;
                that.initDta();
            });
        }

    }
</script>
<style>
    #components-pagination-demo-mini .ant-pagination-prev, .ant-pagination-next, .ant-pagination-item {
        min-width: 40px;
        height: 40px;
        line-height: 40px;
    }

    #components-pagination-demo-mini .ant-pagination {
        font-size: 17px;
        margin-left: 40%;
    }


</style>


<style src="../common.css"/>
<style src="../index.css"/>
