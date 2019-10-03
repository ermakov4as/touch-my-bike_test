import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import Notifications from 'vue-notification'
import VeeValidate from 'vee-validate'

import VueGlobalVar from 'vue-global-var'
import VueWindowSize from 'vue-window-size'

import { DESK_WIDTH_FROM, DEV_MODE } from '@/config'

import { Display, User, Collections, Filter, Shop, Garage } from '@/models'

Vue.use(VueWindowSize)

Vue.use(require('vue-faker'))

Vue.use(Notifications)
Vue.use(VeeValidate)
Vue.use(VueGlobalVar, {
  globals: {
    display: Display,
    user: User,
    collections: Collections,
    filter: Filter,
    shop: Shop,
    garage: Garage,
    overlay: {
      state: false,
      _callback: null,
      show(callback) {
        this._callback = callback
        this.state = true
      },
      hide() {
        this._callback()
        this.state = false
      }
    },
    $sm: 318,
    $md: 768,
    $xl: 1440,
    $ntf: {
      success: msg => {
        Vue.notify({
          group: 'main',
          text: msg
        })
      },
      error: msg => {
        Vue.notify({
          group: 'main',
          text: msg,
          type: 'error'
        })
      }
    },
    $deskWidthFrom: DESK_WIDTH_FROM,
    $devMode: DEV_MODE
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
