<script setup lang="ts" name="SendMail">

let handok = () => {

}

let sendTestMail = () => {

}

</script>

<template>
  <n-card class="root" :embedded="true" title="邮件设置">
    <n-alert title="Warning 警告" type="warning" style="margin-bottom: 30px" :bordered="false">
      如果你更改了本页配置，需要对队列服务进行重启。&nbsp;另外本页配置优先级高于.env中邮件配置。
    </n-alert>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">SMTP服务器地址</p>
            <p class="shallow">由邮件服务商提供的服务地址</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">SMTP服务端口</p>
            <p class="shallow">常见的端口有25, 465, 587</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">SMTP加密方式</p>
            <p class="shallow">465端口加密方式一般为SSL，587端口加密方式一般为TLS</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">SMTP账号</p>
            <p class="shallow">由邮件服务商提供的账号</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">SMTP密码</p>
            <p class="shallow">由邮件服务商提供的密码</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">发件地址</p>
            <p class="shallow">由邮件服务商提供的发件地址</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">发件地址</p>
            <p class="shallow">你可以在文档查看如何自定义邮件模板</p>
          </div>
        </span>
      <span class="r-content">
          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>
        </span>
    </div>

    <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">发送测试邮件</p>
            <p class="shallow">邮件将会发送到当前登陆用户邮箱</p>
          </div>
        </span>
      <span class="r-content to-right">
<!--          <n-input size="large" placeholder="请输入" @blur="handok"></n-input>-->
        <n-button @click="sendTestMail" size="large" type="primary">发送测试邮件</n-button>
        </span>
    </div>

  </n-card>
</template>

<style lang="less" scoped>
.root {
  .warm {
    background-color: #ffefd1;
    height: 50px;
    border: 0;
    line-height: 50px;
    text-align: left;

    p {
      color: #956d34;
      margin-left: 20px;
      font-size: 1rem;
    }
  }
}

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

.to-right {
  text-align: right;
}
</style>