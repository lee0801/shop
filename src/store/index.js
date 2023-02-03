import { createStore, } from 'vuex'
import number from './modules/num.js'
import userInfo from './modules/userInfo.js'

export default createStore({
  modules: {
    number,
    userInfo
  }
})
