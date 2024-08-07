<template>
  <div class="child1">
    <h3>子组件1</h3>
    <h4>玩具 {{ toy }} </h4>
    <h4>书 {{ book }} 本</h4>
    <button @click="minusHouse($parent)">房产-1</button>
  </div>
</template>

<script setup lang="ts" name="Child1">
// 数据
import {ref} from "vue";

let toy = ref('奥特曼')
let book = ref(4)

// 把数据交给外部

let minusHouse = (parent: any) => {
  console.log(parent)
  parent.house -= 1;

}
defineExpose({toy, book})

</script>

<style scoped>
	.child1{
		margin-top: 20px;
		background-color: skyblue;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
