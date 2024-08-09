<script setup lang="ts" name="AdminLobby">
import {StatsChartSharp as IncomeIcon} from '@vicons/ionicons5'
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
        </div>
        <div class="money">
          <p class="num">149.67</p>
          <p class="sign">CNY</p>
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