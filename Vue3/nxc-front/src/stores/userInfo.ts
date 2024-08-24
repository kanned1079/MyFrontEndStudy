import {defineStore} from "pinia";
// defineStore中的参数<'文件名'>, {<配置对象>}
const useUserInfoStore = defineStore('userinfostore', {
    state: () => {  // state 需要是一个函数 有返回值
        return {
            isAuthed: false,
            thisUser: {
                userId: '000001',
                userName: 'kanna',
                email: 'kanned1079@gmail.com',
                token: 'ewfesrflhweaifuhiesagfesrgfegfesgfvliehsguu',
                isAdmin: true,
            }
        }
    },
    actions: () => {

    }
})

export default useUserInfoStore;