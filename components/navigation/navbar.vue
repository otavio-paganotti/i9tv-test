<template>
  <header>
    <b-navbar style="width: 100%;" toggleable="lg" type="dark" class="navbar--color">
      <div class="container">
        <b-navbar-brand to="/">
          <img src="~/assets/img/blue_short.svg" alt="The Movie Database (TMDb)" width="154" height="20">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown v-for="item in menuItems" :key="item.label" right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                {{ item.label }}
              </template>
              <b-dropdown-item v-for="subitem in item.dropdown" :key="subitem.label" :to="subitem.url">
                {{ subitem.label }}
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <ul class="primary">
              <li class="glyph new_buttons" data-role="tooltip">
                <nuxt-link class="new_icon no_click" to="/">
                  <span class="glyphicons_v2 plus white" />
                </nuxt-link>
              </li>
              <li class="translate">
                <div>
                  pt
                </div>
              </li>
              <li>
                <nuxt-link to="/login">
                  Entrar
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/signup">
                  Junte-se ao TMDb
                </nuxt-link>
              </li>
              <li class="glyph search_buttons" data-role="tooltip">
                <nuxt-link class="search" to="/search">
                  <span class="glyphicons_v2 search blue" />
                </nuxt-link>
                <nuxt-link class="close hide" to="/search">
                  <span class="glyphicons_v2 menu-close invert svg" />
                </nuxt-link>
              </li>
            </ul>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </header>
</template>

<script>
export default {
  data: () => ({
    menuItems: [
      {
        label: 'Filmes',
        showDropdown: false,
        dropdown: [
          {
            label: 'Populares',
            url: '/movie'
          },
          {
            label: 'Em cartaz',
            url: '/now-playing'
          },
          {
            label: 'Próximas Estreias',
            url: '/upcoming'
          },
          {
            label: 'Mais bem avaliados',
            url: '/top-rated'
          }
        ]
      },
      {
        label: 'Séries',
        showDropdown: false,
        dropdown: [
          {
            label: 'Populares',
            url: '/tv'
          },
          {
            label: 'Em exibição hoje',
            url: '/tv/airing-today'
          },
          {
            label: 'Na TV',
            url: '/tv/on-the-air'
          },
          {
            label: 'Mais bem avaliadas',
            url: '/tv/top-rated'
          }
        ]
      },
      {
        label: 'Pessoas',
        showDropdown: false,
        dropdown: [
          {
            label: 'Pessoas Populares',
            url: '/person'
          }
        ]
      },
      {
        label: 'Mais',
        showDropdown: false,
        dropdown: [
          {
            label: 'Discussões',
            url: '/discuss'
          },
          {
            label: 'Placar de colaboradores',
            url: '/leaderboard'
          },
          {
            label: 'Suporte',
            url: '/talk'
          },
          {
            label: 'API',
            url: '/documentation/api'
          }
        ]
      }
    ]
  })
}
</script>
