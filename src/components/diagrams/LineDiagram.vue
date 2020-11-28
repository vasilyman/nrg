<template>
  <div>
    <v-row>
      <v-col cols="12" sm="9">
        <Lines
          ref="line"
          style="position:relative;"
          :options="options"
          :chartData="chartData"
          :loading="loading"
          class=""
        />
      </v-col>
      <v-col cols="12" sm="3" class="d-flex flex-column justify-start">
        <div class="title">Показать/скрыть</div>
        <v-checkbox
          label="Label 1"
        ></v-checkbox>
        <v-btn color="primary" outlined>
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
  </div>
</template>
<script>
import Lines from '@/components/charts/Lines.vue'
import { mapState } from 'vuex'

export default {
  components: {
    Lines
  },
  props: {
    method: Number
  },
  watch: {
    filters: {
      immediate: true,
      deep: true,
      handler (val, old) {
        if (!old || val.dateStart !== old.dateStart || val.dateEnd !== old.dateEnd) {
          this.getData()
        }
      }
    }
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
      step: null
    }
  },
  computed: {
    ...mapState(['filters']),
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
  methods: {
    async getData () {
      const url = `${process.env.VUE_APP_API_SERVER}/api/data/getprediction`
      const params = {
        startDate: this.filters.dateStart,
        endDate: this.filters.dateEnd,
        step: this.step
      }
      const res = await this.$axios.get(url, { params })
      console.log(res)

      // load dummy data
      this.apiData = [...Array(12)].map((v, i) => ({
        date: `01-${(0 + (i + 1).toString()).slice(-2)}-2020`,
        value: Math.ceil(Math.random() * 200)
      }))
    }
  }
}
</script>
