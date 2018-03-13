<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style scoped>
  .fl{float: left;}
  .fr{float: right;}
  .clr{overflow: hidden;}
  *{margin: 0;padding: 0;color: black;}
  html,body{width: 100%;height: 100%;background: #F0F0F0;}
  li{list-style: none;}
  a,dd{text-decoration: none;}
</style>
