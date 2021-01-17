export const state = () => ({
  movies: [],
  movie: {},
  page: 0,
  total_pages: 1,
  total_results: 0,
  errors: {
    status_code: 200,
    status_message: null
  },
  filters: {
    endpoint: '/popular'
  },
  selected: '/popular',
  loading: false
})

export const mutations = {
  movies: (state, payload) => {
    state.movies = payload
  },
  movie: (state, payload) => {
    state.movie = payload
  },
  page: (state, payload) => {
    state.page = payload
  },
  total_pages: (state, payload) => {
    state.total_pages = payload
  },
  total_results: (state, payload) => {
    state.total_results = payload
  },
  errors: (state, payload) => {
    state.errors = payload
  },
  filters: (state, payload) => {
    state.filters = payload
  },
  selected: (state, payload) => {
    state.selected = payload
  },
  loading: (state, payload) => {
    state.loading = payload
  }
}

export const actions = {
  getMovies ({ commit, state }) {
    if (state.page >= state.total_pages) {
      return
    }
    commit('loading', true)
    commit('page', state.page + 1)
    this.$axios.get('/movie' + state.filters.endpoint, {
      params: {
        language: 'pt-BR',
        page: state.page
      }
    })
      .then((res) => {
        commit('movies', state.movies.concat(res.data.results))
        commit('page', res.data.page)
        commit('total_pages', res.data.total_pages)
        commit('total_results', res.data.total_results)
      })
      .catch((err) => {
        commit('errors', {
          status_code: err.response.data.status_code,
          status_message: err.response.data.status_message
        })
      })
      .finally(() => {
        commit('loading', false)
      })
  },
  resetPagination ({ commit }) {
    commit('movies', [])
    commit('page', 0)
    commit('total_pages', 1)
    commit('total_results', 0)
    commit('errors', {
      status_code: 200,
      status_message: null
    })
  },
  getMovie ({ commit }, movieId) {
    commit('loading', true)
    this.$axios.get('/movie/' + movieId, {
      params: {
        language: 'pt-BR'
      }
    })
      .then((res) => {
        commit('movie', res.data)
      })
      .catch((err) => {
        commit('errors', {
          status_code: err.response.data.status_code,
          status_message: err.response.data.status_message
        })
      })
      .finally(() => {
        commit('loading', false)
      })
  }
}

export const getters = {
  movies: state => state.movies,
  movie: state => state.movie,
  page: state => state.page,
  total_pages: state => state.total_pages,
  total_results: state => state.total_results,
  errors: state => state.errors,
  filters: state => state.filters,
  selected: state => state.selected,
  loading: state => state.loading
}
