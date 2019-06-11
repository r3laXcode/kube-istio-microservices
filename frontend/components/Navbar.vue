<template>  
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <nuxt-link to="/" tag="a" class="navbar-brand">Home</nuxt-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
          <li class="nav-item">
            <nuxt-link to="servicio-a" tag="a" class="nav-link">Servicio A </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="servicio-b" tag="a" class="nav-link">Servicio B </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="servicio-ext" tag="a" class="nav-link">Servicio Externo </nuxt-link>
          </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div> 
</template>   

<script>  
export default {
    name:'top-navigation',
    mounted(){
        console.log('navigation mounted')
    }
}
</script>   