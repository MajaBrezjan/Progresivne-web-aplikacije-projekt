<template>
  <div id="app">     
    <Navbar/>
    <Index/>
    <AddSubject/>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import Index from './components/Index.vue'
import AddSubject from './components/AddSubject.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Index,
    AddSubject
  }
}
</script>

<style>

</style>
