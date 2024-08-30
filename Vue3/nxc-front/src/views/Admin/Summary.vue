<script setup lang="ts" name="Summary">
import Settings from '@/views/Admin/dashboard/Settings.vue'
import useThemeStore from "@/stores/useThemeStore";
import Income from '@/views/Admin/dashboard/Income.vue'
import IncomeChart from "@/views/Admin/dashboard/IncomeChart.vue";

const themeStore = useThemeStore();

</script>

<template>
  <div class="root">
    <div class="setting-panel">
      <Settings></Settings>
    </div>
    <div class="income-panel">
      <Income></Income>
    </div>
    <div class="income-chart">
      <IncomeChart></IncomeChart>
    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  width: 100%;
  border-radius: 3px;
  min-width: 800px;
  height: 140px;
  text-align: center;

  .setting-panel {
    display: flex;
    align-items: center;
    line-height: 160px;
    justify-content: center;
  }

  .income-panel {
    display: flex;
    align-items: center;
    padding: 0;
    line-height: 160px;
    justify-content: center;
  }

  .income-chart {
    display: flex;
    align-items: center;
    padding: 0;
    justify-content: center;
  }
}
.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  border: 0;
}
</style>