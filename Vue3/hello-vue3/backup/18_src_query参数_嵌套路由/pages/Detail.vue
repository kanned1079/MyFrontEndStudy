<script setup lang="ts">
import { useRoute } from "vue-router";
import { toRefs } from "vue";

let route = useRoute()
console.log(route)
// 从一个响应式对象中直接解构出其属性 会使其丢失响应式 所以需要使用toRefs
let { query } = toRefs(route)
</script>

<template>
  <ul class="news-list">
    <li>编号 {{ query.id}}</li>
    <li>标题 {{ query.title}}</li>
    <li>内容 {{ query.content}}</li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>