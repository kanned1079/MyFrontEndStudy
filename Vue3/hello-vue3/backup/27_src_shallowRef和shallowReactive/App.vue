<template>
<div class="app">
  <h2>sum: {{ sum }}</h2>
  <h3>person.name: {{ person.name }}</h3>
  <h3>person.name: {{ person.age }}</h3>
  <button @click="changeSum">changeSum</button>
  <button @click="changeName">changeName</button>
  <button @click="changeAge">changeAge</button>
  <button @click="changePerson">changePerson</button>
  <hr>
  <h2> {{ car }}</h2>
  <button @click="changeBrand">changeBrand</button>
  <button @click="changeColor">changeColor</button>
  <button @click="changeEngine">changeEngine</button>
  <button @click="changeCar">changeCar</button>
</div>
</template>

<script lang="ts" setup name="App">
import {ref, shallowRef, shallowReactive} from "vue";
// data
let sum = ref(0)
let person = shallowRef({
  name: 'zhangsan',
  age: 18
})
let car = shallowReactive({
  brand: 'BMW',
  options: {
    color: '红色',
    engine: 'v8',
  }
})
// functions
let changeSum = () => sum.value += 1
let changeName = () => person.value.name = '李四'
let changeAge = () => person.value.age -= 1
let changePerson = () => person.value = {name: '王武', age: 32}
// pass
let changeBrand = () => car.brand = '奔驰'
let changeColor = () => car.options.color = '白色'
let changeEngine = () => car.options.engine = 'v6'
let changeCar = () => Object.assign(car, {
  brand: 'BMW2',
  options: {
    color: '蓝色',
    engine: 'v7',
  }
})
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