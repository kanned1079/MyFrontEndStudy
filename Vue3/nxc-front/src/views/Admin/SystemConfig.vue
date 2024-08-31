<script setup lang="ts" name="SystemConfig">
import Site from "@/views/Admin/SystemConfig/Site.vue";
import Security from "@/views/Admin/SystemConfig/Security.vue";
import Personalization from "@/views/Admin/SystemConfig/Personalization.vue";
import NodesConfig from "@/views/Admin/SystemConfig/BackendConfig.vue";
import SendMail from "@/views/Admin/SystemConfig/SendMail.vue";
import WeApp from "@/views/Admin/SystemConfig/WeApp.vue"
import Notice from "@/views/Admin/SystemConfig/Notice.vue"
import BackendConfig from "@/views/Admin/SystemConfig/BackendConfig.vue"

import useThemeStore from "@/stores/useThemeStore";
import Subscribe from "@/views/Admin/SystemConfig/Subscribe.vue";

const themeStore = useThemeStore();
let handleLoad = () => {

}


</script>

<template>

  <div class="root" style="margin: 20px">
    <n-card hoverable style="padding: 0">
      <n-tabs type="segment" animated>
        <n-tab-pane name="chap1" tab="站点">
          <Site></Site>
        </n-tab-pane>
        <n-tab-pane name="chap2" tab="安全">
          <Security></Security>
        </n-tab-pane>
        <n-tab-pane name="chap3" tab="个性化">
          <Personalization></Personalization>
        </n-tab-pane>
        <n-tab-pane name="chap4" tab="订阅">
          <Subscribe></Subscribe>
        </n-tab-pane>
        <n-tab-pane name="chap5" tab="后端设置">
          <BackendConfig></BackendConfig>
        </n-tab-pane>
        <n-tab-pane name="chap6" tab="邮件">
          <SendMail></SendMail>
        </n-tab-pane>
        <n-tab-pane name="chap7" tab="通知">
          <Notice></Notice>
        </n-tab-pane>
        <n-tab-pane name="chap8" tab="APP">
          <WeApp></WeApp>
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>


  <!--  <div style="display: flex; flex-direction: column; max-height: 100vh; overflow-y: auto;">-->
  <!--    <Personalization></Personalization>-->
  <!--    <Site></Site>-->
  <!--    <h1>1</h1>-->
  <!--  </div>-->


</template>

<style lang="less" scoped>
.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  border: 0;
}
</style>