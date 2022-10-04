<template>
  
    <div class="form-login">
        <div class="login-m">
            <div class="login-header">
                <a href="" class="logo-header"> MISA Promotion Process</a>
            </div>
            <div class="login-main">
                <div class="row-input">
                    <div class="icon-user">

                    </div>
                      <input type="text" v-model="userName" class="user-name">
                </div>
                <div class="row-input">
                    <div class="icon-pass">

                    </div>
                      <input type="text" v-model="password" class="pass">
                </div>
              
               
                <button  class="btn-login" @click="onClickLogin">Đăng nhập</button>
                <router-link to="/employee" class="btn btn-link">Register</router-link>
            </div>
            <div class="login-footer">Copyright © 2020 MISA JSC</div>


        </div>
        <div class="text-att">
            <p>
                 Lưu ý: sử dụng tài khoản MISAJSC để đăng nhập
            </p>
           
        </div>
    </div>

</template>
<script>
import axios from "axios";

export default {
 
  data() {
    return {
      password: "",
      userName: "",
     
    };
  },
  methods: {
    onClickLogin(){
      axios
      .post("https://localhost:44345/api/v1/Auths/sign-in")
      .then(function(res){
        console.log(res)
      })
    }
  }
  
   
  
}
</script>
<style>
.form-login{
z-index: 6;
background-color: #369fe4;
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0px;
  bottom: 0;
  left: 0px;
  right: 0;
 
}
.login-m{
    width: 450px;
    height: 263px;
    font-family: Helvetica,Tahoma,Arial,sans-serif;
    font-size: 13px;
    padding: 0px 0px 8px;
    display: block;
    margin: auto;
    z-index: 7;
    border-style: solid;
    background-color: #fff;
    border-radius: 10px;
    border: none;

   
}
.login-header
{

    width: 100%;
    min-width: 180px;
    height: 32px;
    margin: 15px;
    text-decoration: none;
    font-size: 24px;
    
    line-height: 32px;
}
.login-main{
    height: 166px;
   
    background-color: #ECF0F2;
    /* text-align: left; */
    margin: 0;
    padding: 0 50px 20px 50px;

}
.row-input{
    display: block;
    position: relative;
    margin: 10px;
    padding-top: 8px;
    width: 379px;
    height: 42px;

}
.row-input input{
    width: 100%;
    line-height: 30px;
    height: 34px;
    border-radius: 5px;
    border: solid 1px #ddd;
    padding-left: 25px;
    background-color: #E8F0FE !important;
}
.icon-user{
    background:url(../../../assets/img/user.png) no-repeat;
    width: 16px;
    height: 16px;
    top: 20px;
    position: absolute;
    margin-left: 5px;
    margin-top: 2px;
}
.icon-pass{
    background:url(../../../assets/img/pass.png) no-repeat;
    width: 16px;
    height: 16px;
    top: 15px;
    position: absolute;
    margin-left: 5px;
    margin-top: 2px;
}
.btn-login{
    background-color: #0F84E4;
    border-radius: 5px;
    border-width: 0;
    
    font-weight: bold;
    margin-left: 46px;
    cursor: pointer;
    display: inline-block;
    line-height: 30px;
    height: 30px;
    width: 250px;
}
.btn-login a{
    color: #ffffff;
    text-decoration: none;
}
.login-footer{
    background: #0F84E4;
    height: 35px;
    text-align: center;
    line-height: 35px;
    height: 35px;
    color: #FFF;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}
.logo-header{
  min-width: 300px;
  background-repeat: no-repeat;
  margin-left: 15px;
  margin-right: 15px;
  background-size: 32px;
  background-position: 2px center;
  text-decoration: none;
  font-size: 24px;
  padding-left: 40px;
  line-height: 32px;
  height: 32px;
  color: #000;
  padding-top: 6px;
  cursor: pointer;
 

}
.text-att{
    text-align: center;
    color: #f9f5f5;
    font-style: italic;
    padding-top: 10px;
    position: absolute;
    margin-top: 52%;
    margin-left: 35%;
}

</style>