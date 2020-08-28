<template>
  <div class="home-page">
    <div class="container">
      <h1 class="logo-font">Home</h1>
      <p>This is the Home page</p>
      <button class="btn btn-lg btn-primary pull-xs-right" @click="getProfile">
      Get Profile
      </button>
    </div>
    <div v-if="user">
      {{user.firstName}} {{user.lastName}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import {FETCH_USER} from "../store/actions.type";

export default {
  name: "HomeVue",
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods:{
    getProfile() {
      this.$store
        .dispatch(FETCH_USER);
    }
  }
};
</script>
<style scoped>
.home-page {
  padding: 3rem 0;
}
</style>
