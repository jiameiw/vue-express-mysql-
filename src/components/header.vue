<template>
	<div>
		<div class="header clr">
			<img src="./img/logo1.png" class="fl">
			<div class="header__right fr"><a href="/">首页</a><a href="javascript:;" @click="loginShow=!loginShow" class="header__login" v-show="!loginmodel">Login</a><span v-show="loginmodel">{{username}}</span><a href="" @click="logout()">Logout</a><i @click="open()"></i></div>
		</div>
		<transition name="fade">
		<div class="login" v-show="loginShow">
			<div class="covered" @click="loginShow=!loginShow"></div>
				<transition name="move">
					<div class="loginbox" v-show="loginShow">
					<div class="loginbox__error" v-show="error">*用户名或密码错误！</div>
					<div class="login__content">
						<label>用户名：</label><input type="text" name="login" v-model="username">
						<label>密码：</label><input type="password" name="login" v-model="password">
						<div class="login__button"><input type="button" name="submit" value="确认" @click="loginin()"><input type="button" name="cancel" value="取消" @click="loginout()"></div>
						<a class="register" href="javascript:;">还没注册？点击注册</a>
					</div>
					</div>
				</transition>
			</div>
		</transition>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios';
import qs from 'qs';

import header from './header.vue';

export default {
  data () {
    return {
    	username:'',
    	password:'',
    	loginmodel:false,
    	error:false,
    	loginShow:false
    }
  },
  created(){
  	this.getData();
  },
  methods:{
  	getData(){
  		if(document.cookie!=''){
  			this.username=document.cookie;
  			this.loginmodel=true;
  		}
  	},
  	open(){
  		if(document.cookie!=''){
  			window.open('./#/cart');
  		}else{
  			alert("请您先登录！")
  		}
  	},
  	loginin(){
  		let params={username:this.username,password:this.password};
  		axios.post('/login',qs.stringify(params)).then(res=>{
  			console.log(res);
  			let data=res.data;
  			if(data.status=="success"){
  				this.error=false;
  				this.loginShow=!this.loginShow;
  				alert("登录成功！");
  				this.loginmodel=true;
  				this.username=data.result.username;
  				document.cookie=data.result.username;
  				// console.log("cookie"+document.cookie);
  			}else{
  				this.error=true;
  				this.username='';
  				this.password='';	
  			}
  		})
  	},
  	logout(){
  		document.cookie="";
  		alert("已退出");
  		this.loginmodel=false;
  	}
  }
}
</script>
<style scoped>
	.header{width: 100%;height: 8%;background: white;}
	.header img{width: 10%;}
	.header__right{position: relative;right: 5vw;top: 1vw;display: flex;justify-content: space-between;width: 15%;height: 2vw;line-height: 2vw;}
	.header__right i{cursor: pointer; background: url(./img/cart.png) no-repeat 0 0.3vw;background-size: 75%;display: inline-block;width: 17%;}
	.covered{position:fixed;z-index:9;  top:0px;  left:0px;  width:100%;height:100%;opacity:0.3;background: linear-gradient(to bottom,#000 10%,#ddd 90%);  }
	.loginbox{border-radius: 3px; box-shadow: 0 0 10px #4F4E4C; width: 32%;height: 40%;background: white;position: absolute;z-index: 10;left: 30%;top: 25%;transition: top 0.3s ease-out;}
	.loginbox__error{color: red;padding: 2% 0 0 10%;position: absolute;top:2%;}
	.loginbox .login__content{margin: 0 auto;width: 80%;height: 69%;padding: 10% 0;}
	.loginbox .login__button{padding-top: 4%;}
	.loginbox input[type="text"],.loginbox input[type="password"]{margin-bottom: 8%;width: 78%;height: 17%;font-size: 1.5vw;}
	.loginbox label{text-align-last: justify;display: inline-block;width: 20%;}
	.loginbox input[type="button"]{cursor: pointer; width: 7vw;height: 2.5vw;display: inline-block;margin-left: 20%;}
	.register{color: red;text-decoration:underline;text-align: right;padding-top: 4%;display: block;}
	/*.fade-enter-active, .fade-leave-active {transition: opacity .5s;}
	.fade-enter, .fade-leave-to{opacity: 0}
	*/.move-enter-active, .move-leave-active {transition: all .3s ease;}
	.move-enter, .move-leave-to{transform: translateY(10px);opacity: 0;}
</style>