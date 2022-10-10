<template>
  <div id="app">
    <div class="main-content ">
      <div class="min-vh-100"
        style="
          background: linear-gradient(180deg, rgba(40, 40, 110, 1) 0%, rgba(105, 66, 93, 1) 44%, rgba(232, 81, 34, 1) 100%);">
        <Header />
        <div class="d-flex pt-1 pt-md-4 container-fluid" rel="preload">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-8 col-md-11 col-sm-12">
                <router-view> </router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
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
