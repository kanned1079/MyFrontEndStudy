<script setup lang="ts" name="app">
import {ref} from 'vue'
import DashBoard from '@/components/DashBoard.vue'
import { darkTheme, lightTheme } from 'naive-ui'
import useThemeStore from "@/stores/useThemeStore";
import {onMounted} from "vue";
const themeStore = useThemeStore();

onMounted(() => {
  console.log(themeStore.globalTheme[0])
  console.log(themeStore.globalTheme[1])
  console.log(themeStore.globalTheme[2])
  console.log('app挂载')
  getTheme()
})

// let themeCode = ref(0)  // 用于识别主题配色 默认为浅色
let getTheme = () => {  // 挂载时读取已经有的主题配置文件
if (localStorage.getItem('themeCode') == null) {
  localStorage.setItem('themeCode', JSON.stringify({code: 0}))
} else  {
    themeStore.nowThemeCode = JSON.parse(localStorage.getItem('themeCode') as string).code as number
}

}
</script>

<template>
  <n-config-provider :theme="themeStore.globalTheme[themeStore.nowThemeCode]">
    <DashBoard></DashBoard>
  </n-config-provider>
</template>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}
</style>
