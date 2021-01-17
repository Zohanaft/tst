<template>
  <v-app
    id="portfolio-app"
    light
    data-app
  >
    <header>
      <h1 class="header-title">
        Lorem ipsum dolor sit
      </h1>
    </header>
    <Nuxt />
    <footer class="footer">
      <h2 class="header-title">
        Lorem ipsum dolor sit
      </h2>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  &--title {
    margin-top: 60px;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.12em;
    color: white;
  }
}

.header {

  &-title {
    font-size: 34px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
  }
}

.footer {
  margin-top: auto;
}
</style>
