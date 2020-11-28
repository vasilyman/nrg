<template>
  <div
    class="pa-3 rounded-lg shadow-primary border-primary bg-white"
    :class="{[`border-${color}`]: true}"
  >
    <v-select
      :items="items"
      :label="name"
      multiple
      v-model="selected"
      return-object
      item-text="title"
      outlined
      dense
      hide-details="auto"
      prepend-inner-icon="mdi-magnify"
      persistent-hint
    ></v-select>
    <v-chip-group
      column
    >
      <v-chip
        v-for="(v, ii) in selected"
        :key="ii"
        label
        close
        :color="color"
      >
        {{ v.title }}
      </v-chip>
    </v-chip-group>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    value: Array,
    items: Array,
    color: String
  },
  computed: {
    selected: {
      set (val) {
        this.$emit('input', val)
      },
      get () {
        return this.value
      }
    }
  }
}
</script>
