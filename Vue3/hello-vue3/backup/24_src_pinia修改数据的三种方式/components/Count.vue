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
let add = () => {
  // 第一种修改数据的方式 直接修改
  // countStore.sum += n.value;

  // 第二种修改 碎片修改
  // countStore.$patch({
  //   sum: 888,
  //   address: 'JiangSu Changzhou'
  // })

  // 第三种 使用actions
  countStore.increment(n.value)
}
let minus = () => countStore.sum -= n.value

</script>

<template>
<div class="count">
  <h2>当前求和为 {{ countStore.sum }}</h2>
  <h3>学校 {{ countStore.school }}</h3>
  <h3>地址 {{ countStore.address }}</h3>
  <select v-model.number="n">
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
  </select>
  <button @click="add">add</button>
  <button @click="minus">sub</button>
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