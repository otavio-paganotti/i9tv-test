<template>
  <header>
    <div class="content">
      <div class="sub_media">
        <div class="nav_wrapper">
          <nuxt-link class="logo" to="/">
            <img src="~/assets/img/blue_short.svg" alt="The Movie Database (TMDb)" width="154" height="20">
          </nuxt-link>
          <ul class="dropdown_menu navigation k-widget k-reset k-header k-menu k-menu-horizontal">
            <li v-for="item in menuItems" :key="item.label" class="k-item k-menu-item k-state-default k-first k-state-border-down" @mouseenter="item.showDropdown = true" @mouseleave="item.showDropdown = false">
              <nuxt-link to="/" class="no_click k-link k-menu-link k-state-border-down" :class="{'k-state-active': item.showDropdown}">
                {{ item.label }}
              </nuxt-link>
              <dropdown :show="item.showDropdown" :items="item.dropdown" />
            </li>
          </ul>
        </div>
        <div class="flex">
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
        </div>
      </div>
    </div>
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
