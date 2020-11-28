<template>
  <div>
    <v-row>
      <v-col cols="12" :sm="horizontal ? 12 : 9">
        <component :is="horizontal ? 'HorBars' : 'Bars'"
          ref="bar"
          style="position:relative;"
          :options="options"
          :chartData="chartData"
          :loading="loading"
          class=""
        />
      </v-col>
      <v-col v-if="!horizontal" cols="12" sm="auto">
        <div class="">
          <div class="title">Filter 1</div>
          <v-checkbox
            label="Label 1"
          ></v-checkbox>
          <v-btn block color="primary" outlined>
            <v-icon
              left
              dark
            >
              mdi-tune
            </v-icon>
            Apply
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Bars from '@/components/charts/Bars.vue'
import HorBars from '@/components/charts/HorBars.vue'

export default {
  components: {
    Bars,
    HorBars
  },
  props: {
    method: Number,
    horizontal: Boolean
  },
  data () {
    return {
      apiData: [],
      loading: false,
      options: {
        aspectRatio: 4 / 3,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    chartData () {
      return {
        labels: this.apiData.map((el) => el.date),
        datasets: [
          {
            label: 'Porteblenie',
            backgroundColor: this.$vuetify.theme.themes.light.secondary,
            borderColor: this.$vuetify.theme.themes.light.secondary,
            data: this.apiData.map((el) => el.value),
            type: this.horizontal ? 'horizontalBar' : 'bar'
          }
        ]
      }
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      // load dummy data
      this.apiData = [...Array(12)].map((v, i) => ({
        date: `01-${(0 + (i + 1).toString()).slice(-2)}-2020`,
        value: Math.ceil(Math.random() * 200)
      }))
    }
  }
}
</script>
