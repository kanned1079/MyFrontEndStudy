import {defineStore} from "pinia";

const useCountStore = defineStore('count', {
    state: () => {
        return {
            sum: 6,
            school: 'nnu',
            address: '江苏省常州市'
        }
    },
    // actions中放置的是一个个的方法用来响应组件中的动作
    actions: {
        increment(val: number) {
            console.log('increment被调用了', val, this);    // 这里的this就是state
            if (this.sum < 10)
                this.sum += val;
        }
    }
})

export default useCountStore;