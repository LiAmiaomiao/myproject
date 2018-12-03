import Vue from 'vue'
import Router from 'vue-router'

import Waimai from '../components/Waimai.vue'
import Found from '../components/Found.vue'
import List from '../components/List.vue'
import Me from '../components/Me.vue'
import Position from '../components/Waimai/Position.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/waimai', name: 'Waimai', component: Waimai},
    {path: '/found', name: 'Found', component: Found},
    {path: '/list', name: 'List', component: List},
    {path: '/me', name: 'Me', component: Me},
    {path: '/waimai/position', name: 'Position', component: Position}

  ],
  linkActiveClass:'mui-active'  //默认负责高亮的类
})
