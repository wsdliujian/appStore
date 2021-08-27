<template>
    <div id="components-layout-demo-basic">
    <a-spin tip="Loading..." :spinning="spinning">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 7 }" @submit="handleSubmit" id="myForm">
            <a-form-item label="应用名">
                <a-input
                        v-decorator="['fileName', { rules: [{ required: true, message: '请输入你的应用名!' }] }]"
                />
            </a-form-item>

            <a-form-item label="文件类型">
                <a-input
                        v-decorator="['fileType', { rules: [{ required: true, message: '请输入文件类型!' }] }]"
                />
            </a-form-item>

            <a-form-item label="版本号">
                <a-input
                        v-decorator="['fileVersion', { rules: [{ required: true, message: '请输入版本号!' }],

              }]"
                />
            </a-form-item>

            <a-form-item label="文件大小">
                <a-input-number :min="1" :max="1000000000" :default-value="3" @change="onChange"
                                v-decorator="['fileSize', {}]"/>
            </a-form-item>


            <a-form-item label="单位"
                         :wrapper-col="{span: 2}">

              <!--  <a-input placeholder="请输KB|MB|GB"
                        v-decorator="['unit', {}]"
                />-->

                <a-select default-value="KB" v-decorator="['unit', {}]">
                    <a-select-option value="KB">
                        KB
                    </a-select-option>
                    <a-select-option value="MB">
                        MB
                    </a-select-option>
                    <a-select-option value="GB">
                        GB
                    </a-select-option>
                </a-select>


            </a-form-item>

            <a-form-item label="系统名"  :wrapper-col="{span: 2}">
               <!-- <a-input placeholder="请输入win|lin|mac"
                        v-decorator="['systemName', {}]"
                />-->

                <a-select default-value="win" v-decorator="['systemName', {}]">
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
            </a-form-item>

            <a-form-item label="Upload" :wrapper-col="{span: 3}">
                <a href="javascript:void(0);" class="file">选择文件
                    <a-input type="file" name="file"/>
                    <!--<input type="file" name="" id="">-->
                </a>
            </a-form-item>


            <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
                <a-button type="primary" html-type="submit">
                    Submit
                </a-button>
            </a-form-item>
        </a-form>
    </a-spin>


    </div>
</template>

<script>
    import MyComm from "../common.js";
    export default {
        name: 'twoFish',
        data() {
            return {
                formLayout: 'horizontal',
                form: this.$form.createForm(this, {name: 'coordinated'}),
                spinning: false
            };
        },
        methods: {
            handleMenuClick(e) {
                console.log('click', e);
            },
            onChange(value) {

                console.log('changed', value);
            },
            handleSubmit(e) {
                let that = this;
                e.preventDefault();
                this.form.validateFields((error, values) => {
                    let form = document.getElementById("myForm");
                    let formData = new FormData(form);

                    console.log('formData: ', formData);
                    this.spinning = true;
                    this.$axios.post( MyComm.getUrl()+'/addFile', formData).then((res) => {
                        if(res.data.state==='false'){
                            this.$message.warning(res.data.meg);
                            setTimeout(function () {
                                that.$router.push({path:"/"});
                            },2000);
                            return ;
                        }

                        if (res.data.code == 200) {
                            values.fileDownloadUri = decodeURI(res.data.fileDownloadUri);
                            this.$axios.post( MyComm.getUrl()+'/addFileStoreBase', values).then((result) => {
                                this.spinning = false;
                                if(result.data.state==='false'){
                                    this.$message.warning(result.data.meg);
                                    setTimeout(function () {
                                        that.$router.push({path:"/"});
                                    },2000);
                                    return ;
                                }


                                if (result.data.code == 200) {
                                    this.$message.success('文件上传成功！');

                                } else {
                                    this.$message.error('文件上传失败，请联系管理员！');
                                }
                            }).catch((err) => {
                                this.spinning = false;
                                console.log('Received values of form: ', err);
                            })
                        } else {
                            this.$message.warning('文件上传错误，请重新选择文件！');
                            this.spinning = false;
                            return;
                        }
                    }).catch((err) => {
                        this.spinning = false;
                        console.log('Received values of form: ', err);
                    });

                });
            },
        },
    }
</script>
<style>
    #components-layout-demo-basic {
        text-align: left;
        margin: 1px;
    }

    .file {
        position: relative;
        display: inline-block;
        background: #D0EEFF;
        border: 1px solid #99D3F5;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #1E88C7;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
    }

    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }

    .file:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
    }



</style>