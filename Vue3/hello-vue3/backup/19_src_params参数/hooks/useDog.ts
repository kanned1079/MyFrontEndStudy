import {reactive, onMounted} from "vue";
import axios from "axios";

export default () => {
    // 数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_12248.jpg'
    ])
    // 方法
    let getDog = async () => {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            console.log(result)
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }
    // 钩子
    onMounted(() => {
        getDog()
    })
    // 向外部提供东西
    return {dogList, getDog}
}