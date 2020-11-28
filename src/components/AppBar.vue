<template>
  <v-app-bar
    app
    color="white"
    clipped-left
    class="elevation-primary"
  >
    <v-app-bar-nav-icon @click="$emit('update:drawer', !drawer)"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-btn :to="item.link" v-for="(item, i) in menu" :key="i" class="mr-3"  :text="$route.path !== item.link" :outlined="$route.path === item.link" color="secondary">{{ item.text }}</v-btn>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
<script>
export default {
  props: {
    drawer: Boolean
  },
  data () {
    return {
      menu: [
        {
          text: 'Статистика',
          link: '/'
        },
        {
          text: 'Документы',
          link: '#'
        },
        {
          text: 'Аккаунт',
          link: '#'
        }
      ]
    }
  }
}
</script>
