import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import ru from 'vuetify/es5/locale/ru'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#5C7AFF',
        secondary: '#59D2FE',
        accent: '#82B1FF',
        error: '#FF5271',
        info: '#2196F3',
        success: '#73FBD3',
        warning: '#FFCA84'
      }
    }
  },
  lang: {
    locales: { ru },
    current: 'ru'
  }
})
