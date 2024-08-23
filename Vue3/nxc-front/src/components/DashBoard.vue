<script setup lang="ts" name="DashBoard">
import {defineComponent} from 'vue'
import useThemeStore from "@/stores/useThemeStore";
import { RouterView } from 'vue-router';
const themeStore = useThemeStore();
import CommonLogo from "@/components/CommonLogo.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import CommonAside from "@/components/CommonAside.vue";

// 假设使用默认的主题
let nowTheme = themeStore.theme1
// export default defineComponent({
//   name: "DashBoard"
// })
</script>

<template>


  <n-layout has-sider>
    <div>
      <n-layout-header class="logo">
        <CommonLogo></CommonLogo>
      </n-layout-header>

    </div>

    <n-layout>
      <n-layout-header>
        <!--        颐和园路-->
        <CommonHeader></CommonHeader>
      </n-layout-header>

      <!--      <n-layout-footer>成府路</n-layout-footer>-->
    </n-layout>
  </n-layout>



  <n-layout has-sider>
    <div>

      <n-layout-sider content-style="" width="240px">
<!--        海淀桥-->
        <CommonAside></CommonAside>
      </n-layout-sider>
    </div>

    <n-layout>

      <n-layout-content content-style="padding: 24px;">
<!--        平山道-->
        <RouterView></RouterView>
      </n-layout-content>
<!--      <n-layout-footer>成府路</n-layout-footer>-->
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
.n-layout-header,
.n-layout-footer {
  background-color: v-bind('nowTheme.commonHeaderBgColor');
  padding: 0;
  height: 3.25rem;
  width: 100%;
}

.n-layout-sider {
  //background-color: v-bind('nowTheme.commonAsideBgColor');
  height: 100vh;
  align-items: center;
}

.n-layout-content {
  //background-color: v-bind('nowTheme.commonContentBgColor');
  height: 100%;
}

.logo {
  width: 240px;
  background-color: v-bind('nowTheme.commonLogoBgColor');
  padding: 0;
}

</style>