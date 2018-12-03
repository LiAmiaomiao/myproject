// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios;
//引入AMap
import AMap from 'vue-amap'
Vue.use(AMap)

AMap.initAMapApiLoader({
  key: '4c1b2ec40ae5928df8d32898d6bf31b9',//刚刚开发者申请哪里的key
});
//引入mockjs
import './mock'
import {Swipe,SwipeItem} from 'mint-ui';
import '../node_modules/mint-ui/lib/swipe/style.css'
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);


//导入mui的css样式
import './lib/mui/css/mui.min.css'
//图标组件
import './lib/mui/css/icons-extra.css'



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

