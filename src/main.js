import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts';
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(dataV);
Vue.use(Antd);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
