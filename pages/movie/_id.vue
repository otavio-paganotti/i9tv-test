<template>
  <div class="content_wrapper">
    <div class="content">
      <div class="page_wrapper">
        <b-alert v-if="errors.status_code !== 200" show variant="danger">
          <strong>{{ errors.status_code }}</strong> - {{ errors.status_message }}
        </b-alert>
        <pre v-else>
          {{ movie }}
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('movies', ['movie', 'errors']),
    movieId () {
      return this.$route.params.id
    }
  },
  watch: {
    movieId (value) {
      this.getMovie(value)
    }
  },
  mounted () {
    this.getMovie(this.movieId)
  },
  methods: {
    ...mapActions('movies', ['getMovie'])
  }
}
</script>
