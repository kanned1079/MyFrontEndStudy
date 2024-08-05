import {defineStore} from "pinia";
import axios from "axios";
import {nanoid} from "nanoid";
const useLoveTalk = defineStore('loveTalk', {
    state() {
        return {
            talkList: [
                {id: '000001', title: '今天你有点怪，哪里怪，怪好看的。'},
                {id: '000002', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
                {id: '000003', title: '心里给你留了一块地，我的死心塌地。'},
            ]
        }
    },
    actions: {
        async getATalk() {
            // 发送请求 连续解构赋值和重命名
            let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            // 包装对象
            let obj = {
                id: nanoid(),
                title
            };
            // talkList.unshift(obj)
            this.talkList.unshift(obj)
        }
    }
})

export default useLoveTalk