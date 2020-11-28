<template>
  <div>
    <v-row>
      <v-col cols="9">
        <Lines
          ref="line"
          style="position:relative;"
          :options="options"
          :chartData="chartData"
          :loading="loading"
          class=""
        />
      </v-col>
      <v-col cols="3">
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
import Lines from '@/components/charts/Lines.vue'

export default {
  components: {
    Lines
  },
  props: {
    method: Number
  },
  data () {
    return {
      apiData: [],
      loading: false,
      options: {
        aspectRatio: 16 / 9,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              offset: false
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
            backgroundColor: 'transparent',
            borderColor: this.$vuetify.theme.themes.light.secondary,
            pointBorderColor: 'transparent',
            data: this.apiData.map((el) => el.value),
            type: 'line'
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
