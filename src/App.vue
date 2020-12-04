<template>
  <div id="app"> 
    <Navbar/>
    <router-view></router-view>   
  </div>
</template>
<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app{
   font-family: 'Amiri';
   font-size:18px;
}
</style>
