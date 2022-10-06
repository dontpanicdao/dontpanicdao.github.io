<template>
  <div>
    <div class="main-content ">
      <div class="min-vh-100"
        style="
          background: linear-gradient(180deg, rgba(40, 40, 110, 1) 0%, rgba(105, 66, 93, 1) 44%, rgba(232, 81, 34, 1) 100%);">
        <Header />
        <div class="d-flex pt-2 pt-md-5 " rel="preload">
          <div class="container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-7 col-md-8 col-sm-10">
                <div class="card bg-secondary shadow border-0">
                  <div class="card-header text-center">
                    <h2>Stark Util &nbsp;&nbsp;<i class="fas fa-random"></i></h2>
                  </div>
                  <div class="card-body px-lg-5">
                    <Converter v-if="utilPane == 1" />
                    <StarkNet v-if="utilPane == 2" />
                    <EC v-if="utilPane == 3" />
                  </div>
                  <div class="card-footer footy">
                    <div v-if="utilPane !== 1" class="btn btn-sm btn-success float-left" @click="moveLeft">
                      <i class="fas fa-angle-left"></i>
                    </div>
                    <div v-if="utilPane !== 3" class="btn btn-sm btn-success float-right" @click="moveRight">
                      <i class="fas fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Converter from "@/views/components/Converter.vue";
import StarkNet from "@/views/components/StarkNet.vue";
import EC from "@/views/components/EC.vue";
import Header from '@/views/components/Header.vue';

export default {
  components: {
    Header,
    Converter,
    StarkNet,
    EC,
  },
  computed: {
    ...mapGetters("util", ["utilPane"]),
  },
  methods: {
    moveRight() {
      const old = this.$store.getters["util/utilPane"];
      this.$store.commit("util/setUtilPane", old + 1);
    },
    moveLeft() {
      const old = this.$store.getters["util/utilPane"];
      this.$store.commit("util/setUtilPane", old - 1);
    },
  },
};
</script>
<style src="@vueform/toggle/themes/default.css">

</style>
