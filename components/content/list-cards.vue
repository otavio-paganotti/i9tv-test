<template>
  <div class="separate">
    <div class="white_column no_pad">
      <section id="media_results" class="panel results">
        <div class="media_items results">
          <div class="page_wrapper">
            <div v-for="movie in movies" :key="movie.id" class="card style_1">
              <div class="image">
                <div class="wrapper">
                  <nuxt-link :to="'/movie/' + movie.id">
                    <img :src="'https://www.themoviedb.org/t/p/w220_and_h330_face/' + movie.poster_path" :alt="movie.title">
                  </nuxt-link>
                  <div class="options">
                    <a class="no_click" href="#">
                      <div class="glyphicons_v2 circle-more white" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="content">
                <div class="consensus tight">
                  <div class="outer_ring">
                    <div class="user_score_chart" data-track-color="#204529" data-bar-color="#21d07a">
                      <div class="percent">
                        <span class="icon" :class="'icon-r' + movie.vote_average * 10" />
                      </div>
                      <canvas height="34" width="34" />
                    </div>
                  </div>
                </div>
                <h2>
                  <nuxt-link :to="'/movie/' + movie.id">
                    {{ movie.title }}
                  </nuxt-link>
                </h2>
                <p>
                  {{ movie.release_date | formatDate }}
                </p>
              </div>
            </div>
            <div v-if="!loading" class="pagination infinite">
              <b-btn block class="background_color light_blue" style="color: #fff;" size="lg" @click="getMovies()">
                Carregar mais
              </b-btn>
            </div>
          </div>
          <div v-if="loading" class="center mt-4">
            <b-spinner
              variant="dark"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('movies', ['movies', 'page', 'total_pages', 'total_results', 'loading'])
  },
  mounted () {
    this.resetPagination()
    this.getMovies()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapActions('movies', ['getMovies', 'resetPagination']),
    handleScroll () {
      if (this.page > 1) {
        if (window.scrollY === document.body.clientHeight - window.innerHeight) {
          this.getMovies()
        }
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.resetPagination()
    window.removeEventListener('scroll', this.handleScroll)
    next()
  }
}
</script>
