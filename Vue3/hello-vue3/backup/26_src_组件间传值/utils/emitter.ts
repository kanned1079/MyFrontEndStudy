// 引入mitt
import mitt from 'mitt'

// 调用mitt() 可以绑定事件 绑定数组
const emitter =  mitt()

// // 绑定事件
// emitter.on('test1', () => {
//     console.log('test1被调用了')
// })
// emitter.on('test2', () => {
//     console.log('test2被调用了')
// })
//
// // 触发事件
// // emitter.emit('test1')
// setInterval(() => {
//     emitter.emit('test1');  // 触发事件
//     emitter.emit('test2');
// }, 1000)
//
// setTimeout(() => {
//     emitter.off('test2')    // 解绑事件
// }, 3000)
//
// setTimeout(() => {
//     emitter.all.clear();    // 解绑所有事件
// }, 5000)

export default emitter