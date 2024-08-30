<script setup lang="ts" name="Security">
import useThemeStore from "@/stores/useThemeStore";

const themeStore = useThemeStore();

let handok = () => {

}
</script>

<template>
  <div class="root">
    <n-card :embedded="true" class="security-panel" title="安全设置">
      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">邮箱验证</p>
            <p class="shallow">开启后将会强制要求用户进行邮箱验证。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">禁止使用Gmail多别名</p>
            <p class="shallow">开启后Gmail多别名将无法注册。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">安全模式</p>
            <p class="shallow">开启后除了站点URL以外的绑定本站点的域名访问都将会被403。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">后台路径</p>
            <p class="shallow">后台管理路径，修改后将会改变原有的admin路径。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large"  placeholder="https://x.com/logo.jpeg" @blur="handok"></n-input>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">邮箱后缀白名单</p>
            <p class="shallow">开启后在名单中的邮箱后缀才允许进行注册。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">防机器人</p>
            <p class="shallow">开启后将会使用Google reCAPTCHA防止机器人。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">IP注册限制</p>
            <p class="shallow">开启后如果IP注册账户达到规则要求将会被限制注册，请注意IP判断可能因为CDN或前置代理导致问题。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">次数</p>
            <p class="shallow">达到注册次数后开启惩罚。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large"  placeholder="请输入" @blur="handok"></n-input>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">惩罚时间(分钟)</p>
            <p class="shallow">需要等待惩罚时间过后才可以再次注册。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large"  placeholder="请输入" @blur="handok"></n-input>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">防爆破限制</p>
            <p class="shallow">开启后如果该账户尝试登陆失败次数过多将会被限制。</p>
          </div>
        </span>
        <span class="r-content to-right">
          <n-switch size="medium" ></n-switch>
        </span>
      </div>

      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">次数</p>
            <p class="shallow">达到失败次数后开启惩罚。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large"  placeholder="请输入" @blur="handok"></n-input>
        </span>
      </div>

      <div class="item" style="margin-bottom: 0">
        <span class="l-content">
          <div class="describe">
            <p class="title">惩罚时间(分钟)</p>
            <p class="shallow">需要等待惩罚时间过后才可以再次登陆。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large"  placeholder="请输入" @blur="handok"></n-input>
        </span>
      </div>


    </n-card>

  </div>
</template>

<style lang="less" scoped>
.root {
  min-width: 900px;

  .security-panel {
    .item {
      height: 50px;
      display: flex;
      margin-bottom: 30px;

      .l-content {
        flex: 1;

        .describe {
          .title {
            font-weight: bold;
          }

          .shallow {
            margin-top: 5px;
            opacity: 0.5;
          }
        }
      }

      .r-content {
        margin-left: 30px;
        flex: 0.8;
        justify-content: center;
        line-height: 50px;
      }
    }
  }
}
.to-right {
  text-align: right;
}


.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  border: 0;
}
</style>