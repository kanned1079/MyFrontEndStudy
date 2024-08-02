<script setup lang="ts" name="News">
import {reactive} from "vue";

const newsList = reactive([
  {id: '000001', title: '很好的抗癌食物', content: '西兰花'},
  {id: '000001', title: '如何一夜暴富', content: '学IT'},
  {id: '000001', title: '万万没想到', content: '明天是周一'},
  {id: '000001', title: '好消息', content: '快过年了'},
])
</script>

<template>
  <div class="news">
    <!--  导航区-->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!--      params传递参数-->
        <RouterLink :to="{
        name: 'xiang',  // 注意必须使用name 不能用path
        query: {
          id: news.id,
          title: news.title,
          content: news.content,
        },
      }"> {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!--  展示区-->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li::marker {
  color: #64967E;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>