import {defineStore} from "pinia";
import {ref, reactive, computed} from "vue"
// import {useRouter} from "vue-router";

// const router = useRouter()

const useUserInfoStore = defineStore('userInfoS',() => {
    // 数据
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

    // 方法
    // let getAuthed = computed(() => thisUser)
    let setAndSaveAuthStatus = (status: boolean) => {
        isAuthed.value = status
        sessionStorage.setItem('isAuthed', JSON.stringify(status))
    }

    // let logout = () => {
    //     setAndSaveAuthStatus(false)
    //     if (thisUser.isAdmin) {
    //         router.push({path: '/admin/login'})
    //     } else {
    //         router.push({path: '/login'})
    //     }
    // }

    return {
        isAuthed,
        thisUser,
        setAndSaveAuthStatus,
        // logout
    }

})

export default useUserInfoStore;