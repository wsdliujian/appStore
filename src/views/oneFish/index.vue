<template>

    <div id="components-layout-demo-basic">

       <!-- <div class="ser" style="margin: 10px">
            <a-input-search placeholder="搜索" id="search" style="width: 200px" enter-button @search="onSearch"/>

        </div>-->
        <div id="table" style="margin-top: 2px">
            <a-table :columns="columns" :data-source="data" rowKey="id" :scroll="{ y: 650 }">

                   <span slot="fileVersion" slot-scope="text, record">

                     <!-- <el-button type="text" @click="dialogFormVisible = true">{{record.fileVersion}}</el-button>-->

                   <a-button type="link" @click="showModal(record)" style="font-size: 15px">{{record.fileVersion}}</a-button>

                     <a-modal v-model="visible" title="软件升版" on-ok="handleOk" :mask="false">
                      <template slot="footer">
                        <a-button key="back" @click="handleCancel">
                          取消
                        </a-button>
                        <a-button key="submit" type="primary" :loading="loading" @click="handleOk()">
                          确认
                        </a-button>
                      </template>

                            <label>
                                版本号：
                            </label>


                         <a-input placeholder="请输入版本号" style="width: 150px" v-model="inputValue"/>
                         <br>
                            <br>

                          <label style="margin-left: 14px">
                                系统：
                            </label>


                        <!-- <a-input placeholder="请输入win|lin|mac" style="width: 150px" v-model="inputSystem" />-->
<a-select default-value="win" v-model="inputSystem" style="width: 100px">
                    <a-select-option value="win">
                        win
                    </a-select-option>
                    <a-select-option value="lin">
                        lin
                    </a-select-option>
                    <a-select-option value="mac">
                        mac
                    </a-select-option>
                </a-select>
                             <el-upload
                                     style="margin-top: 10px"
                                     :headers="myHeaders"
                                     class="upload-demo"
                                     ref="upload"
                                     :action='fileTempUrl'
                                     accept=".exe"
                                     :limit="1"
                                     :on-success="fileUpload"
                                     :on-change="fileChange"
                                     :on-remove="handleRemove"
                                     :file-list="fileList"
                                     :auto-upload="false">

                              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                              <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
-->
                            </el-upload>
                    </a-modal>
                </span>

                <span slot="fileSize" slot-scope="text, record">
                  {{record.fileSize+record.unit}}
                </span>

                <span slot="imgPath" slot-scope="text, record" @click="pictureClick(record.id)">
                <el-upload
                        :action='imageTempUrl'
                        list-type="picture-card"
                        :limit="1"
                        accept="image/*"
                        :on-preview="handlePictureCardPreview"
                        :on-success="pictureUpdate"
                        :headers="myHeaders"
                >
                          <i class="el-icon-plus"></i>

                    <!--<p style="color: red;line-height: 20px;margin-top: -55px;display: none" >上传失败！</p>-->
                    <!--  <span>{{record.imgPath}}</span>-->
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                          <img width="100%" :src="dialogImageUrl" alt="">

                        </el-dialog>
                </span>

                <span slot="fileDownloadUri" slot-scope="text, record">
                        <a :href="record.fileDownloadUri"><a-icon type="cloud-download" style="font-size: 18px"/></a>
              <a-divider type="vertical"/>
                    <a-tooltip>
                        <a href="javascript:void(0);" @click="deleteFile(record.id)"><a-icon type="delete"
                                                                                             style="font-size: 18px"/></a>
                  </a-tooltip>
               </span>
            </a-table>
        </div>

    </div>


