// 或者使用一个插件来设置 标签中需要写入name="xxx"
<script lang="ts" setup name="Person">
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref} from "vue";
// 数据
let sum = ref(0)
// 方法
let add = () => sum.value += 1;
// 创建 setup中就是创建
console.log('创建');
// 挂载
onBeforeMount(() =>  console.log('挂载前'))
onMounted(() => console.log('Person挂载完毕'))
// 更新
onBeforeUpdate(() => console.log('更新前'))
onUpdated(() => console.log('更新完毕'))
// 卸载
onBeforeUnmount(() => console.log('卸载前'))
onUnmounted(() => console.log('卸载完毕'))

</script>


<template>
  <div class="person">
    <h2>当前求和为 {{ sum }}</h2>
    <button @click="add">sum++</button>
  </div>
</template>

<style scoped lang="less">
.person {
  background-color: skyblue;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;

  h1 {
    color: white;
  }

  button {
    margin: 0 5px;
  }
}
</style>