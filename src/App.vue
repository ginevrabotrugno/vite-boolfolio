<script>
  import Header from './components/Header.vue';
  export default {
    components:{
      Header
    }
  }
</script>

<template>
  <Header></Header>
  <main>
    <div class="container">
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    margin-top: 80px;

    .container {
      width: 80%;
      margin: 0 auto;
      text-align: center;
    }
  }
</style>