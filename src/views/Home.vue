<template>
  <div class="secondary lighten-5 fill-height">
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-row>
            <v-col cols="4" v-for="(item, i) in Array(2)" :key="i" >
              <div class="white pa-3 rounded-lg shadow shadow-primary">
                <v-text-field
                  label="Input"
                  outlined
                  dense
                  hide-details="auto"
                  prepend-inner-icon="mdi-magnify"
                  class="border border-primary"
                  persistent-hint
                  :color="i === 0 ? 'primary' : 'success'"
                ></v-text-field>
                <v-chip-group
                  active-class="primary--text"
                  column
                >
                  <v-chip
                    v-for="(v, ii) in Array(5)"
                    :key="ii"
                    label
                    :color="i === 0 ? 'primary' : 'success'"
                  >
                    Tag {{ ii }}
                  </v-chip>
                </v-chip-group>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <LineDiagram class="white pa-3 rounded-lg shadow shadow-primary" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="3">
          <div class="text-h4 font-weight-bold mb-6">
            Сегодня
            <span class="primary--text">31.11.2021</span>
          </div>
          <div v-for="(item, i) in Array(2)" :key="i" class="white pa-3 rounded-lg shadow shadow-primary mb-6">
            <div class="title text-truncate">Возможно веерное отключение эллектри</div>
            <p>Был замечен рост продаж обогревательных элементов. Ожидается повышение нагрузки...</p>
            <div class="d-flex justify-space-between">
              <v-chip label color="white" link class="shadow-primary">
                <v-icon left>
                  mdi-map-marker
                </v-icon>
                Пермь
              </v-chip>
              <v-btn to="#" outlined color="primary">Подробнее</v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
      <div class="text-h4 font-weight-bold mt-6 mb-3">Потребление электроэнергии</div>
      <v-row>
        <v-col></v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LineDiagram from '@/components/diagrams/LineDiagram.vue'

export default {
  components: {
    LineDiagram
  }
}
</script>
