<template>
<div class="app">
  <h2>sum: {{ sum }}</h2>
  <h2>sum2: {{ sum2 }}</h2>
  <button @click="addSum">addSum {{ sum }}</button>
  <button @click="addSum2">addSum2 {{ sum2 }}</button>
  <hr>
  <h2>car {{ car }}</h2>
  <h2>car2 {{ car2 }}</h2>
  <h2>car3 {{ car3 }}</h2>
</div>
</template>

<script lang="ts" setup name="App">
import {reactive, readonly, ref, shallowReadonly} from "vue";
// 数据
let sum = ref(0)
let car = reactive({
  brand: '奔驰',
  options: {
    color: '蓝色',
    price: 11,
  }
})
let sum2 = readonly(sum)  // readonly(<这里需要的是一个对象>)
let car2 = readonly(car)  // 这是都不能改的
let car3 = shallowReadonly(car) // 这里可以修改深层次 而第一层次不能修改

// 方法
let addSum = () => sum.value += 1

let addSum2 = () => sum2.value += 1

</script>

<style lang="css" scoped>
.app {
  background-color: lightgray;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 20px;
}
button {
  margin-right: 10px;
  border: 0;
  border-radius: 2px;
  background-color: #1b6d85;
  color: white;
  height: 3vh;
  width: 12vh;
}
</style>