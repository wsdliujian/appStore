<template>
    <div id="components-layout-demo-basic">
        <div class="login-box">
            <h2>Login</h2>
           <!-- <form>-->
                <div class="login-field">
                    <input type="text" name="" required="" v-model="username">
                    <label>Username</label>
                </div>
                <div class="login-field">
                    <input type="password" name="" required="" v-model="pass_word"/>
                    <label >Password</label>

                </div>
<div  style="text-align: left;margin-top: -25px;font-size: 12px;position: relative;" > <a href="javascript:void(0);">修改密码？</a></div>

                <button type="submit" @click="login">Submit</button>
           <!-- </form>-->

        </div>

    </div>

</template>


<style>
/*    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: url(../img/xtbg2.jpeg) no-repeat center 0px;
        background-size: cover;



        background-position: center 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
        -webkit-background-size: cover;
        -o-background-size: cover;
        -moz-background-size: cover;
        -ms-background-size: cover;

    }
    .login-box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        padding:40px;
        background: rgba(0,0,0,.8);
        box-sizing: border-box;
        box-shadow: 0 15px 25px rgba(0,0,0,.5);
        border-radius: 10px;
    }
    .login-box h2{
        margin: 0 0 30px;
        padding: 0;
        text-align: center;
        color: #fff;
    }
    .login-box .login-field{
        position: relative;
    }
    .login-box .login-field input{
        width: 100%;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        margin-bottom: 30px;
        border: none;
        border-bottom: 1px solid #fff;
        outline: none;
        background: transparent;
    }
    .login-box .login-field label{
        position: absolute;
        top: 0;
        left: 0;
        letter-spacing: 1px;
        padding: 10px 0;
        font-size: 16px;
        color: #fff;
        pointer-events: none;
        transition: .5s;
    }
    .login-box .login-field input:focus ~ label,
    .login-box .login-field input:valid ~ label{
        top: -23px;
        left: 0;
        color: aqua;
        font-size: 12px;
    }
    .login-box button{
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        background: #03a9f4;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }*/
</style>
<style src="./login.css" />

<script>

    import MyComm from "../common";

    export default {
        name: 'threeFish',
        data() {
            return {

                username:'',
                pass_word:'',
                bodyBgImage: 'url(' + require('../img/xtbg2.jpeg') + ')'

            };
        },
        methods: {
            async login(){

                const that=this;
            if(this.username.trim()==""){
                this.$message.warning('请输入用户！');
                return ;
            }else if(this.pass_word.trim()==""){
                this.$message.warning('请输入密码！');
                return ;
            }
                let res=  await this.$axios.get(MyComm.getUrl()+"/login/check?username=" + this.username + "&password=" + this.pass_word);

                if(res.data.code!=null && res.data.code=='200'){
                    this.$message.success(res.data.meg);

                    localStorage.setItem("tokenlo", res.data.token);
                    localStorage.setItem("username", this.username);
                    this.username="";
                    this.pass_word="";
                    setTimeout(function () {
                        that.$router.push({path:"/layout"});
                    },2000);

                }else{
                      this.username="";
                     this.pass_word="";
                    this.$message.error(res.data.meg);
                }
            },


        },
        mounted() {
           // console.log("23232323232323232");
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundImage = this.bodyBgImage
        },
        beforeDestroy(){
            // 离开页面的时候清除
            document.body.style.backgroundImage ='none'
        }


    }
</script>
<style>
    #components-layout-demo-basic {
        text-align: center;
        /* display: flex;
         min-height: 100vh;*/


    }



</style>