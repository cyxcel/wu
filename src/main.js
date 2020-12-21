import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import animated from 'animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'default-passive-events' ;// 添加被动事件监听器，使页面更流畅'
// 引入video.js插件
import Video from 'video.js'
import 'video.js/dist/video-js.css'



Vue.use(animated)
Vue.use(ElementUI)
Vue.prototype.$axios = axios //全局注册，使用方法为 :this.$axios
Vue.prototype.$host = 'http://127.0.0.1:3000/' // 全局属性
Vue.config.productionTip = false
Vue.prototype.$video = Video


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')