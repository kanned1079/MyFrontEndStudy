<template>
<div class="app">
  <h1>响应式</h1>
  <h2>姓名 {{ person.name }}</h2>
  <h2>年龄 {{ person.age }}</h2>
  <button @click="changeAge">Alert Age</button>
  <h1>原始</h1>
  <h2>姓名 {{ person2.name }}</h2>
  <h2>年龄 {{ person2.age }}</h2>
  <button @click="showPerson(person2)">showPerson</button>
</div>
</template>

<script lang="ts" setup name="App">
import {reactive, readonly, ref, shallowReadonly, toRaw} from "vue";
// 数据
let person = reactive({
  name: 'kinggyo',
  age: 16,
})
let person2 = toRaw(person) // 这个没有响应式了
console.log(person) // 这里的person是一个响应式对象
console.log(person2)
let showPerson = (p: any ) => {
  p.age += 10;
  p.name += '~';
  console.log(p)
}

// 方法
let changeAge = () => person.age = 14

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