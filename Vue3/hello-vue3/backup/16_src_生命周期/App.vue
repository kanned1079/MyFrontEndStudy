<script lang="ts" setup name="App">
import Person from '@/components/Person.vue'
import {onMounted, ref} from 'vue'
let isShow = ref(true)

onMounted(() => {
  console.log('App挂载完毕')
})
</script>

<template>
<!--  :代表表达式-->
  <Person v-if="isShow"></Person>
  <button @click="isShow = !isShow">isShow</button>
</template>

<style lang="less">

</style>