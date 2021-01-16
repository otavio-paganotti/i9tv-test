<template>
  <div class>
    <div class="filter_panel card">
      <div class="name" @click="showOrder=!showOrder">
        <h2>Ordenar</h2>
        <span class="glyphicons_v2 chevron-right" />
      </div>
      <div v-show="showOrder" class="filter">
        <h3>Ordenar Resultados Por</h3>
        <span
          title=""
          class="k-widget k-dropdown kendo_dropdown full_width font_size_1"
        >
          <b-form-select v-model="selected" :options="options" />
        </span>
      </div>
    </div>
    <div class="filter_panel card">
      <div class="name" @click="showFilters=!showFilters">
        <h2>Filtros</h2>
        <span class="glyphicons_v2 chevron-right" />
      </div>
      <div v-show="showFilters" class="filter">
        <h3>Mostre-me</h3>
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="radioSelected"
            :options="radioOptions"
            :aria-describedby="ariaDescribedby"
            name="plain-stacked"
            plain
            stacked
            size="lg"
            button-variant="primary"
          />
        </b-form-group>
      </div>
      <div v-show="showFilters" class="filter">
        <b-alert show variant="secondary">
          Filtros indisponíveis via API
        </b-alert>
      </div>
    </div>
    <div class="filter_panel card">
      <div class="name" @click="showWhereWatch=!showWhereWatch">
        <h2>Onde Assistir</h2>
        <span class="glyphicons_v2 chevron-right" />
      </div>
      <div v-show="showWhereWatch" class="filter">
        <h3>Meus Serviços</h3>
        <b-form-checkbox
          id="checkbox-1"
          v-model="radioSelected"
          disabled
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Restringir pesquisa para os serviços que assino?
        </b-form-checkbox>
      </div>
      <div v-show="showWhereWatch" class="filter">
        <b-alert show variant="secondary">
          Filtros indisponíveis via API
        </b-alert>
      </div>
    </div>
    <div class="filter_panel" style="border-radius: 50px; background-color: #ECECEC">
      <b-button block disabled>
        Pesquisar
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    showOrder: true,
    showFilters: false,
    showWhereWatch: false,
    radioSelected: 'A',
    selected: '/popular',
    options: [
      { value: '/popular', text: 'Popularidade' },
      // { value: '/latest', text: 'Lançamento' },
      { value: '/now_playing', text: 'Em Cartaz' },
      { value: '/top_rated', text: 'Melhor Avaliados' },
      { value: '/upcoming', text: 'Em Breve' }
    ],
    radioOptions: [
      { value: 'A', text: 'Todos', disabled: false },
      { value: 'B', text: 'Filmes que Não Assisti', disabled: true },
      { value: 'C', text: 'Filmes que Já Assisti', disabled: true }
    ]
  }),
  computed: {
    ...mapGetters('movies', ['filters']),
    endpoint: {
      get () {
        return this.$store.getters['movies/filters'].endpoint
      },
      set (value) {
        this.$store.commit('movies/filters', { ...this.filters, endpoint: value })
      }
    }
  },
  watch: {
    selected (value) {
      this.endpoint = value
      this.resetPagination()
      this.getMovies()
    }
  },
  methods: {
    ...mapActions('movies', ['getMovies', 'resetPagination'])
  }
}
</script>
