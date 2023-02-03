import { createStore, } from 'vuex'
import number from './state/numState.js'

export default createStore({
  modules: {
    number
  }
})
