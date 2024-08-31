<script setup lang="ts">
import {onMounted, toRaw} from 'vue';
import {RouterView} from 'vue-router';
import useThemeStore from "@/stores/useThemeStore";
import type {NConfigProvider} from 'naive-ui'

const themeStore = useThemeStore();

onMounted(() => {
  // 处理主题设置
  themeStore.readEnableDarkMode()
  // console.log('app挂载');

});
</script>

<template>
  <n-config-provider :theme="themeStore.getMainTheme" :theme-overrides="toRaw(themeStore.getTheme.selfOverride)">
    <n-message-provider>
      <n-notification-provider>
        <RouterView></RouterView>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>

</template>


<style lang="less">
* {
  padding: 0;
  margin: 0;
}

</style>
