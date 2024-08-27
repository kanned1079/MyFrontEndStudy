import {defineStore} from "pinia";
const useUserInfoStore = defineStore('userInfoS', {
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