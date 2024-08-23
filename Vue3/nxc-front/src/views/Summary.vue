<script setup lang="ts" name="Summary">
import Settings from '@/views/dashboard/Settings.vue'
import Income from '@/views/dashboard/Income.vue'
import IncomeChart from "@/views/dashboard/IncomeChart.vue";

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
</style>