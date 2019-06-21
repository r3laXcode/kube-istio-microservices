<template>
  <section class="container">
    <div class="row">
      <div class="text-center col-md-12">
        <h3 class="title">
          Servicio B - Interno
        </h3>
        <span >servicio config istio</span>
      </div>
      <div class="col-md-12">
        <p v-if="message"> {{message}} </p>
        <section v-if="serviceb">
          <div class="row" style="padding-top:2em;">
              <template v-for="item in serviceb">
                <div class="col-md-4 box" :key="item.id">
                    <h3>{{item.name}}</h3>
                    <span>{{item.email}}</span>
                </div>
              </template>
          </div>
        </section>
      </div>
    </div>
     <div class="row">
      <div class="text-center col-md-12">
        <h3 class="title">
          Servicio B call Service A
        </h3>
        <span >servicio config istio</span>
      </div>
      <div class="col-md-12">
        <p v-if="message"> {{message}} </p>
        <section v-if="servicea">
          <div class="row" style="padding-top:2em;">
              <template v-for="item in servicea">
                <div class="col-md-4 box" :key="item.id">
                    <h3>{{item.name}}</h3>
                    <span>{{item.email}}</span>
                </div>
              </template>
          </div>
        </section>
      </div>
    </div>
    
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name:'servicio-b',
  mounted() {
    this.loadServiceA();
    this.loadServiceB();
    this.loadApiRoot();
  },
  data() {
    return {
      message:'',
      servicea:[],
      serviceb:[],
    }
  },
  methods:{
    loadServiceA(){
      this.message = 'cargando ...';
      let url = '/api/servicioa';
      axios.get(url).then(res => {
          this.message = '';
          console.log(res)
          this.servicea = res.data
      }).catch(err => {
          console.log(err)
      })

    },
    loadServiceB(){
      this.message = 'cargando ...';
      let url = '/api/serviciob';
      axios.get(url).then(res => {
          this.message = '';
          console.log(res)
          this.serviceb = res.data
      }).catch(err => {
          console.log(err)
      })

    },
    loadApiRoot(){
      let url = '/api';
      axios.get(url).then(res => {
          console.log(res)
      }).catch(err => {
          console.log(err)
      })

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
