<script setup lang="ts" name="app">
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonContent from "@/components/CommonContent.vue";
import CommonFooter from "@/components/CommonFooter.vue";
import {RouterView} from "vue-router";
</script>

<template>
  <div class="root">
    <n-layout has-sider>

      <n-layout-sider content-style="padding: 0px;"  style="padding: 0; height: 100%">
<!--        <div style="height: 100px; width: 280px"></div>-->
        <CommonAside></CommonAside>
      </n-layout-sider>
      <n-layout>
        <n-layout-header content-style="padding: 0px;" style="padding: 0">
          <CommonHeader></CommonHeader>
        </n-layout-header>
        <n-layout-content content-style="padding: 0px;" style="padding: 0; height: 94vh">
<!--          <CommonContent></CommonContent>-->
          <RouterView></RouterView>
        </n-layout-content>
<!--        <n-layout-footer>成府路</n-layout-footer>-->
<!--        <RouterView></RouterView>-->
      </n-layout>
    </n-layout>
  </div>

</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Liberation Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  //background: rgba(128, 128, 128, 0.3);
  height: 100vh;

}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}




</style>
