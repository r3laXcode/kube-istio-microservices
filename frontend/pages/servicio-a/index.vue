<template>
  <section class="container">
    <div class="text-center">
      <h3 class="title">
        Servicio A
      </h3>
    </div>
    <div>
       <p v-if="message"> {{message}} </p>
    </div>
  </section>
</template>

<script>
export default {
  name:'servicio-a',
  mounted() {
    this.loadData();
  },
  data() {
    return {
      message:''
    }
  },
  methods:{
    loadData(){
      this.message = 'cargando ...'
    }
  }
}
</script>

<style>

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 200;
  color: #35495e;
  letter-spacing: 1px;
  padding:1em;
}


</style>
