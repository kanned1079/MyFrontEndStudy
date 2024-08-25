<script setup lang="ts" name="UserLogin">
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import useSiteInfo from "@/stores/siteInfo";
import useUserInfoStore from "@/stores/userInfo";
import bg from '@/assert/imgs/102874641_p0.png'

import type { NotificationType } from 'naive-ui'
import { useNotification } from 'naive-ui'
const notification = useNotification()
let notifyErr = (type: NotificationType) => {
  notification[type]({
    content: '用户名或密码错误',
    // meta: '1111',
    duration: 2500,
    keepAliveOnHover: true
  })
}

let notifyPass = (type: NotificationType) => {
  notification[type]({
    content: '验证通过',
    // meta: '1111',
    duration: 2500,
    keepAliveOnHover: true
  })
}

const siteInfo = useSiteInfo();
const userInfoStore = useUserInfoStore();
const router = useRouter();
let username = ref()
let password = ref()
let handleLogin = () => {
  if (sessionStorage.getItem('isAuthed') == null) {
    console.log(username.value, password.value)
    if (username.value == 'kanna' && password.value == '1202') {
      userInfoStore.isAuthed = true
      notifyPass('success')
      sessionStorage.setItem('isAuthed', JSON.stringify(true))
      setTimeout(()=>{}, 1000)
      router.push({
        path: '/dashboard'
      })
    } else {
      console.log('err')
      notifyErr('error')
    }
  } else {
    console.log(JSON.parse(sessionStorage.getItem('isAuthed') as string))
    if (JSON.parse(sessionStorage.getItem('isAuthed') as string) == true) {
      router.push({
        path: '/dashboard'
      })
    }
  }

}
let handleFrogetPassword = () => {

}

onMounted(() => {
  console.log('UserLogin挂载')
  if (sessionStorage.getItem('isAuthed') != null) {
    console.log('读取到session')
    if (JSON.parse(sessionStorage.getItem('isAuthed') as string) == true) {
      console.log('读取到session2')
      setTimeout(() => {
        notifyPass('success')
        router.push({
          path: '/dashboard'
        })
      }, 500)

    }
  }
})
</script>

<template>

  <n-layout  style="width: 100%; height: 100vh;" justify="center" :vertical="true" align="center">
    <n-flex justify="center" :vertical="true" align="center">
      <n-card class="layer-up" :embedded="true"	>
        <p class="title">{{ siteInfo.siteName }}</p>
        <p class="sub-title">登陆到管理中心</p>
        <div class="inp">
          <n-input secondary v-model:value="username" type="text" placeholder="邮箱" size="large"/>
          <n-input v-model:value="password" type="password" placeholder="密码" size="large" style="margin-top: 20px"/>
        </div>
        <n-button secondary type="info" class="login-btn" size="large" @click="handleLogin">
          登入
        </n-button>
        <n-button strong tertiary type="warning" size="large" class="login-btn" @click="handleFrogetPassword">
          忘记密码
        </n-button>
      </n-card>
<!--      <n-card class="layer-down">-->

<!--      </n-card>-->
    </n-flex>
  </n-layout>


</template>

<style lang="less" scoped>

.n-flex {
  height: 100vh;
  //background-color: rgba(255, 255, 255, 0.001);
  //background-image: url("@/assert/imgs/102874641_p0.png");
  //background-repeat:no-repeat;background-size:cover;background-attachment:fixed;background-position-x:center;
}

.layer-up {
  width: 480px;
  height: 400px;

  .title {
    font-size: 30px;
  }
  .sub-title {
    font-size: 13px;
  }
  .inp {
    margin-top: 30px;
    text-align: left;
    width: 90%;
  }
  .login-btn {
    margin-top: 20px;
    width: 90%;
  }
}
.layer-down {
  background-color: #2c3e50;
  width: 480px;
  height: 40px;
}



</style>
