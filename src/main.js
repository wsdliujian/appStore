import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import dataV from '@jiaminghi/data-view'
import * as echarts from 'echarts';
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'



Vue.config.productionTip = false
Vue.use(dataV);
Vue.use(ElementUI);
Vue.use(Antd);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios.interceptors.request.use(
    config => {
      let token=  localStorage.getItem("tokenlo");
      if(config.method==='post'){
          config.headers={
              ...config.headers,
              token:token,
          }
      }else if(config.method==='get'){
          config.data={unused:0};
          config.headers={
              ...config.headers,
              token:token,
          }
      }
      return config;
    },
    error => {
     return  Promise.reject(error);
    }
)

/*export default ()=>{
  const userName='111111';
  const passWord="";
  return {userName, passWord};
}*/
/*
import util from "./views/js/util.js";
util.zoom();
window.onresize = () => {
  util.zoom();
};
*/

