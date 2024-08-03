import {onMounted, ref, computed} from "vue";

export default () => {
    // 数据
    let sum = ref(0)
    // 方法
    let add = () => sum.value += 1;
    // 钩子
    onMounted(() => add())
    // 计算属性
    let bigSum = computed(() => sum.value * 10)
    // 向外部提供东西
    return {sum, add, bigSum}
}
