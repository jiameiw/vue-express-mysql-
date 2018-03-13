/*
wjm
20171102
 */
<template>
	<div class="goods__container">
	<my-header></my-header>
	<my-breadcrumb :page="page"></my-breadcrumb>
	<div class="goods__content">
		<div class="goods__content__sort"><span>Sort by:<a href="javascript:;" @click="sortbyprice()">price</a></span></div>
		<div class="goods__content__goodslist clr">
		<div  class="goods__content__bar">
			<h2>PRICE</h2>
			<ul>
				<li v-for="(item,index) in filterlist" @click="filter(index)">{{item.value}}</li>
			</ul>
		</div>
			<div class="goods__content__detail">
				<a href="javascript:;" v-for="(item,index) in filters" :key="index">
				<img :src="item.SRC" />
				<dl><dd>{{item.name}}</dd><dd class="detail--price">{{item.price}}</dd><dd class="detail--cart" @click="goodAdd(index)">加入购物车</dd></dl>
				</a>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import axios from 'axios';
import qs from 'qs';

import header from './header.vue';
import breadcrumb from './breadcrumb.vue';

export default {
  name: 'index',
  data () {
    return {
    	page:'index',
    	message:'',
    	asc:true,
    	filterlist:[{id:0,value:'ALL'},{id:1,value:'0-100'},{id:2,value:'100-500'},{id:3,value:'500-1000'},{id:4,value:'1000-2000'}],
    	filters:[],
    	goodList:[
    				// {id:'1',SRC:require('./img/1.jpg'),name:'1',price:'99'},
    				// {id:'2',SRC:require('./img/2.jpg'),name:'2',price:'400'},
    				// {id:'3',SRC:require('./img/3.jpg'),name:'3',price:'997'},
    				// {id:'4',SRC:require('./img/4.jpg'),name:'4',price:'996'},
    				// {id:'5',SRC:require('./img/5.jpg'),name:'5',price:'995'}
    			 ]
    }
  },
  created(){
  	this.getData();
  },
  components:{
  	'my-header':header,
  	'my-breadcrumb':breadcrumb
  },
  methods:{
  	getData(){
  		axios.defaults.baseURL = 'http://localhost:3000';
 		axios.post('/',qs.stringify()).then(res=>{
 			console.log(res.data);
 			this.goodList=res.data;
 			this.filters=res.data;
 			// console.log("cookie:"+document.cookie.user);
 			// console.log(this.goodList);
 		});
 		// this.filters=this.goodList;
 		// console.log(this.filters);
  	},
  	filter(id){
  		this.filters=this.goodList;
 		switch(id){
 			case 0:this.filters=this.goodList;break;
 			case 1:this.filters=this.goodList.filter(function(item){return item.price<100&&item.price>0;});break;
 			case 2:this.filters=this.goodList.filter(function(item){return item.price<500&&item.price>100;});break;
 			case 3:this.filters=this.goodList.filter(function(item){return item.price<1000&&item.price>500;});break;
 			case 4:this.filters=this.goodList.filter(function(item){return item.price<2000&&item.price>1000;});break;
 			// default:this.filters=this.goodList;
 		}
  		if(this.filters==''){
  			alert("没有找到！");
  		}
  	},
  	goodAdd(id){
  		// console.log(id);
  		if(document.cookie!=""){
  		let params={username:document.cookie,goodid:this.goodList[id].goodid,SRC:this.goodList[id].SRC,name:this.goodList[id].name,price:this.goodList[id].price};
  		console.log(params);
  		axios.post('/add',qs.stringify(params)).then(res=>{
 			alert(res.data.msg);
 			// this.goodList=res.data;
 			// this.filters=res.data;
 			// console.log("cookie:"+document.cookie.user);
 			// console.log(this.goodList);
 		});
  	}else{
  		alert("请您先登录!");
  	}
  	},
  	compare(property){
  		if(!this.asc){
  			return function(a,b){
	        var value1 = a[property];
	        var value2 = b[property];
	        return value1 - value2;
	    }
  		}else{
  			return function(a,b){
	        var value1 = a[property];
	        var value2 = b[property];
	        return value2 - value1;
	    }
  		}
	},
  	sortbyprice(){
  		this.asc=!this.asc;
  		this.goodList.sort(this.compare('price'));
  		console.log(this.goodList);
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
	/*.header{z-index: 100}*/
	/*container*/
	.goods__container{width: 100%;height: 100%;}
	.goods__content{width: 90%;height: 85%;margin: 0 auto;}
	.goods__content__sort{color:red; width: 100%;height:3vw;background: white;position: relative;top: 3vw;text-align: right;line-height: 3vw;}
	.goods__content__sort a{color:red;display: inline-block;width: 5%;height: 2vw;line-height: 2vw;text-align: center;}
	.goods__content__goodslist{position: relative;top: 6vw;padding-top: 0.5vw;}
	.goods__content__bar{width: 20%;float: left;}
	.goods__content__bar ul{margin-top:1vw;}
	.goods__content__bar li{line-height: 3vw;cursor: pointer;transition: padding-left 1s;}
	.goods__content__bar li:hover{padding-left:2vw;color: #ff2200;border-left: 3px #ff2200 solid;}
	.goods__content__detail{width: 80%;float: right;display: flex;flex-wrap: wrap;justify-content: space-between;}
	.goods__content__detail img{width: 100%;    height: 66%;}
	.goods__content__detail a{cursor:pointer; width: 23%;height:25vw;background: white;border:2px solid #ddd;margin-bottom: 1vw;transition: all 0.5s ease-out;}
	.goods__content__detail a:hover{transform: translateY(-5px);border:2px #ff2200 solid;box-shadow: 0 0 10px #999;transition: all 0.5s ease-out; }
	.goods__content__detail dd{line-height: 2vw;margin-left: 1vw;}
	.goods__content__detail .detail--price{color: #ff2200;font-size: 1vw;}
	.goods__content__detail .detail--cart{cursor:pointer;border:1px red solid;color: red;width: 80%;height: 2vw;line-height: 2vw;margin: 0.5vw auto;text-align: center;}
</style>
