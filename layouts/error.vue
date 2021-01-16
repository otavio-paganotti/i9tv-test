<template>
  <div class="page_wrap">
    <main>
      <section class="inner_content">
        <div class="media discover">
          <div class="column_wrapper">
            <div class="content_wrapper">
              <div class="content">
                <div style="height: 50vh">
                  <h1 v-if="error.statusCode === 404">
                    Página não encontrada/implementada ( {{ $route.path }} )
                  </h1>
                  <h1 v-else>
                    Ocorreu um erro desconhecido
                  </h1>
                  <NuxtLink to="/">
                    Página Inicial
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Array,
      required: true
    }
  },
  layout: 'error' // you can set a custom layout for the error page
}
</script>
