<script setup lang="ts" name="LoveTalk">
import useLoveTalk from "@/store/loveTalk";
const loveTalk = useLoveTalk();
import {reactive} from "vue";
import axios from 'axios';
import {nanoid} from 'nanoid';
import {storeToRefs} from "pinia";

// 数据
// let talkList = reactive([
//   {id: '000001', title: '今天你有点怪，哪里怪，怪好看的。'},
//   {id: '000002', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
//   {id: '000003', title: '心里给你留了一块地，我的死心塌地。'},
// ])
let {talkList} = storeToRefs(loveTalk);
// 方法
let getLoveTalk = async () => loveTalk.getATalk();

loveTalk.$subscribe((mutation, state) => {
  console.log('loveTalk里面保存的数据发生了变化', mutation, state);
  localStorage.setItem('talkList', JSON.stringify(state.talkList));
})

</script>

<template>
<div class="talk">
  <button @click="getLoveTalk">获取一句土味情话</button>
  <ul>
    <li v-for="talk in talkList" :key="talk.id">
      {{ talk.title }}
    </li>
  </ul>
</div>
</template>

<style scoped>
.talk {
  background-color: #64967E;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>