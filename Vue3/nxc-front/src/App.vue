<script setup lang="ts">
import {onMounted, shallowReactive, toRaw} from 'vue';
import {RouterView, useRouter} from 'vue-router';
import useThemeStore from "@/stores/useThemeStore";
// import useUserInfoStore from "@/stores/useUserInfoStore";
import type {GlobalThemeOverrides, NConfigProvider} from 'naive-ui'

import {darkTheme} from 'naive-ui'

// 使用主题 store
const themeStore = useThemeStore();


// 定义 isAuthed
// const isAuthed = ref(false);
// const userInfoStore = useUserInfoStore();

// const router = useRouter();



// console.log(toRaw(themeStore.getTheme.selfOverride))
//
// const themeOverrides = {
//   common: {
//     primaryColor: '#FF0000'
//   },
// }
//
// console.log(themeOverrides)


onMounted(() => {
  // 处理主题设置
  themeStore.readEnableDarkMode()

  // 认证检查
  // isAuthed.value = localStorage.getItem('user') != null;

  console.log('app挂载');
  // if (userInfoStore.isAuthed) {
  //   router.push({
  //     path: '/dashboard'
  //   });
  // } else {
  //   router.push({
  //     path: '/login'
  //   })
  // }
});
</script>

<template>
  <n-notification-provider>
    <n-config-provider :theme="themeStore.getMainTheme" :theme-overrides="toRaw(themeStore.getTheme.selfOverride)">
      <RouterView></RouterView>
    </n-config-provider>
  </n-notification-provider>


</template>


<style lang="less">
* {
  padding: 0;
  margin: 0;
}

</style>
