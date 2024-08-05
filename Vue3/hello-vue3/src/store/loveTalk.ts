import {defineStore} from "pinia";
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
})

export default useLoveTalk