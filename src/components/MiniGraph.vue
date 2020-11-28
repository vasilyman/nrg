<template>
  <div class="pa-3 rounded-lg shadow shadow-primary border-primary bg-white mb-6">
    <div class="d-flex">
      <div class="flex-grow-1">
        <div class="title">Производство</div>
        <div class="caption secondary--text">Последние просмотренные регионы</div>
      </div>
      <v-select
        class="flex-grow-0 secondary--text"
        color="secondary"
        outlined
        dense
        label="Территории"
      ></v-select>
    </div>
    <v-chip-group
      active-class="primary--text"
      column
    >
      <v-chip
        v-for="(v, ii) in Array(3)"
        :key="ii"
        label
        :color="'secondary'"
        close
      >
        Tag {{ ii }}
      </v-chip>
    </v-chip-group>
    <component :is="graphType" :horizontal="horizontal" />
  </div>
</template>
<script>
import BarsChart from '@/components/diagrams/BarsChart.vue'
import DonutPie from '@/components/diagrams/DonutPie.vue'

export default {
  props: {
    type: String,
    dataSet: Object
  },
  components: {
    DonutPie,
    BarsChart
  },
  computed: {
    graphType () {
      let type = 'BarsChart'
      switch (this.type) {
        case 'bars':
        case 'horizontal-bars':
          type = 'BarsChart'
          break
        case 'donut':
          type = 'DonutPie'
          break
        default:
          break
      }
      return type
    },
    horizontal () {
      return this.type === 'horizontal-bars'
    }
  }
}
</script>
