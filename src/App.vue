<template>
  <div id="app">
    <div class="main-content ">
      <div class="min-vh-100"
        style="
          background: linear-gradient(180deg, rgba(40, 40, 110, 1) 0%, rgba(105, 66, 93, 1) 44%, rgba(232, 81, 34, 1) 100%);">
        <Header />
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
import Home from '@/views/Home.vue';
import Header from '@/components/Header.vue';

export default {
  components: {
    Home,
    Header,
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
