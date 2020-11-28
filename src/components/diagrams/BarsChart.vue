<template>
  <div>
    <Bars
      ref="bars"
      style="position:relative;"
      :options="options"
      :chartData="chartData"
      :loading="loading"
    />
  </div>
</template>
<script>
import Bars from '@/components/charts/Bars.vue'

export default {
  components: {
    Bars,
  },
  props: {
    threshold: [String, Number],
    thresholdUnit: String,
    fromZero: {
      type: Boolean,
      default: false,
    },
    risk_days: [String, Number],
    weatherType: String,
  },
}
</script>
