<script setup lang="ts" name="CommonAside">
import {type Component, h, reactive} from 'vue'
import type {MenuOption} from 'naive-ui'
import {NIcon, useMessage} from 'naive-ui'
import {ref} from 'vue'
import renderIcon from "@/utils/renderIcon";
import {useRouter} from "vue-router"
import {
  BookOutline as BookIcon,
  SpeedometerOutline as CockpitIcon,
  CogOutline as ConfigIcon,
  CardOutline as CardIcon,
  ColorPaletteOutline as ThemeIcon,
  OptionsOutline as Setting,
  ServerOutline as ServerIcon,
  LayersOutline as NodesIcon,
  ConstructOutline as PrivilegeIcon,
  ShuffleOutline as RouterIcon,
  WalletOutline as FinanceIcon,
    ReorderFourOutline as OrderIcon,
  BagOutline as SubIcon,
  TicketOutline as TicketIcon,
  PeopleOutline as UsersIcon,
  NotificationsCircleOutline as NotificationsIcon,
  HelpBuoyOutline as HelpBuoyIcon,
  BulbOutline as KnowledgeIcon,
  PeopleCircleOutline as PeopleIcon,
  StatsChartOutline as StatsChartIcon,

} from '@vicons/ionicons5'

const menuOptions = [
  {
    label: '仪表盘',
    key: 'cockpit',
    icon: renderIcon(CockpitIcon)
  },
  {
    label: '队列监控',
    key: 'status-manage',
    icon: renderIcon(StatsChartIcon)
  },
  {
    label: '设置',
    key: 'setting',
    // icon: renderIcon(Setting),
    children: [
      {
        label: '系统配置',
        key: 'system-config',
        icon: renderIcon(ConfigIcon)
      },
      {
        label: '支付设置',
        key: 'payment-config',
        icon: renderIcon(CardIcon)
      },
      {
        label: '主题设置',
        key: 'theme-config',
        icon: renderIcon(ThemeIcon)
      }
    ]
  },
  {
    label: '服务器',
    key: 'cockpit',
    // icon: renderIcon(ServerIcon),
    children: [
      {
        label: '节点管理',
        key: 'nodes-manage',
        icon: renderIcon(NodesIcon)
      },
      {
        label: '权限组管理',
        key: 'privilege-manage',
        icon: renderIcon(PrivilegeIcon)
      },
      {
        label: '路由管理',
        key: 'router-manage',
        icon: renderIcon(RouterIcon)
      },
    ]
  },
  {
    label: '财务',
    key: 'finance',
    // icon: renderIcon(FinanceIcon),
    children: [
      {
        label: '订阅管理',
        key: 'subscribe-manage',
        icon: renderIcon(SubIcon)
      },
      {
        label: '订单管理',
        key: 'order-manage',
        icon: renderIcon(OrderIcon)
      },
      {
        label: '优惠券管理',
        key: 'ticket-manage',
        icon: renderIcon(TicketIcon)
      },
    ]
  },
  {
    label: '用户',
    key: 'ticket-manage',
    // icon: renderIcon(PeopleIcon),
    children: [
      {
        label: '用户管理',
        key: 'user-manage',
        icon: renderIcon(UsersIcon)
      },
      {
        label: '公告管理',
        key: 'notice-manage',
        icon: renderIcon(NotificationsIcon)
      },
      {
        label: '工单管理',
        key: 'workder-manage',
        icon: renderIcon(HelpBuoyIcon)
      },
      {
        label: '知识库管理',
        key: 'knowledge-manage',
        icon: renderIcon(KnowledgeIcon)
      },
    ]
  },
]

let router = useRouter()
// 方法

let selectMenuItem = (val: any) => {
  console.log('aaa', val)
  router.push('/cockpit')
}


let defaultExpandedKeys = ref([])


</script>

<template>
  <div class="root">
    <div class="title">
      <p>Nxc Networks</p>
    </div>
    <div class="aside">

      <div class="title-v2"><p class="txt">全局</p></div>
      <n-menu
          class="menu"
          :accordion="true"
          @update-value="selectMenuItem"
          :options="menuOptions"
          :default-expanded-keys="defaultExpandedKeys">
        <div style="width: 10px; height: 30px; background-color: #e4b9c0">11111</div>
      </n-menu>


<!--      <div style="width: 100px; height: 30px; background-color: #64967E"></div>-->
    </div>
  </div>
</template>

<style scoped lang="less">
.root {
  width: 280px;
  height: 100%;
  background-color: white;
  text-align: center;

  .title {
    background-color: #324f85;
    height: 6vh;
    color: white;
    line-height: 56px;
    font-weight: 240;
    font-size: 1.25rem;
  }

  .aside {
    width: 100%;
    height: 94%;
    justify-content: center;
    margin-top: 15px;
    .title-v2 {
      text-align: left;
      padding-left: 30px;
      color: gray;
    }
    .menu {
      width: 90%;
      margin-bottom: 30px;
      text-align: left;
      font-size: 0.9rem;
      .n-menu-item:hover {
        background-color: #2f477f;
      }
    }
  }
}

.n-menu-item:hover {
  background-color: #2b542c;

}

.n-menu-item-content {
  background-color: #2f477f;
}


</style>