<script setup lang="ts" name="AdminLobby">
import {StatsChartSharp as IncomeIcon} from '@vicons/ionicons5'
import {ref} from 'vue'

let codeMin = ref('')
let isFinish = ref(false)
let codeEd = ref('')
let startConvert = () => {
  setTimeout(() => {
    isFinish.value = true
    codeEd.value = getUpper()
  }, 2000)
}
let getUpper = () => codeMin.value.toUpperCase()
let reverseDara = () => {
  codeMin.value = ''
  codeEd.value = ''
  isFinish.value = false
}
</script>

<template>
  <div class="root">
    <n-flex vertical style="background-color: #eff2f7; height: 100%">
      <div class="func-panel">
        <n-flex class="content" justify="center">
          <n-button class="btn">Oops!</n-button>
          <n-button class="btn">Oops!</n-button>
          <n-button class="btn">Oops!</n-button>
          <n-button class="btn">Long! Long! Cross the line!</n-button>
        </n-flex>
      </div>
      <div class="income">
        <div class="up-content">
          <p>今日收入</p>
          <n-icon size="30px">
            <IncomeIcon/>
          </n-icon>
        </div>
        <div class="money">
          <p class="num">149.67</p>
          <p class="sign">CNY</p>
        </div>
      </div>


      <div class="panel3">
        <div class="hd" style="display: flex">
          <div class="mac" ></div>
          <div class="mac" style="margin-left: 10px"></div>
          <div class="mac" style="margin-left: 10px"></div>
        </div>
        <p class="title">大写字母生成器</p>
        <div class="line1">
          <p>小写英文字母： </p>
          <n-input class="inp" v-model:value="codeMin" type="text" placeholder="基本的 Input"/>
        </div>
        <div class="line2">
          <p>大写英文字母： {{ codeEd }}</p>
        </div>
        <p class="con" v-if="isFinish">{{ isFinish ? '换算完成！' : '换算失败' }}</p>
        <div class="line3">
          <n-button class="btn" secondary @click="startConvert">转换</n-button>
          <n-button class="btn" style="margin-left: 100px" secondary @click="reverseDara">清空</n-button>
        </div>
      </div>

    </n-flex>
  </div>

</template>

<style lang="less" scoped>
.root {
  width: 100%;
  height: 100%;
  background-color: #eff2f7;
}

.func-panel {
  height: 100px;
  background-color: white;
  margin: 20px 20px 0 20px;
  border-radius: 5px;
  padding: 20px;

  .content {
    width: 100%;
    height: 100%;

    .btn {
      width: 24%;
      height: 100%;
    }
  }

}

.panel3 {
  width: 600px;
  height: 400px;
  background-color: white;
  border-radius: 14px;
  margin: 30px;
  border: 1px solid darkgray;

  .hd {
    margin-top: 10px;
    margin-left: 10px;

    .mac {
      width: 15px;
      height: 15px;
      background-color: red;
      border-radius: 50% "
    }

  }
  .title {
    font-size: 1.5rem;
    margin-left: 50px;
    margin-top: 30px;
  }
  .line1 {
    margin-top: 28px;
    margin-left: 20px;
    display: flex;
    justify-content: left;
    line-height: 40px;
    p {
      line-height: 30px;
      font-size: 18px;
    }
    .inp {
      width: 200px;
      height: 30px;
    }
  }
  .line2 {
    margin-top: 28px;
    margin-left: 20px;
    display: flex;
    justify-content: left;
    line-height: 40px;
    p {
      line-height: 30px;
      font-size: 18px;
    }
  }
  .con {
    color: #4cae4c;
    margin-top: 25px;
    margin-left: 130px;
  }
  .line3 {
    margin-top: 40px;
    .btn {
      margin-left: 50px;
    }
  }
}



.income {
  height: 100px;
  background-color: white;
  margin: 20px 20px 0 20px;
  border-radius: 5px;
  padding: 30px;
  .up-content {
    display: flex;
    text-align: center;
    justify-content: space-between;
    color: dimgray;
    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
  .money {
    display: flex;
    align-content: end;
    margin-bottom: 10px;
    .num {
      font-size: 60px;
      font-weight: 300;
    }
    .sign {align-content: end;
      color: #9d9d9d;
      font-size: 20px;
      padding-bottom: 15px;
    }
  }


}
</style>