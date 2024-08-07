<template>
<div class="app">
  <h2>sum: {{ sum }}</h2>
  <button @click="addSum">sum {{ sum }}</button>
</div>
</template>

<script lang="ts" setup name="App">
import {ref} from "vue";

let sum = ref(0)

let addSum = () => sum.value += 1

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