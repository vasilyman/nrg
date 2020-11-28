<template>
  <v-app>
    <AppBar :drawer.sync="drawer" />
    <Drawer :drawer.sync="drawer" />
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>
<script>
import Drawer from '@/components/Drawer.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  components: {
    Drawer,
    AppBar
  },
  data () {
    return {
      drawer: false /* this.$vuetify.breakpoint.smAndUp */
    }
  }
}
</script>
