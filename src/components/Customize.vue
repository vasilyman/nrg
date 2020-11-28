<template>
  <div class="pa-3 rounded-lg shadow shadow-primary border-primary bg-white fill-height">
    <v-row>
      <v-col cols="12" sm="auto">
        <v-btn link text color="primary" @click="$emit('update:open', false)">
          <v-icon left>mdi-arrow-left</v-icon>
          Назад
        </v-btn>
      </v-col>
      <v-col>
        <div class="pa-3 rounded-lg shadow shadow-primary border-primary">
          <v-row>
            <v-col cols="12" lg="auto">
              <v-menu
                offset-y
                :return-value.sync="stat"
                ref="statMenu"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    class="shadow-primary"
                    outlined
                  >
                    {{ stat.title }}
                    <v-icon right>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in availableStats"
                    :key="index"
                    @click="$refs.statMenu.save(item)"
                    :disabled="item.disabled"
                  >
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-col>
            <v-col cols="12" md="auto">
              <div class="subtitle">Всего за период:</div>
              <div>
                <span class="text-h3">7 577 412.40</span> <span>млн.Квт*час</span>
              </div>
            </v-col>
            <v-col cols="12" md="auto">
              <div class="subtitle">Изменение за период:</div>
              <div>
                <span class="text-h3">+1.02</span> <span>%</span>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <LineDiagram class="pa-3 rounded-lg shadow shadow-primary border-primary bg-white" />
      </v-col>
      <v-col cols="12" md="4">
        <FilterGroupSelect name="Выбранные показатели" :items="availableFilters" color="primary" v-model="allFilters" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  props: {
    open: Boolean,
    availableFilters: Array
  },
  data () {
    return {
      stat: null,
      availableStats: [
        {
          title: 'Электроэнергия',
          value: 'electroenergy'
        }
      ]
    }
  },
  computed: {
    allFilters: {
      set (val) {
        //
      },
      get () {
        return null
      }
    }
  },
  created () {
    this.stat = this.availableStats[0]
  }
}
</script>