</template>
<script>
    import MyComm from "../common";
    const systemName=MyComm.getSystem();
    const ipc = require('electron').ipcRenderer;
    const columns = [
        {
            dataIndex: 'fileName',
            key: 'fileName',
            title: '应用名',

            className: 'tableStyle'
        },
        {
            dataIndex: 'fileType',
            key: 'fileType',
            title: '文件类型',
            className: 'tableStyle'

        },
        {
            title: '版本',
            /* dataIndex: 'fileVersion',*/
            key: 'fileVersion',
            scopedSlots: {customRender: 'fileVersion'},
            className: 'tableStyle'

        },
        {
            title: '大小',

            key: 'fileSize',
            scopedSlots: {customRender: 'fileSize'},
            className: 'tableStyle'

        },
        {
            title: '应用图标',
            key: 'imgPath',
            width: 400,
            scopedSlots: {customRender: 'imgPath'},
            className: 'tableStyle'
        },
        {
            title: '下载地址',
            key: 'fileDownloadUri',
            //dataIndex: 'fileDownloadUri',
            scopedSlots: {customRender: 'fileDownloadUri'},
            className: 'tableStyle'
        },

    ];
    export default {
        name: 'oneFish',
        data() {
            return {
                data: [],
                columns,
                /*   form: this.$form.createForm(this),*/
                dialogImageUrl: "",
                dialogVisible: false,

                dataId: "",
                loading: false,
                visible: false,
                fileList: [],
                inputValue:'',
                fileTempUrl:'',
                imageTempUrl:'',
                inputSystem:'',
                myHeaders:{'token': localStorage.getItem('tokenlo')}

            };
        },
        methods: {

            async fileUpload(response){
                let that = this;
               // console.log("22222",response)
                if(response.state==='false'){

                    this.$message.warning(response.meg);
                    setTimeout(function () {
                        that.$router.push({path:"/"});
                    },2000);
                    return ;
                }


                if(response.code=='200'){

                   let res= await this.$axios.get(MyComm.getUrl()+"/changeFileVersion?fileId=" + this.dataId + "&inputValue=" + this.inputValue+"&url=" + response.fileDownloadUri+"&systemName="+this.inputSystem);
                    //console.log("systemName",this.inputSystem)
                    if(res.data.state==='false'){
                        this.$message.warning(res.data.meg);
                        setTimeout(function () {
                            that.$router.push({path:"/"});
                        },2000);
                        return ;
                    }

                    if(res.data.code=='200'){
                       this.$message.success('版本修改成功！');
                       this.fileList=[];
                        this.visible = false;
                        this.loading = false;
                        this.onSearch('');

                   }else{
                       this.$message.error('版本修改失败，请联系管理员！');
                        this.fileList=[];
                        this.loading = false;
                   }

                }else {
                    this.$message.error('文件上传失败，请联系管理员！');
                    this.fileList=[];
                    this.loading = false;
                }
            },
            fileChange(fileList) {
                this.fileList = fileList;
             //   console.log("fileList",fileList)
            },
            handleRemove(fileList) {
                this.fileList = fileList;
              //  console.log(file, fileList);
            },

            showModal(data) {
                this.visible = true;
              this.inputValue=data.fileVersion;
              this.dataId=data.id;

            },
            handleOk() {
                if(this.inputValue.trim()==''){
                    this.$message.warning('请输入版本号！');
                    return;
                }else if(this.inputSystem.trim()!='win' && this.inputSystem.trim()!='lin' && this.inputSystem.trim()!='mac'){
                    this.$message.warning('请按照指示输入正确的系统名！');
                    return;
                }else if(this.fileList.length == 0){
                    this.$message.warning('请选择上传文件！');
                    return;
                }else{
                    this.loading = true;
                    this.$refs.upload.submit();
                }
            },
            handleCancel() {
                this.fileList=[];
                this.visible = false;
                this.loading = false;
            },

            handlePictureCardPreview(file) {

                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            async pictureUpdate(response, fileList) {
                let that = this;
                if(response.state==='false'){
                 
                    this.$message.warning(response.meg);
                    setTimeout(function () {
                        that.$router.push({path:"/"});
                    },2000);
                    return ;
                }

                if (response.status == 'done') {
                  let res=  await this.$axios.get(MyComm.getUrl()+"/changeImgPath?fileId=" + this.dataId + "&url=" + response.url);
                    if(res.data.state==='false'){
                        this.$message.warning(res.data.meg);
                        setTimeout(function () {
                            that.$router.push({path:"/"});
                        },2000);
                        return ;
                    }
                //  console.log("res",res)
                    if(res.data.code=='200'){
                        this.$message.success('图片上传成功！');

                    }else{
                        this.$message.error('图片上传失败，请联系管理员！');
                    }
                } else {
                    this.$message.error('图片上传失败，请联系管理员！');
                    fileList.split(0,1);
                }

            },
            pictureClick(val) {
                this.dataId = val;
                //console.log("id==",this.dataId)
            },
            deleteFile(val) {
                let that = this;
                that.$confirm({
                    title: '确定要删除应用吗？',
                    content: '删除后不可撤回！',
                    okText: '确定',
                    okType: 'danger',
                    cancelText: '取消',
                    onOk: async function () {
                        //console.log(val)

                        let res = await that.$axios.get(MyComm.getUrl()+"/delete?fId=" + val+"&systemName="+systemName);
                        if(res.data.state==='false'){
                            this.$message.warning(res.data.meg);
                            setTimeout(function () {
                                that.$router.push({path:"/"});
                            },2000);
                            return ;
                        }
                        //console.log(res);
                        if (res.data.code == 200) {
                            that.$message.success('软件删除成功！');
                            //alert('软件删除成功！');
                            that.onSearch('');


                        } else {
                            that.$message.error('软件删除失败，请联系管理员！');
                           // alert('软件删除失败，请联系管理员！');
                        }
                    },
                    oncancel() {
                    }

                })
            },
            onSearch: async function (val) {
                let that = this;
                let res = await this.$axios.get(MyComm.getUrl()+"/checkFile?search=" + val+"&systemName="+systemName);
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
            }
        },
         mounted () {
            this.fileTempUrl=MyComm.getUrl()+"/addFile";
             this.imageTempUrl=MyComm.getUrl()+"/imgTempUp";

             this.onSearch('');

        },
        created() {
            let that = this;
            ipc.on('oneFish', function (event, arg) {
                that.onSearch(arg);
            });
        }
    }


</script>
<style>
    #components-layout-demo-basic {
        text-align: left;
        margin: 1px;
        margin-top: 10px;
    }


    .ant-upload-select-picture-card i {
        font-size: 30px;
        color: #999;
    }

    .ant-upload-select-picture-card .ant-upload-text {
        margin-top: 8px;
        color: #666;
    }

    .tableStyle {
        font-size: 15px;
    }


</style>