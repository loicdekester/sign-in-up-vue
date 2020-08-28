<template>
  <div class="profile-page">
    <div class="container">
      <h1 class="logo-font">Profile</h1>
      <p>This is the Profile page</p>
      <p>This is the Information we have on you:</p>
      <p>{{user.firstName}} {{user.lastName}}</p>
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
    this.$store
        .dispatch(FETCH_USER);
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.profile-page {
  padding: 3rem 0;
}
</style>
