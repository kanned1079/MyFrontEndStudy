<script setup lang="ts" name="QueueMonitor">
import {defineComponent} from 'vue'

</script>

<template>
<div class="root">
  <n-card :embedded="true" class="card1" title="当前协程数量"></n-card>
</div>
</template>

<style scoped>
.root {
  padding: 20px;
  .card1 {
    width: 100%;
    height: 100px;
  }
}
</style>