<template>
  <div class="app main-content min-vh-100">
    <Header />
    <div class="d-flex pt-1 pt-md-4 container-fluid" rel="preload">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-lg-8 col-md-11 col-sm-12">
            <Router />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Router from '@/components/Router.vue';

export default {
  components: {
    Header,
    Router
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-content {
  background: hsl(240, 47%, 29%);
}

h2 {
  margin-bottom: 0px !important;
}
</style>
