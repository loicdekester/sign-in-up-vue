<template>
  <div class="profile-page">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
      <h1 class="title">Profile</h1>
      <b-card title="This is the Profile page"
      img-src="../../public/stock-picture.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2">
        <b-card-text>
          This is the Information we have on you:
        </b-card-text>
        <b-card-text>
          Name: {{user.firstName}} {{user.lastName}}
        </b-card-text>
        <b-card-text>
          email: {{user.email}}
        </b-card-text>
      </b-card>
      </div>
      </div>
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

.title {
  text-align: center;
}
</style>
