import {computed, reactive, ref} from 'vue'
import {defineStore} from "pinia";
import {darkTheme} from 'naive-ui';
const useThemeStore = defineStore('theme', () => {
    // 是否启用深色模式
    const enableDarkMode = ref(false)
    const selectedTheme = ref('darkBlueDay')

    // saveTheme 保存到浏览器localStorage深色配置
    const saveEnableDarkMode = () => localStorage.setItem('themeCode', JSON.stringify({code: enableDarkMode.value}));

    // 读取浏览器缓存中的配置 处理主题设置
    const readEnableDarkMode = () => {
        !localStorage.getItem('themeCode')?saveEnableDarkMode():enableDarkMode.value = JSON.parse(localStorage.getItem('themeCode') as string).code as boolean;
    }

    // 通用部分 计算属性
    const globeTheme = reactive({
        asideBgColor: computed(() => enableDarkMode.value ? '#282929': '#fff'),
        contentBgColor: computed(() => enableDarkMode.value?'#2d2f2f':'#eff2f7'),
        cardBgColor: computed(() => enableDarkMode.value?'#282929':'#fff'),
    })

    // 主题配置 深蓝色
    const darkBlueDay = reactive({
        topLogoBgColor: '#324f85',
        topLogoTextColor: '#bfc8d9',
        topHeaderBgColor: '#385894',
        topHeaderTextColor: '#fff',
        globeTheme,
        selfOverride: {
            common: {
                primaryColor: '#385894',
            },
            Button: {
                textColorPrimary: '#fff',
                textColorHoverPrimary: '#fff',
                textColorPressedPrimary: '#fff',
                textColorFocusPrimary: '#fff',
                textColorDisabledPrimary: '#fff'
            },
            card: {

            }
        }
    })

    // 主题配置 奶绿色
    const milkGreenDay = reactive({
        topLogoBgColor: '#008784',
        topLogoTextColor: '#bfe1e0',
        topHeaderBgColor: '#009693',
        topHeaderTextColor: '#fff',
        globeTheme,
        selfOverride: {
            common: {
                primaryColor: '#009693',
            }
        }
    })

    const allTheme = reactive({
        darkBlueDay,
        milkGreenDay
    })

    // getMainTheme 获取默认的主题
    const getMainTheme = computed(() => (enableDarkMode.value? darkTheme : null))

    // getTheme 这个是覆盖的主题
    const getTheme = computed(() => {
        switch (selectedTheme.value) {
            case 'darkBlueDay': {
                return darkBlueDay;
            }
            case 'milkGreenDay': {
                return milkGreenDay;
            }
            default: {
                return darkBlueDay;
                }
        }
    })

    return {
        enableDarkMode,
        darkBlueDay,
        milkGreenDay,
        allTheme,
        getTheme,
        getMainTheme,
        readEnableDarkMode,
        saveEnableDarkMode,
    }

})

export default useThemeStore;