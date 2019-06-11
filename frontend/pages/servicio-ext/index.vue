<template>
  <section class="container">
    <div class="text-center">
      <h3 class="title">
        Servicio Externo
      </h3>
      <span >{{url}}</span>
    </div>
    <div>
       <p v-if="message"> {{message}} </p>
       <section v-if="data">
         <div class="row" style="padding-top:2em;">
            <template v-for="item in data">
              <div class="col-md-4 box" :key="item.id">
                  <h3>{{item.name}}</h3>
                  <span>{{item.email}}</span>
              </div>
            </template>
         </div>
       </section>
    </div>
  </section>
</template>

<script>
export default {
  name:'servicio-ext',
  mounted() {
    this.loadData();
  },
  data() {
    return {
      message:'',
      url:'https://jsonplaceholder.typicode.com/users',
      data:[]
    }
  },
  methods:{
    async loadData(){
      this.message = 'cargando ...';
      try {
          const response = await this.$axios.$get(this.url);
          console.log(response);
          this.message = '';
          this.data = response;

      } catch(err) {
          console.log(err);
      }

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


.box {
  min-height: 100px;
}


</style>
