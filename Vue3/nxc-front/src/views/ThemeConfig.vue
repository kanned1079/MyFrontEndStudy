<script  setup lang="ts" name="ThemeConfig">
import useThemeStore from "@/stores/useThemeStore";

const themeStore = useThemeStore();
</script>

<template>
  <div class="root">
    <n-card hoverable :embedded="true" class="root" title="主题设置">

    </n-card>
  </div>

</template>

<style lang="less" scoped>
.root {
  padding: 20px;
  height: 400px;
}
.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  padding: 0;
}
</style>