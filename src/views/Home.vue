<template>
  <div class="main-bg fill-height">
    <v-container>
      <v-row>
        <v-col cols="12" md="auto">
          <v-menu
            offset-y
            :return-value.sync="filters.oes"
            ref="oesMenu"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                class="shadow-primary"
                :x-large="$vuetify.breakpoint.smAndUp"
              >
                {{ filters.oes && filters.oes.title }}
                <v-icon right>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in availableOes"
                :key="index"
                @click="$refs.oesMenu.save(item)"
                :disabled="!item.status"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-spacer class="d-none d-md-block"></v-spacer>
        <v-col>
          <v-menu
            offset-y
            ref="dateStartMenu"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="$moment(filters.dateStart).format('DD MMM YYYY')"
                label="Начало периода"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                hide-details="auto"
                :dense="$vuetify.breakpoint.smAndDown"
                v-bind="attrs"
                v-on="on"
                class="white shadow-primary"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filters.dateStart"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-menu
            offset-y
            ref="dateEndMenu"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="$moment(filters.dateEnd).format('DD MMM YYYY')"
                label="Конец периода"
                prepend-inner-icon="mdi-calendar"
                readonly
                outlined
                class="white shadow-primary"
                :dense="$vuetify.breakpoint.smAndDown"
                hide-details="auto"
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filters.dateEnd"></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="9">
          <v-row>
            <v-col cols="12" md="4" v-for="(item, i) in Array(2)" :key="i" >
              <FilterGroupSelect name="Отрасли" :items="availableIndustries" color="primary" v-model="filters.industries" />
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <LineDiagram class="pa-3 rounded-lg shadow shadow-primary border-primary bg-white" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3">
          <div class="text-h4 font-weight-bold mb-6">
            Сегодня
            <span class="primary--text">31.11.2021</span>
          </div>
          <div v-for="(item, i) in Array(2)" :key="i" class="pa-3 rounded-lg shadow shadow-primary bg-white mb-6">
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
        <v-col>
          <MiniGraph type="bars" />
        </v-col>
        <v-col>
          <MiniGraph type="bars" />
        </v-col>
        <v-col>
          <MiniGraph type="horizontal-bars" />
        </v-col>
      </v-row>
      <div class="text-h4 font-weight-bold mt-6 mb-3">Производство электроэнергии</div>
      <v-row>
        <v-col>
          <MiniGraph type="bars" />
        </v-col>
        <v-col>
          <MiniGraph type="bars" />
        </v-col>
        <v-col>
          <MiniGraph type="horizontal-bars" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import LineDiagram from '@/components/diagrams/LineDiagram.vue'
import MiniGraph from '@/components/MiniGraph.vue'
import FilterGroupSelect from '@/components/FilterGroupSelect.vue'
import { mapState } from 'vuex'

export default {
  components: {
    LineDiagram,
    MiniGraph,
    FilterGroupSelect
  },
  data () {
    return {
      availableOes: [
        {
          title: 'ОЭС Урала',
          value: 'ural',
          status: true
        },
        {
          title: 'ОЭС Юга',
          value: 'south',
          status: false
        },
        {
          title: 'ОЭС Востока',
          value: 'east',
          status: false
        },
        {
          title: 'ОЭС Центра',
          value: 'center',
          status: false
        }
      ],
      availableIndustries: [
        {
          title: 'Нефтедобыча',
          color: 'green'
        },
        {
          title: 'Металлургия',
          color: 'green'
        }
      ]
    }
  },
  computed: {
    ...mapState([]),
    filters: {
      set (val) {
        this.$store.commit('SET_FILTERS', val)
      },
      get () {
        return this.$store.state.filters
      }
    }
  },
  created () {
    // initial filters
    if (!this.filters.oes?.value) this.$set(this.filters, 'oes', this.availableOes[0])
  },
  methods: {

  }
}
</script>
