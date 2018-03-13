<template>
	<div class="goods__container">
		<div class="header clr">
			<img src="./img/logo1.png" class="fl">
			<div class="header__right fr"><a href="">Login</a><a href="">Logout</a><i></i></div>
		</div>
		<div class="breadcrumb">home/goods</div>
	<div class="goods__content">
		<h2>MY CART</h2>
		<table>
			<tr class="list__title"><th></th><th>ITEMS</th><th>PRICE</th><th>QUANTITY</th><th>SUBTOTAL</th><th>EDIT</th></tr>
			<tr class="list__content"><td class="list__checkicon"><i></i><input type="checkbox" name="cart"><img src="./img/1.jpg"></td><td>XX</td><td>1000</td><td>10</td><td>100</td><td><a href=""></a></td></tr>
			<tr class="list__content"><td class="list__checkicon"><i></i><input type="checkbox" name="cart"><img src="./img/1.jpg"></td><td>XX</td><td>1000</td><td>10</td><td>100</td><td><a href=""></a></td></tr>		
			</table>
		<div class="list__selectall clr"><i></i><span class="list__selectall--span1">selectall</span><a class="fr list__selectall--span2" href="javascript:;">CHECKOUT</a><span class="fr">Item total:<strong>500</strong></span></div>
	</div>
</div>
</template>
<script type="text/javascript">
	export default {
  name: 'cart',
  data () {
    return {
    }
  }
}
</script>
<style scoped>
/*header*/
	.header{width: 100%;height: 8%;background: white;}
	.header img{width: 10%;}
	.header__right{position: relative;right: 5vw;top: 1vw;display: flex;justify-content: space-between;width: 11%;height: 2vw;line-height: 2vw;}
	.header__right i{background: url(./img/cart.png) no-repeat 0 0.3vw;background-size: 102%;display: inline-block;width: 17%;}
	.breadcrumb{width: 100%;height:7%;background: #ddd;}
	/*container*/
	.goods__container{width: 100%;height: 100%;}
	.goods__content{width: 90%;height: 87%;margin: 0 auto;padding: 3% 0;}
	.goods__content h2{padding-bottom: 1vw;}
	.goods__content table{width: 100%;border-spacing: 0;border:1px solid #ddd;}
	.list__title{background: #605F5F;height: 3vw;}
	.list__content{height: 10vw;background: white;}
	.list__checkicon{position: relative;width: 19%;text-align: left;}
	.list__checkicon i{left: 1vw;width: 1.5vw;height: 1.5vw;position: absolute;top: 40%;border-radius: 50%;border: 2px solid #ddd;background-size: 100%;}
	.checked{background: url('./img/check.png') no-repeat 0 0;background-color: #fe6d32;}
	.list__checkicon input{left: 1vw;cursor: pointer;position: absolute;top: 40%;width: 2vw;height: 2vw;opacity: 0.5;}
	.list__checkicon img{position: absolute;right: 46%;top: 25%;width: 27%;border: 1px solid #ddd;}
	.list__selectall{position: relative; width: 100%; height: 3.5vw;line-height: 3.5vw;background: white;border:1px solid #ddd;margin-top: 2vw;}
	.list__selectall i{cursor: pointer; left: 1vw;width: 1.5vw;height: 1.5vw;position: absolute;top: 26%;border-radius: 50%;border: 2px solid #ddd;background-size: 100%;}
	.list__selectall--span1{padding-left: 5%;}
	.list__selectall--span2{display: inline-block;width: 15%;text-align: center;height: 100%;background:#D1434A;color: white;font-size: 1vw;margin-left: 3%;}
	.list__selectall strong{color: #D1434A;padding-left: 0.5vw;}
	.list__content td{border-top: 1px solid #ddd;}
	.list__content a{display: inline-block;background: url(./img/delete.png) no-repeat 0 18%;width: 3vw;height: 3vw;}
	
</style>