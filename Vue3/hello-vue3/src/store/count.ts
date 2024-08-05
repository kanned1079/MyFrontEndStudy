import {defineStore} from "pinia";
const useCountStore = defineStore('count', {
    state: () => {
        return {
            sum: 6,
            school: 'nnu'
        }
    }
})

export default useCountStore;