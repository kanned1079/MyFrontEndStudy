import {defineStore} from "pinia";
// defineStore中的参数<'文件名'>, {<配置对象>}
const useSiteInfo = defineStore('siteInfo', {
    state: () => {  // state 需要是一个函数 有返回值
        return {
            siteName: 'Nxc Networks',
        }
    }
})

export default useSiteInfo;