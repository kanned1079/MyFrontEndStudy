<script setup lang="ts" name="Count">
import {ref} from "vue";
import useCountStore from '@/store/count'
const countStore = useCountStore()

console.log(countStore)
// 以下两种给都可以拿到数据
// console.log(countStore.sum)
// console.log(countStore.$state.sum)
// 数据
// let sum = ref(1)  // 当前求和
let n = ref(1)  // 用户选择的数字
// 方法
let add = () => countStore.sum += n.value
let minus = () => countStore.sum -= n.value

</script>

<template>
<div class="count">
  <h2>当前求和为 {{countStore.sum}}</h2>
  <select v-model.number="n">
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
  </select>
  <button @click="">add</button>
  <button @click="">sub</button>
</div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
select, button {
  margin: 0 5px;
  height: 25px;
}
</style>