<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑 {{ computer }}</h4>
    <h4>书 {{ book }} 本</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import {ref} from "vue";

let computer = ref('Lenove')
let book = ref(6)

defineExpose({computer, book})
</script>

<style scoped>
	.child2{
		margin-top: 20px;
		background-color: orange;
		padding: 20px;
		border-radius: 10px;
    box-shadow: 0 0 10px black;
	}
</style>
