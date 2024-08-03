<script setup lang="ts" name="Home">
import {onMounted} from "vue";
import {useRouter} from "vue-router"
const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    router.push('/news')
}, 3000)
})
</script>

<template>
  <div class="home">
    <img src="https://ikanned.com:24444/d/Upload/NXC/cloudy.svg" alt="">
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>