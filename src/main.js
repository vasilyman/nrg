import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import {
  merge
} from 'lodash'
import moment from 'moment'
import axios from 'axios'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import '@/sass/style.scss'

// project global components imports
import LineDiagram from '@/components/diagrams/LineDiagram.vue'
import FilterGroupSelect from '@/components/FilterGroupSelect.vue'

Vue.config.productionTip = false

const axiosInstance = axios.create({
  // baseURL: 'https://dev.wetterheld.com/home',
  // withCredentials: true,
  // timeout: 1000,
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded',
  //   Accept: 'application/x-www-form-urlencoded',
  // },
})

moment.locale('ru')

// prototype section
Vue.prototype.$lodash = {
  merge
}
Vue.prototype.$axios = axiosInstance
Vue.prototype.$moment = moment

// global components register
Vue.component('LineDiagram', LineDiagram)
Vue.component('FilterGroupSelect', FilterGroupSelect)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
