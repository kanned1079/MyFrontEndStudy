import {defineStore} from "pinia";
import {ref, reactive, computed} from "vue"
const useUserInfoStore = defineStore('userInfoS',() => {
    let isAuthed = ref<boolean>(false)
    let thisUser = reactive({
        id: 0,
        inviteUserId: 0,
        name: '',
        email: '',
        isAdmin: false,
        isStaff: false,
        balance: 0.00,
        lastLogin: '',
        lastLoginIp: '0.0.0.0',
        token: 'ewfesrflhweaifuhiesagfesrgfegfesgfvliehsguu',
    })

    // let getAuthed = computed(() => thisUser)

    return {
        isAuthed,
        thisUser
    }

})

export default useUserInfoStore;