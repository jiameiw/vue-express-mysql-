<template>
	<div class="goods__container">
		<my-header></my-header>
		<my-breadcrumb :page="page"></my-breadcrumb>
	<div class="goods__content">
		<h2>MY CART</h2>
		<table>
			<tr class="list__title">
				<th></th>
				<th>ITEMS</th>
				<th>PRICE</th>
				<th>QUANTITY</th>
				<th>SUBTOTAL</th>
				<th>EDIT</th>
			</tr>
			<tr class="list__content" v-for="(item,index) in cartList" :key="index">
				<td class="list__checkicon">
					<i :class="item.checked?'checked':''"></i>
					<input type="checkbox" name="cart" @click="checked(index)" :checked="item.checked">
					<img :src="item.SRC">
				</td>
				<td>{{item.name}}</td>
				<td>{{item.price}}</td>
				<td><button class="minus" @click="minus(index)" :disabled="item.quantity==1">-</button><input type="text" class="list__content--quantity" name="quantity" v-model="item.quantity" :onchange="updata()"><button @click="plus(index)">+</button></td>
				<td>{{item.price*item.quantity}}</td>
				<td><a href="javascript:;" @click="deleteitem(index)"></a></td>
			</tr>
		</table>
		<div class="list__selectall clr">
			<i :class="checkedall?'checked':''" @click="selectall()"></i>
			<span class="list__selectall--span1">selectall</span>
			<a class="fr list__selectall--span2" @click="submit()">CHECKOUT</a>
			<span class="fr">Item total:<strong>{{itemTotal}}</strong></span>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import axios from 'axios';
import qs from 'qs';

import header from './header.vue';
import breadcrumb from './breadcrumb.vue';

	export default {
  name: 'cart',
  data () {
    return {
    	page:'cart',
    	username:'',
    	checkedall:false,
    	itemTotal:0,
    	subTotal:0,
    	itemid:0,
    	msg:'',
    	cartList:[
    			// 	{id:'1',SRC:require('./img/1.jpg'),name:'1',price:999,quantity:1,subTotal:0,checked:false},
    			// 	{id:'2',SRC:require('./img/2.jpg'),name:'2',price:998,quantity:1,subTotal:0,checked:false}
    			]
    }
  },
  created(){
  	this.getData();
  },
  watch:{
  	cartList:'updata'
  },
  components:{
  	'my-header':header,
  	'my-breadcrumb':breadcrumb
  },
  methods:{
  	getData(){
	  		axios.defaults.baseURL = 'http://localhost:3000';
	  		// this.username=document.cookie;
	  		// let params={username:this.username};
	  		// axios.post('/cart',qs.stringfy(params)).then(res=>{
	  		// 	// this.cartList=res.data;
	  		// 	console.log(res.data);
	  		// });
	  		let params={username:document.cookie}
	 		axios.post('/cart',qs.stringify(params)).then(res=>{
	 			console.log(res.data);
	 			this.cartList=res.data;
	 			if(this.cartList==""){
	 				alert("请先添加商品！");
	 			}
	 			// console.log("cookie:"+document.cookie.user);
	 			// console.log(this.goodList);
	 		});
  	},
  	checked(id){
  		let num=0;
  		this.cartList[id].checked=!this.cartList[id].checked;
  		for(let i=0;i<this.cartList.length;i++){
  			if(this.cartList[i].checked){
  				num+=1;
  			}
  		if(num==this.cartList.length){this.checkedall=true;}
  		else{this.checkedall=false;}
  		}
  		this.updata();
  	},
  	selectall(){
  		this.checkedall=!this.checkedall;
  		if(this.checkedall){
  		for(let i=0;i<this.cartList.length;i++){this.cartList[i].checked=true;}
  		}else{for(let i=0;i<this.cartList.length;i++){this.cartList[i].checked=false;}}
  		this.updata();
  	},
  	updata(){
  		this.itemTotal=0;
  		for(let i=0;i<this.cartList.length;i++){
  			if(this.cartList[i].checked)
  		this.itemTotal+=this.cartList[i].price*this.cartList[i].quantity;;
  		}
  	},
  	deleteitem(id){
  		 let params=this.cartList[id];
  		 axios.post('/cartDelete',qs.stringify(params)).then(res=>{
		 			// this.cartList=res.data;
			 			if(res.status!=200){
			 				this.msg="删除失败！"
			 			}
		 			// console.log("cookie:"+document.cookie.user);
		 			// console.log(this.goodList);
		 });
		 this.cartList.splice(id, 1);
  		 this.updata();
  	},
  	minus(id){
  		this.cartList[id].quantity-=1;
  		this.updata();
  	},
  	plus(id){
  		this.cartList[id].quantity+=1;
  		this.updata();
  	},
  	submit(){
  		// console.log(JSON.stringify(this.cartList));
  		if(this.itemTotal!=0){
  			for(var i=0;i<this.cartList.length;i++){
  				if(this.cartList[i].checked){
		  			let params=this.cartList[i];
		 			axios.post('/cartDelete',qs.stringify(params)).then(res=>{
		 			// this.cartList=res.data;
			 			if(res.status!=200){
			 				this.msg="删除失败！"
			 			}
		 			// console.log("cookie:"+document.cookie.user);
		 			// console.log(this.goodList);
		 			});
		 			axios.post('/orderAdd',qs.stringify(params)).then(res=>{
		 			// this.cartList=res.data;
			 			if((res.status==200)&&(this.msg=="")){
			 				this.msg="添加订单成功！";
			 				alert(this.msg);
			 			}
		 			// console.log("cookie:"+document.cookie.user);
		 			// console.log(this.goodList);
		 			});
	 			}
  			}
  		}else{
  			alert("请选择要提交的订单！")
  		}
  		
  	}
  }
}
</script>
<style scoped>
/*header*/
	tr{text-align: center;}
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
	.list__selectall--span2{cursor:pointer;display: inline-block;width: 15%;text-align: center;height: 100%;background:#D1434A;color: white;font-size: 1vw;margin-left: 3%;}
	.list__selectall strong{color: #D1434A;padding-left: 0.5vw;}
	.list__content td{border-top: 1px solid #ddd;}
	.list__content a{display: inline-block;background: url(./img/delete.png) no-repeat 0 18%;width: 3vw;height: 3vw;}
	.list__content button{cursor:pointer; height: 29px;width: 29px;vertical-align: middle;background: #ccc;border: 1px solid #ddd;}
	.minus[disabled]{cursor: no-drop;}
	.list__content--quantity{width: 90px;height: 27px;border:1px solid #ddd;text-align: center;}

</style>