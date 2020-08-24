<template>
  <div class="home-page">
    <div class="container">
      <h1 class="logo-font">Home</h1>
      <p>This is the Home page</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeVue",
  components: {
  },
  mounted() {
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  }
};
</script>
<style scoped>
.home-page {
  padding: 3rem 0;
}
</style>
