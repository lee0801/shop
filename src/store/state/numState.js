export default {
    namespaced: true,
    //全局状态初始值
    state: {
        count: 1,
    },
    //state的计算属性
    getters: {
        countStatus(state) {
            return state.count > 0
        }
    },
    //更改state数据的唯一方法
    mutations: {
        setCount(state, num) {
            state.count = num
        }
    },
    //可以异步返回promise，返回到mutations修改数据
    actions: {
        async setCountPromise(context, num) {
            return await new Promise(
                resolve => {
                    context.commit('setCount', num)
                    resolve()
                },
                error => {
                    error('wrong')
                }
            )
        }
    },
}