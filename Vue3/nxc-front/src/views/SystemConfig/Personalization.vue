<script setup lang="ts" name="Personalization">
import {defineComponent, onMounted, reactive} from 'vue'
import useThemeStore from '@/stores/useThemeStore'
const themeStore = useThemeStore()

const options = [
  {
    label: '奶绿色',
    value: 'milkGreenDay',
    disabled: false,
  },
  {
    label: '深蓝色',
    value: 'darkBlueDay',
    disabled: false,
  },
  {
    label: '深黑色',
    value: 'Black',
    disabled: true,
  },
]

const themeSettings = reactive({
  aside_theme: true,
  header_theme: false,
  theme_color_selected: '',
  theme_color: {

  },
  background_image: ''
})

onMounted(() => {
  console.log(themeStore.allTheme)
})

</script>

<template>
  <div class="root">
    <n-card hoverable :embedded="true" class="security-panel" title="个性化">
      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">边栏风格</p>
            <p class="shallow">设置侧边栏的颜色。</p>
          </div>
        </span>
        <span class="r-content" style="text-align: right">
          <n-switch size="medium" v-model="themeSettings.aside_theme"></n-switch>
        </span>
      </div>
      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">头部风格</p>
            <p class="shallow">设置顶部的颜色。</p>
          </div>
        </span>
        <span class="r-content" style="text-align: right">
          <n-switch size="medium" v-model="themeSettings.header_theme"></n-switch>
        </span>
      </div>
      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">主题色</p>
            <p class="shallow">设置整个网页的主题色。</p>
          </div>
        </span>
        <span class="r-content">
          <n-select size="large" :options="options" />
        </span>
      </div>
      <div class="item">
        <span class="l-content">
          <div class="describe">
            <p class="title">背景</p>
            <p class="shallow">将会在后台登录页面进行展示。</p>
          </div>
        </span>
        <span class="r-content">
          <n-input size="large" v-model="themeSettings.background_image" placeholder="https://x.com/logo.jpeg"></n-input>
        </span>
      </div>
    </n-card>
  </div>
</template>

<style lang="less" scoped>
.root {
  min-width: 900px;
  padding: 20px;
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
.n-card {
  background-color: v-bind('themeStore.getTheme.globeTheme.cardBgColor');
  border: 0;
}
</style>