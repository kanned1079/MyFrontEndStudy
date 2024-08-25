<script setup lang="ts" name="QueueMonitor">
import {onMounted, ref} from 'vue'

// const titlePart1 = ['当前作业量', '近一小时处理量', '7日内报错数量']
let status = ref(true)
const statusColor = {
  error: '#f95555',
  running: '#3bc65c'
}
let nowStatusColor = ref()
onMounted(() => {
  nowStatusColor.value = status.value ? statusColor.running : statusColor.error;
})
let workerNumber = ref(13)

</script>

<template>
  <div class="root">
    <n-card :embedded="true" class="card1" title="总览">
      <n-flex class="inner-card" justify="center">
        <div class="part1">
          <p class="title">当前作业量</p>
          <p class="num">34</p>
        </div>
        <div class="part1">
          <p class="title">近一小时处理量</p>
          <p class="num">875</p>
        </div>
        <div class="part1">
          <p class="title">7日内报错数量</p>
          <p class="num">0</p>
        </div>
        <div class="part1">
          <p class="title">状态</p>
          <p class="status" v-if="status == true">运行中</p>
          <p class="status" v-else>离线</p>
        </div>
      </n-flex>
    </n-card>
    <n-card :embedded="true" class="card2" title="服务器负载">

    </n-card>
  </div>
</template>

<style scoped>
.root {
  min-width: 900px;
  padding: 20px;

  .card1 {
    width: 100%;

    .inner-card {
      display: flex;

      .part1 {
        flex: 1;
        height: 100px;
        border-radius: 4px;
        position: relative;

        .title {
          position: absolute;
          top: 3px;
          left: 3px;
          font-size: 1rem;
        }

        .num {
          position: absolute;
          bottom: 10px;
          left: 3px;
          font-size: 30px;
        }

        .status {
          position: absolute;
          bottom: 10px;
          left: 3px;
          font-size: 30px;
          color: v-bind(nowStatusColor);
        }
      }
    }
  }

  .card2 {
    width: 100%;
    margin-top: 20px;
  }
}
</style>