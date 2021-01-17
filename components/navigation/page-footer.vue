<template>
  <footer class="single_column">
    <nav class="container" style="padding-top: 80px; paddig-bottom: 80px">
      <div class="join">
        <img src="~/assets/img/blue_square_2.svg" alt="The Movie Database (TMDb)" width="130" height="94">
        <nuxt-link class="rounded" to="/signup">
          Junte-se a Comunidade
        </nuxt-link>
      </div>
      <div>
        <h3>O básico</h3>
        <ul>
          <li>
            <nuxt-link to="/about">
              Sobre o TMDb
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about/staying-in-touch">
              Contate-nos
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/talk">
              Suporte
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/documentation/api">
              API
            </nuxt-link>
          </li>
          <li>
            <a href="https://status.themoviedb.org/" target="_blank" rel="noopener">
              Status do Sistema
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Envolva-se</h3>
        <ul>
          <li>
            <nuxt-link to="/bible">
              <span class="glyphicons glyphicons-asterisk" />
              Bíblia do Colaborador
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/apps">
              Aplicativos de terceiros
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/movie/new">
              Adicionar um novo Filme
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/tv/new">
              Adicionar uma nova Série
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Comunidade</h3>
        <ul>
          <li>
            <nuxt-link to="/documentation/community/guidelines">
              Diretrizes
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/discuss">
              Discussões
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/leaderboard">
              Placar de colaboradores
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="https://twitter.com/themoviedb" target="_blank" rel="noopener">
              Twitter
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Legalidade</h3>
        <ul>
          <li>
            <nuxt-link to="/documentation/website/terms-of-use">
              Termos de uso
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/documentation/api/terms-of-use">
              Termos de Uso da API
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/privacy-policy">
              Política de privacidade
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </footer>
</template>
