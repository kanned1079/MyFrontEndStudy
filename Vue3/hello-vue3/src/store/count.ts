import {defineStore} from "pinia";
const useCountStore = defineStore('count', {
    state: () => {
        return {
            sum: 6,
            school: 'nnu',
            address: '江苏省常州市'
        }
    }
})

export default useCountStore;