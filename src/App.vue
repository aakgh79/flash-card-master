

<template>
  <header>
    <div class="container">
    <header class="d-flex justify-content-center py-3 p-3 mb-2 bg-success-subtle text-emphasis-success">
      <ul class="nav nav-pills">
        <li class="nav-item"><a  class="nav-link " aria-current="page"><router-link to="/">Home</router-link> </a></li>
        <li class="nav-item"><a  class="nav-link "><router-link to="/English-exam">English exam</router-link> </a></li>
        <li class="nav-item"><a  class="nav-link "><router-link to="/Add-Word" >Add Word</router-link> </a></li>
      </ul>
    </header>
  </div>
  </header>

  <Router-view class=" router-view" v-slot="{ Component }"><transition name="page-opacity" made="out-in">
  
  <component :is="Component"/></transition> </Router-view>
</template>

<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
  data(){

  }
}
</script>
<style>
.router-link-exact-active{
background-color: rgb(170, 226, 228);
}

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 600ms ease all;
  
}
.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>