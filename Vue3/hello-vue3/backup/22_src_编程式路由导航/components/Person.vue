// 或者使用一个插件来设置 标签中需要写入name="xxx"
<script lang="ts" setup name="Person">
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";
// 解构
const {sum, add, bigSum} = useSum()
const {dogList, getDog} = useDog()

</script>

<template>
  <div class="person">
    <h2>当前求和为 {{ sum }} {{ bigSum }}</h2>
    <button @click="add">sum++</button>
    <hr>
    <img v-for="(dog, index) in dogList" :key="index" :src="dog" alt="">
    <button @click="getDog">再来一只</button>
  </div>
</template>

<style scoped lang="less">
.person {
  background-color: skyblue;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 5px;

  img {
    height: 100px;
    margin-right: 10px;
  }

  h1 {
    color: white;
  }

  button {
    margin: 0 5px;
  }
}
</style>