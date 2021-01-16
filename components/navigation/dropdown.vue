<template>
  <div v-show="show" class="k-animation-container box-container-dropdown">
    <ul class="k-group k-menu-group k-popup k-reset k-state-border-up ul-box-container-dropdown">
      <li v-for="item in items" :key="item.url" class="k-item k-menu-item k-state-default k-first">
        <nuxt-link :to="item.url" class="k-link k-menu-link">
          {{ item.label }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
