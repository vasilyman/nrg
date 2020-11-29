<template>
  <div>
    <v-row>
      <v-col cols="12" sm="8" lg="9">
        <Lines
          ref="line"
          style="position:relative;"
          :options="options"
          :chartData="chartData"
          :loading="loading"
          class=""
        />
      </v-col>
      <v-col cols="12" sm="4" lg="3" class="d-flex flex-column justify-start">
        <div class="title">Показать/скрыть</div>
        <v-switch
          v-model="covid"
          label="COVID"
          hide-details="auto"
        ></v-switch>
        <v-switch
          value="mounth"
          v-model="step"
          hide-details="auto"
          label="Детализация день / месяц"
        ></v-switch>
        <v-checkbox
          v-for="(item, i) in chartData.datasets" :key="i"
          :label="item.label"
          :value="item.name"
          v-model="showedDatasets"
          hide-details="auto"
        ></v-checkbox>
        <v-btn v-if="edit" color="primary" class="mt-4" outlined @click="customize = !customize">
          <v-icon
            left
            dark
          >
            mdi-tune
          </v-icon>
          Изменить
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
      v-model="customize"
      :width="'100%'"
      :fullscreen="$vuetify.breakpoint.smAndDown"
      scrollable
    >
      <Customize :open.sync="customize" />
    </v-dialog>
  </div>
</template>
<script>
import Lines from '@/components/charts/Lines.vue'
import Customize from '@/components/Customize.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Lines,
    Customize
  },
  props: {
    method: Number,
    edit: Boolean
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
      },
      customize: false,
      availableDatasets: {
        electroenergy: 'Энергопотребление'
      },
      showedDatasets: [],
      step: null,
      covid: true
    }
  },
  computed: {
    ...mapState(['filters', 'energy']),
    chartData () {
      return {
        labels: (this.energy || []).map((el) => el.date),
        datasets: [
          {
            label: this.availableDatasets.electroenergy,
            name: 'electroenergy',
            backgroundColor: 'transparent',
            borderColor: this.$vuetify.theme.themes.light.success,
            // pointBorderColor: 'transparent',
            data: (this.energy || []).map((el) => el.value),
            type: 'line',
            showLine: this.showedDatasets.includes('electroenergy')
          },
          {
            label: 'Сегодня',
            backgroundColor: this.$vuetify.theme.themes.light.secondary,
            borderColor: this.$vuetify.theme.themes.light.secondary,
            // pointBorderColor: 'transparent',
            data: (this.energy || []).map((el) => {
              const max = Math.max(...this.energy.map((el) => el.value))
              let val = null
              if (this.$moment(el.date).format('DD-MM-YYYY') === this.$moment().format('DD-MM-YYYY')) val = max
              return val
            }),
            barThickness: 3,
            type: 'bar'
          }
        ]
      }
    }
  },
  watch: {
    'filters.dateStart': {
      handler (val) {
        this.calcStep()
        this.getData()
      }
    },
    'filters.dateEnd': {
      handler (val) {
        this.calcStep()
        this.getData()
      }
    },
    step: {
      handler () {
        this.getData()
      }
    },
    covid: {
      handler () {
        this.getData()
      }
    }
  },
  created () {
    if (this.energy) {
      !this.showedDatasets.includes('electroenergy') && this.showedDatasets.push('electroenergy')
    } else this.getData()
  },
  methods: {
    async getData () {
      let data = []
      const url = `${process.env.VUE_APP_API_SERVER}/api/data/getprediction`
      const params = {
        startDate: this.filters.dateStart,
        endDate: this.filters.dateEnd,
        step: this.step,
        covidEnabled: this.covid
      }
      const res = await this.$axios.get(url, { params })
      console.log(res)

      try {
        data = res.data.x.map((x, i) => ({
          date: x,
          value: res.data.y[i]
        }))
        !this.showedDatasets.includes('electroenergy') && this.showedDatasets.push('electroenergy')
      } catch (error) {
        console.log(error)
      }

      // load dummy data
      // data = [...Array(12)].map((v, i) => ({
      //   date: `01-${(0 + (i + 1).toString()).slice(-2)}-2020`,
      //   value: Math.ceil(Math.random() * 200)
      // }))

      // store data
      this.$store.commit('SET_ENERGY', data)
    },
    calcStep () {
      let step = null
      if (this.filters.dateStart && this.filters.dateEnd) {
        if (Math.abs(this.$moment(this.filters.dateStart).diff(this.$moment(this.filters.dateEnd), 'months')) > 11) {
          step = 'mounth'
        }
      }
      this.step = step
      return step
    }
  }
}
</script>
