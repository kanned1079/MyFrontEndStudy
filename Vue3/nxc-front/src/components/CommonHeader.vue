<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  ArrowDown,
  Sunny,
    UserFilled
} from '@element-plus/icons-vue'
</script>

<template>
<div class="box1">

  <div class="r-content">
    <div class="txt-box1">
      <p>控制台</p>
    </div>
    <div class="func-box1">
      <div class="icn">

        <el-button color="#3b5998">
          <el-icon size="20"><Sunny/></el-icon>
        </el-button>
      </div>
      <div class="select">
        <el-dropdown>
          <el-button type="primary" color="#3b5998" style="font-size: 16px; font-weight: normal" >
            <el-icon><UserFilled/></el-icon> &nbsp;
            kanned1079@gmail.com<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item style="width: 100px">个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
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
  .l-content {
    background-color: #324f85;
    width: 240px;
    height: 100%;
    text-align: center;
    line-height: 6vh;
    p {
      color: white;
      font-weight: 300;
      font-size: 1.2rem;
    }
  }
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
      .icn {
        margin-right: 10px;
        display: flex;
      }
      .select {
        margin-right: 20px;
        text-align: center;
        display: flex;
      }
    }
  }
}
</style>