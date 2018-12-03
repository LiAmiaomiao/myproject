<template>
  <div id="app">
    <!--中间路由区域-->
    <router-view></router-view>
    <!--底部tabbar-->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item " to="/waimai">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">外卖</span>
      </router-link>
      <router-link class="mui-tab-item" to="/found">
        <span class="mui-icon mui-icon-paperplane"></span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item" to="/list">
        <span class="mui-icon mui-icon-compose"><span class="mui-badge">9</span></span>
        <span class="mui-tab-label">订单</span>
      </router-link>
      <router-link class="mui-tab-item" to="/me">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: #fff;
}
  #app{
    margin:10px;
  }
</style>
