import Vue from 'vue'
//入口文件为 src/App.vue 文件 所以要引用
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// 引用路由配置文件
import routes from './config/routes'

//引用API文件
import api from './config/api'
//将API方法绑定到全局
Vue.prototype.$api = api

const router = new VueRouter({
	routes
})

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})

/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
