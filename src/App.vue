<script>
  import Navbar from './components/partials/Navbar.vue';
  export default {
    components:{
      Navbar
    }
  }
</script>

<template>
  <div class="container">
    <Navbar/>
    <RouterView></RouterView>
  </div>
</template>

<style lang="scss" scoped>

</style>