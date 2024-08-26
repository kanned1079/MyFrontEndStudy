import {computed, reactive, ref} from 'vue'
import {defineStore} from "pinia";
import {darkTheme} from 'naive-ui';
// defineStore中的参数<'文件名'>, {<配置对象>}
const useThemeStore = defineStore('theme', () => {
    // 是否启用深色模式
    const enableDarkMode = ref(false)
    const selectedTheme = ref('darkBlueDay')

    // 主题配置 深蓝色 0
    const darkBlueDay = reactive({
        topLogoBgColor: '#324f85',
        topLogoTextColor: '#bfc8d9',
        topHeaderBgColor: '#385894',
        topHeaderTextColor: '#fff',
        contentBgColor: '#eff2f7',
        selfOverride: {
            common: {
                primaryColor: '#385894',
            },
            card: {

            }
        }
    })
    // 主题配置 奶绿色 1
    const milkGreenDay = reactive({
        topLogoBgColor: '#008784',
        topLogoTextColor: '#bfe1e0',
        topHeaderBgColor: '#009693',
        topHeaderTextColor: '#fff',
        contentBgColor: '#eff2f7',
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

    const getMainTheme = computed(() => (enableDarkMode.value? darkTheme : null))

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
        getMainTheme
    }

})

export default useThemeStore;