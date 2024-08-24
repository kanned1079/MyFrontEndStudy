<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DashBoard from '@/components/DashBoard.vue';
import useThemeStore from "@/stores/useThemeStore";
import UserLogin from '@/views/Login/UserLogin.vue'
import useUserInfoStore from "@/stores/userInfo";

// 使用主题 store
const themeStore = useThemeStore();

// 定义 isAuthed
// const isAuthed = ref(false);
const userInfoStore = useUserInfoStore();

onMounted(() => {
  // 处理主题设置
  if (localStorage.getItem('themeCode') == null) {
    localStorage.setItem('themeCode', JSON.stringify({code: 0}));
  } else {
    themeStore.nowThemeCode = JSON.parse(localStorage.getItem('themeCode') as string).code as number;
  }

  // 认证检查
  // isAuthed.value = localStorage.getItem('user') != null;

  console.log(themeStore.globalTheme[0]);
  console.log(themeStore.globalTheme[1]);
  console.log(themeStore.globalTheme[2]);
  console.log('app挂载');
});
</script>

<template>
  <n-config-provider :theme="themeStore.globalTheme[themeStore.nowThemeCode]">
    <DashBoard v-if="userInfoStore.isAuthed"></DashBoard>
    <div v-else style="width: 100%; height: 100vh">
      <UserLogin></UserLogin>

    </div>

  </n-config-provider>
</template>


<style lang="less">
* {
  padding: 0;
  margin: 0;
}
</style>
