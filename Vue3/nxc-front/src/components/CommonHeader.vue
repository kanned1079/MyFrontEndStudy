<script setup lang="ts" name="CommonHeader">
import {ref} from 'vue'
import {Sunny as sunIcon, PersonCircle as userIcon} from '@vicons/ionicons5'
import useThemeStore from "@/stores/useThemeStore";
import type {GlobalTheme} from 'naive-ui'


import useUserDropDown from "@/stores/userDropdownItems";
import useUserInfoStore from "@/stores/userInfo";
const userDropdownStore = useUserDropDown()
const themeStore = useThemeStore();
const userInfoStore = useUserInfoStore();
let thisUser = userInfoStore.thisUser;
let nowTheme = themeStore.theme1
let options = userDropdownStore.options

const theme = ref<GlobalTheme | null>(null)

let handleSelect = (key: string | number) => {
  switch (key) {
    case 'profile': {
      console.log('个人中心')
      break
    }
    case 'editProfile': {
      console.log('修改个人资料')
      break
    }
    case 'logout': {
      console.log('退出登录')
      break
    }
  }
}

let handleChangeTheme = () => {
  console.log('修改主题颜色')
  if (themeStore.nowThemeCode === 1)
    themeStore.nowThemeCode = 0
  else
    themeStore.nowThemeCode = 1
  localStorage.setItem('themeCode', JSON.stringify({code: themeStore.nowThemeCode}))
}
</script>

<template>
  <div class="root">
    <div class="l-content">
      <p class="txt">
        仪表板
      </p>
    </div>
    <div class="r-content">
    <span class="all">
      <div class="color-switch">
      <n-button quaternary class="btn" size="medium" @click="handleChangeTheme">
        <template #icon>
          <n-icon size="20"><sunIcon/></n-icon>
        </template>
      </n-button>
    </div>
      <div class="info">
        <n-dropdown
            @select="handleSelect"
            :options="options"
            placement="bottom"
            size="large"
            style="width: 180px;"
            content-style="{backgroundColor='#e3e5e7'}"
            class="dd">

          <n-button quaternary style="font-size: 1rem; color: white; align-items: center">
            <n-icon size="20" style="padding-right: 10px"><userIcon/></n-icon> {{ thisUser.email }}
          </n-button>
        </n-dropdown>
      </div>
    </span>

    </div>
  </div>
</template>

<style lang="less" scoped>
.root {
  display: flex;
  justify-content: space-between;

  .l-content {
    width: 100px;
    line-height: 6vh;
    padding-left: 30px;

    .txt {
      color: v-bind('themeStore.fontColor')
    }
  }

  .r-content {
    width: 280px;
    min-width: 240px;
    display: flex;
    align-items: center;
    margin-right: 20px;

    .all {
      display: flex;
      align-items: center; /* 使子元素上下居中 */

      .color-switch {
        margin-right: 5px;
        .btn {
          color: white;
        }
      }

      .info {
        width: 240px;
        .dd {
          display: flex;
          align-items: center;
          .btn {
            font-size: 3rem;
            color: white;
          }
        }
      }
    }
  }
}
</style>