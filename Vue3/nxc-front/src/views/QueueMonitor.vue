<script setup lang="ts" name="QueueMonitor">
import {onMounted, reactive, ref} from 'vue'
import type {NumberAnimationInst} from 'naive-ui'
import useThemeStore from "@/stores/useThemeStore";
// const titlePart1 = ['当前作业量', '近一小时处理量', '7日内报错数量']
const themeStore = useThemeStore()
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

const numberAnimationInstRef = ref<NumberAnimationInst | null>(null)

let serverLoad = reactive({
  cpu: 37.7,
  gpu: 40.5,
  mem: 76.4,
  disk: 16.7
})

let hardwareInfo = reactive({
  cpu: {
    title: 'CPU型号',
    content: 'Intel Xeon E5-2680v4 2.4Ghz',
    unit: '',
  },
  cores: {
    title: '总核心数',
    content: 56,
    unit: 'core(s)',
  },
  memory: {
    title: '内存大小',
    content: '3.7 / 47.4',
    unit: 'GiB',
  },
  disk: {
    title: '根目录大小',
    content: '19.5 / 127.9',
    unit: 'GiB',
  },
})

let osInfo = reactive({
  release: {
    title: '操作系统版本',
    content: 'RedHat Enterprise Linux 9.1'
  },
  kernel: {
    title: '内核版本',
    content: 'Linux 5.14.287'
  },
  architecture: {
    title: '系统架构',
    content: 'Arm64 / aarch64'
  },
  processNum: {
    title: '进程号',
    content: 3,
  },
  goroutine: {
    title: '系统Go协程数',
    content: 17,
  },
  gc: {
    title: '上一次GC回收时间',
    content: '2024-08-26 18:14:58'
  }
})

onMounted(() => {

})

</script>

<template>
  <div class="root">
    <n-card hoverable :embedded="true" class="card1" title="总览">
      <n-flex class="inner-card" justify="center">
        <div class="part1">
          <p class="title">当前作业量</p>
          <!--          <p class="num">34</p>-->
          <!--          <n-number-animation class="num" :from="0" :to="33456344" />-->
          <n-statistic tabular-nums class="num">
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="12039"/>
            <template #suffix>条</template>
          </n-statistic>
        </div>
        <div class="part1">
          <p class="title">近一小时处理量</p>
          <!--          <p class="num">875</p>-->
          <n-statistic tabular-nums class="num">
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="345"/>
            <template #suffix>条</template>
          </n-statistic>
        </div>
        <div class="part1">
          <p class="title">7日内报错数量</p>
          <!--          <p class="num">0</p>-->
          <n-statistic tabular-nums class="num">
            <n-number-animation ref="numberAnimationInstRef" :from="0" :to="0"/>
            <template #suffix>条</template>
          </n-statistic>
        </div>
        <div class="part1">
          <p class="title">状态</p>
          <p class="status" v-if="status == true">运行中</p>
          <p class="status" v-else>离线</p>
        </div>
      </n-flex>
    </n-card>

    <n-card hoverable :embedded="true" class="card2" title="服务器负载">
      <div class="card1-inner">
        <div class="cpu-panel">
          <n-progress type="dashboard" gap-position="bottom" :percentage="serverLoad.cpu"/>
          <p>CPU使用率</p>
        </div>
        <div class="cpu-panel">
          <n-progress type="dashboard" gap-position="bottom" :percentage="serverLoad.gpu"/>
          <p>GPU使用率</p>
        </div>
        <div class="mem-panel">
          <n-progress type="dashboard" gap-position="bottom" :percentage="serverLoad.mem"/>
          <p>内存使用率</p>
        </div>
        <div class="disk-panel">
          <n-progress type="dashboard" gap-position="bottom" :percentage="serverLoad.disk"/>
          <p>硬盘使用率</p>
        </div>
      </div>

      <hr style="margin-top: 30px; opacity: 0.1">


      <div class="card3">
        <n-card class="card2-inner" title="服务器基本信息" :bordered="false" :embedded="true">
          <div v-for="item in hardwareInfo" :key="item.title" class="item-box">
            <p class="title">{{ item.title }}：</p>
            <p class="content">{{ item.content }} {{ item.unit }}</p>
          </div>
        </n-card>

        <n-card class="card2-inner" title="系统信息" :bordered="false" :embedded="true">
          <div v-for="item in osInfo" :key="item.title" class="item-box">
            <p class="title">{{ item.title }}：</p>
            <p class="content">{{ item.content }}</p>

          </div>
        </n-card>


      </div>

      <!--      <n-card class="card2-inner" title="基本信息" :bordered="false">-->
      <!--        <div v-for="item in hardwareInfo" :key="item.title" class="item-box">-->
      <!--          <p class="title">{{ item.title }}：</p>-->
      <!--          <p class="content">{{ item.content }}</p>-->
      <!--        </div>-->
      <!--      </n-card>-->


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
          opacity: 0.8;
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

    .card1-inner {
      width: 100%;
      height: 150px;
      display: flex;

      .cpu-panel {
        flex: 1;
        text-align: center;
        width: 200px;
      }

      .mem-panel {
        flex: 1;
        text-align: center;
        width: 200px;

      }

      .disk-panel {
        flex: 1;
        text-align: center;
        width: 200px;
      }
    }

    .card3 {
      display: flex;

      .card2-inner {
        flex: 1;
        height: 320px;
        border-radius: 5px;
        margin-top: 30px;

        .title-card2 {
          font-size: 1.15rem;
          opacity: 0.8;
          margin-bottom: 20px;
        }

        .item-box {
          display: flex;
          margin-left: 5px;
          justify-content: left;
          line-height: 30px;

          .title {
            font-size: 1rem;
            margin-right: 5px;
            margin-bottom: 10px;
          }

        }
      }
    }


  }
}
.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  border: 0;
}
</style>