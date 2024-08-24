<script setup lang="ts" name="CommonAside">
import {defineComponent} from 'vue'
import renderIcon from "@/utils/iconFormator";
let MenuOption  = [
  {
    label: '仪表盘',
    key: 'hear-the-wind-sing',
    // icon: renderIcon(BookIcon)
  },
  {
    label: '队列监控',
    key: 'queue',
    // icon: renderIcon(BookIcon)
  },
  {
    label: '设置',
    key: 'pinball-1973',
    // icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: '系统配置',
        key: 'system-config'
      },
      {
        label: '支付设置',
        key: 'payment-config'
      },
      {
        label: '主题配置',
        key: 'theme-config'
      },
    ]
  },
  {
    label: '服务器',
    key: 'server',
    // icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: '节点管理',
        key: 'node-manager'
      },
      {
        label: '权限组管理',
        key: 'privilege-manager'
      },
      {
        label: '路由管理',
        key: 'router-config'
      },
    ]
  },
  {
    label: '财务',
    key: 'finance',
    // icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: '订阅管理',
        key: 'subscribe-manager'
      },
      {
        label: '订单管理',
        key: 'order-manager'
      },
      {
        label: '优惠券管理',
        key: 'ticket-manager'
      },
    ]
  },
  {
    label: '用户',
    key: 'users',
    // icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        label: '用户管理',
        key: 'user-manager'
      },
      {
        label: '公告管理',
        key: 'public-manager'
      },
      {
        label: '工单管理',
        key: 'prob-manager'
      },
      {
        label: '知识库管理',
        key: 'knowledge-manager'
      },
    ]
  },

]

let defaultExpandedKeys = () => {}
let handleUpdateExpandedKeys = () => {}

</script>

<template>
  <div class="root">
    <n-menu
        class="menu"
        :accordion="true"
        :options="MenuOption"
    />
  </div>

</template>

<style lang="less" scoped>


.root {
  padding: 6px;
  .menu {

  }
}
</style>