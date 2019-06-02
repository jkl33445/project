import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.url = 'http://47.100.205.249:9000/'

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
