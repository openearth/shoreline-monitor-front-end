import Vue from 'vue'
import Vuex from 'vuex'
import preferences from './preferences'
import theme from './preferences/theme.js'
import map from './map'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    map,
    preferences,
    theme
  }
})
