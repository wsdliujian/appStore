<template>
  <a-layout id="components-layout-demo-fixed-sider">
    <a-layout-sider :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }">
<!--      <div class="logo" />-->
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1" @click="changeMenu('oneFish')">
          <a-icon type="user" />
          <span class="nav-text">资源一</span>
        </a-menu-item>
        <a-menu-item key="2" @click="changeMenu('twoFish')">
          <a-icon type="video-camera" />
          <span class="nav-text">资源二</span>
        </a-menu-item>
        <a-menu-item key="3" @click="changeMenu('threeFish')">
          <a-icon type="upload" />
          <span class="nav-text">资源三</span>
        </a-menu-item>

      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
<!--      <a-layout-header :style="{ background: '#fff', padding: 0 }" />-->
      <a-layout-content :style="{ margin: '0px 16px 0' }">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item id="topTitle">应用商店</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff',height:'620px',overflowY: 'auto'}">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    //路由内容切换
    changeMenu(route){
      if (this.$route.path !== '/'+route) {
        //获取路由对象并切换
        this.$router.push(route)
      }
    }
  },
  mounted() {
    this.$nextTick(()=>{
      //初始加载路由对象
      this.$router.push("oneFish")
    })
  }
};
</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#topTitle {
  font-size: 28px;
  font-weight: 300;
}
</style>
