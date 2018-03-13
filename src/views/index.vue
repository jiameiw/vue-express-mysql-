/*
wjm
20171102
 */
<template>
	<div class="goods__container">
	<div class="header clr">
		<img src="./img/logo1.png" class="fl">
		<div class="header__right fr"><a href="javascript:;" class="header__login">Login</a><a href="javascript:;">Logout</a><i></i></div>
	</div>
	<div class="breadcrumb">home/goods</div>
	<div class="goods__content">
		<div class="goods__content__sort"><span>Sort by:default price</span></div>
		<div class="goods__content__goodslist clr">
		<div  class="goods__content__bar">
			<h2>PRICE</h2>
			<ul>
				<li>ALL</li>
				<li>0-100</li>
				<li>100-500</li>
				<li>500-1000</li>
				<li>1000-2000</li>
			</ul>
		</div>
			<div class="goods__content__detail">
				<a href=""><img src="./img/1.jpg"><dl><dd>XX</dd><dd class="detail--price">999</dd><dd class="detail--cart">加入购物车</dd></dl></a>
				<a href=""><img src="./img/2.jpg"><dl><dd>XX</dd><dd class="detail--price">999</dd><dd class="detail--cart">加入购物车</dd></dl></a>
				<a href=""><img src="./img/3.jpg"><dl><dd>XX</dd><dd class="detail--price">999</dd><dd class="detail--cart">加入购物车</dd></dl></a>
				<a href=""><img src="./img/4.jpg"><dl><dd>XX</dd><dd class="detail--price">999</dd><dd class="detail--cart">加入购物车</dd></dl></a>
				<a href=""><img src="./img/4.jpg"><dl><dd>XX</dd><dd class="detail--price">999</dd><dd class="detail--cart">加入购物车</dd></dl></a>
			</div>
		</div>
	</div>
	<div class="login">
		<div class="covered"></div>
		<div class="loginbox">
			<div class="login__content">
				<label>用户名：</label><input type="text" name="login">
				<label>密码：</label><input type="password" name="login">
			<div class="login__button"><input type="button" name="submit" value="确认"><input type="button" name="cancel" value="取消"></div>
			<a class="register" href="javascript:;">还没注册？点击注册</a>
		</div>
	</div>
	</div>
</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
	/*通用*/
	.fl{float: left;}
	.fr{float: right;}
	.clr{overflow: hidden;}
	*{margin: 0;padding: 0;color: black;}
	html,body{width: 100%;height: 100%;background: #F0F0F0;}
	li{list-style: none;}
	a,dd{text-decoration: none;}
	/*header*/
	.header{width: 100%;height: 8%;background: white;}
	.header img{width: 10%;}
	.header__right{position: relative;right: 5vw;top: 1vw;display: flex;justify-content: space-between;width: 11%;height: 2vw;line-height: 2vw;}
	.header__right i{background: url(./img/cart.png) no-repeat 0 0.3vw;background-size: 102%;display: inline-block;width: 17%;}
	.breadcrumb{width: 100%;height:7%;background: #ddd;}
	.covered{position:absolute ;z-index:888;  top:0px;  left:0px;  width:100%;height:100%;opacity:0.3;background: linear-gradient(to bottom,#000 10%,#ddd 90%);  }
	.login{display: none;}
	.loginbox{border-radius: 3px; box-shadow: 0 0 10px #4F4E4C; width: 32%;height: 40%;background: white;position: absolute;z-index: 10;left: 30%;top: 25%;transition: top 0.3s ease-out;}
	.actived{top:23%;}
	.loginbox .login__content{margin: 0 auto;width: 80%;height: 69%;padding: 10% 0;}
	.loginbox .login__button{padding-top: 4%;}
	.loginbox input[type="text"],.loginbox input[type="password"]{margin-bottom: 8%;width: 78%;height: 17%;font-size: 1.5vw;}
	.loginbox label{text-align-last: justify;display: inline-block;width: 20%;}
	.loginbox input[type="button"]{cursor: pointer; width: 7vw;height: 2.5vw;display: inline-block;margin-left: 20%;}
	.register{color: red;text-decoration:underline;text-align: right;padding-top: 4%;display: block;}
	/*container*/
	.goods__container{width: 100%;height: 100%;}
	.goods__content{width: 90%;height: 85%;margin: 0 auto;}
	.goods__content__sort{width: 100%;height:3vw;background: white;position: relative;top: 3vw;text-align: right;line-height: 3vw;}
	.goods__content__goodslist{position: relative;top: 6vw;padding-top: 0.5vw;}
	.goods__content__bar{width: 20%;float: left;}
	.goods__content__bar ul{margin-top:1vw;}
	.goods__content__bar li{line-height: 3vw;cursor: pointer;transition: padding-left 1s;}
	.goods__content__bar li:hover{padding-left:2vw;color: #ff2200;border-left: 3px #ff2200 solid;}
	.goods__content__detail{width: 80%;float: right;display: flex;flex-wrap: wrap;justify-content: space-between;}
	.goods__content__detail img{width: 100%;    height: 66%;}
	.goods__content__detail a{width: 23%;height:25vw;background: white;border:2px solid #ddd;margin-bottom: 1vw;transition: all 0.5s ease-out;}
	.goods__content__detail a:hover{transform: translateY(-5px);border:2px #ff2200 solid;box-shadow: 0 0 10px #999;transition: all 0.5s ease-out; }
	.goods__content__detail dd{line-height: 2vw;margin-left: 1vw;}
	.goods__content__detail .detail--price{color: #ff2200;font-size: 1vw;}
	.goods__content__detail .detail--cart{border:1px red solid;color: red;width: 80%;height: 2vw;line-height: 2vw;margin: 0.5vw auto;text-align: center;}
	
</style>
