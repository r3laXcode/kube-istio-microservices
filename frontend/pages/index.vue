<template>
  <section class="container" >
    <div class="text-center" style="margin-top:2em;">
      <logo/>
      <h1 class="title">
        APP NUXT
      </h1>
      <h2 class="subtitle">
        Frontend Microservices
      </h2>
      <div class="text-center">
        <h2 class="subtitle">
          V1
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped>


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  padding-bottom:0
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
