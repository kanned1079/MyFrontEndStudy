<template>
  <div class="father">
    <h3>父组件</h3>
    <h4>{{ username }}</h4>
    <h4>{{ password }}</h4>
<!--    这里的v-model是用在了html标签上-->
<!--    <input v-model="username"></input>-->
<!--    <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"></input>-->

<!--    v-model用在组件上-->
<!--    <AtguiguInput v-model="username"></AtguiguInput>-->
<!--    本质写法-->
<!--    <AtguiguInput-->
<!--        :modelValue="username"-->
<!--        @update:modelValue="username=$event"-->
<!--    ></AtguiguInput>-->

<!--    修改modelValue-->
<AtguiguInput v-model:ming="username" v-model:mima="password"></AtguiguInput>

  </div>
</template>

<script setup lang="ts" name="Father">
import AtguiguInput from "@/pages/04_v-model/AtguiguInput.vue";
import {ref} from 'vue';
// 数据
let username = ref('zhangsan')
let password = ref('passcode')
</script>

<style scoped>
.father {
  padding: 20px;
  background-color: rgb(165, 164, 164);
  border-radius: 10px;
}
</style>
