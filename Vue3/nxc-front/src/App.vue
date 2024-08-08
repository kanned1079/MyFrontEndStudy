<script setup lang="ts" name="app">
import CommonAside from "@/components/CommonAside.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonContent from "@/components/CommonContent.vue";
import CommonFooter from "@/components/CommonFooter.vue";
</script>

<template>
  <div class="root">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 0px;" width="20%" style="padding: 0">
        <CommonAside></CommonAside>
      </n-layout-sider>
      <n-layout>
        <n-layout-header content-style="padding: 0px;" style="padding: 0">
          <CommonHeader></CommonHeader>
        </n-layout-header>
        <n-layout-content content-style="padding: 0px;" style="padding: 0">
          <CommonContent></CommonContent>
        </n-layout-content>
<!--        <n-layout-footer>成府路</n-layout-footer>-->
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
  background: rgba(128, 128, 128, 0.3);
  height: 100vh;

}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}



</style>
