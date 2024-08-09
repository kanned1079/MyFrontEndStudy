<script setup lang="ts">
import type {Component} from "vue";
import {h, ref} from 'vue'
import {Exit as ExitIcon, PersonCircleOutline as UserIcon, Sunny,} from '@vicons/ionicons5'
import {NIcon} from 'naive-ui'
import renderIcon from "@/utils/renderIcon";

let options = ref([
  {
    label: '个人中心',
    key: 'profile',
    icon: renderIcon(UserIcon)
  },
  {
    label: '退出登录',
    key: 'logout',
    icon: renderIcon(ExitIcon)
  }
])
</script>

<template>
  <div class="box1">

    <div class="r-content">
      <div class="txt-box1">
        <p>控制台</p>

      </div>
      <div class="func-box1">
        <div class="icn-div">
          <n-button class="icn" quaternary style="font-size: 1rem; color: white">
            <n-icon size="22"><Sunny/></n-icon>
          </n-button>
        </div>
        <div class="select">
          <n-dropdown :options="options" size="medium" class="dropdown">
            <n-button class="btn" quaternary style="font-size: 1rem; color: white" icon-placement="left">
              <n-icon size="22" style="margin-right: 10px"><UserIcon/></n-icon>
              kanned1079@gmail.com
            </n-button>
          </n-dropdown>
          <!--       drop-->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.box1 {
  background-color: white;
  width: auto;
  min-width: 320px;
  line-height: 1.2;
  height: 6vh;
  display: flex;
  align-items: center;

  .r-content {
    width: 100%;
    height: 100%;
    background-color: #3b5998;
    display: flex;
    justify-content: space-between;

    .txt-box1 {
      text-align: left;
      line-height: 6vh;
      margin-left: 20px;

      p {
        font-weight: 300;
        color: white;
      }
    }

    .func-box1 {
      width: 320px;
      line-height: 6vh;
      display: flex;
      align-items: center;
      justify-content: center;

      .icn-div {
        margin-right: 20px;
        display: flex;

        .icn {
          color: white;
        }
      }

      .select {
        margin-right: 20px;
        text-align: center;
        display: flex;
        .dropdown {
          .btn {
            font-size: 30px;
          }
        }
      }
    }
  }
}
</style>