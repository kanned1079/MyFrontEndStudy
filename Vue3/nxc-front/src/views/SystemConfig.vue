<script setup lang="ts" name="SystemConfig">
import Site from "@/views/SystemConfig/Site.vue";
import Security from "@/views/SystemConfig/Security.vue";
import Personalization from "@/views/SystemConfig/Personalization.vue";

import useThemeStore from "@/stores/useThemeStore";

const themeStore = useThemeStore();
let handleLoad = () => {

}


</script>

<template>
  <n-scrollbar style="max-height: 100vh">
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
            3
          </n-tab-pane>
          <n-tab-pane name="chap5" tab="邀请&佣金">
            3
          </n-tab-pane>
          <n-tab-pane name="chap6" tab="节点">
            3
          </n-tab-pane>
            <n-tab-pane name="chap7" tab="邮件">
            3
          </n-tab-pane>
          <n-tab-pane name="chap8" tab="Telegram">
            3
          </n-tab-pane>
          <n-tab-pane name="chap9" tab="APP">
            3
          </n-tab-pane>
        </n-tabs>
      </n-card>
    </div>
    <div style="height: 3rem"></div>
  </n-scrollbar>





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