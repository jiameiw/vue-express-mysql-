<template>
	<div class="breadcrumb">home&gt{{breads}}</div>
</template>
<script type="text/javascript">
	export default{
		props:{
		page:{
			type:String
		}
		},
		data(){
			return{
				breadcrumb:[],
				breads:''
			}
		},
		created(){
			this.getData();
		},
		methods:{
			getData(){
				console.log(location.pathname);
				// console.log(this.page);
				this.breadcrumb.push(this.page);
				this.breads=this.breadcrumb.join(">");
				// console.log(this.breads);
			}
		}
		}

</script>
<style scoped>
	.breadcrumb{width: 100%;height: 5%;line-height: 2.2vw;background: #ddd;}
</style>