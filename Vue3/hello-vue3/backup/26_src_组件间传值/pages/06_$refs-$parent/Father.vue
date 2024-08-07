<template>
	<div class="father">
		<h3>父组件</h3>
    <h4>房产 {{ house }}</h4>
    <button @click="changeToy">修改child1的玩具</button>
    <button @click="changeComputer">修改child2的电脑</button>
    <button @click="getAllChild($refs)">获取所有自组件的实例对象</button>
    <Child1 ref="c1"></Child1>
    <Child2 ref="c2"></Child2>
	</div>
</template>

<script setup lang="ts" name="Father">
import Child1 from "@/pages/06_$refs-$parent/Child1.vue";
import Child2 from "@/pages/06_$refs-$parent/Child2.vue";
import {reactive, ref} from "vue";

// 数据
let house = ref(4)
let c1 = ref()
let c2 = ref()

// 方法
let changeToy = () => {
  console.log(c1.value)
  c1.value.toy = '小猪配齐';
}

let changeComputer = () => {
  c2.value.computer = '华为'
}

let getAllChild = (refs:{[key: string]:any}) => {
  console.log(refs)
  for (let key in refs) {
    console.log(refs[key])
    refs[key].book += 3
  }
}

let obj = reactive({
  a: 1,
  b: 2,
  c: ref(1)
})
// 这里输出就不需value了 reactive包裹的ref自定解包
console.log(obj.c)

let x = ref(4)
console.log(x.value)


defineExpose({house})

</script>

<style scoped>
	.father {
		background-color: rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}

	.father button {
		margin-bottom: 10px;
		margin-left: 10px;
	}
</style>

