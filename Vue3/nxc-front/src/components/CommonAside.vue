<script setup lang="ts" name="CommonAside">
import {type Component, h, reactive} from 'vue'
import type {MenuOption} from 'naive-ui'
import {NIcon, useMessage} from 'naive-ui'
import {ref} from 'vue'
import {BookOutline as BookIcon, PersonOutline as PersonIcon, WineOutline as WineIcon} from '@vicons/ionicons5'
const menuOptions = reactive([
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    // icon: renderIcon(BookIcon)
  },
])
let defaultExpandedKeys = ref(true)

</script>

<template>
  <div class="root">
    <div class="title">
      <p>Nxc Networks</p>
    </div>
    <div class="aside">
      <n-menu
          :options="menuOptions"
          :default-expanded-keys="defaultExpandedKeys"

      />
    </div>
  </div>
</template>

<style scoped lang="less">
.root {
  width: 100%;
  height: 100vh;
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
    height: 94vh;
  }
}


.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

//.el-menu {
//  width: 200px;
//}

</style>