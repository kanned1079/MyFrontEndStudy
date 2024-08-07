<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑：{{ computer }}</h4>
    <h4>哥哥给的玩具：{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import {onUnmounted, ref} from 'vue';
import emitter from '@/utils/emitter'
// 数据
let computer = ref('Lenovo');
let toy = ref('');
// 绑定事件
emitter.on('send-toy', (value) => {
  console.log('send-toy', value)
  toy.value = value as string;
})

onUnmounted(() => {
  // 组件在解绑时卸载事件
  emitter.off('send-toy')
})
</script>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>