<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/">Logo</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template v-slot:default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav v-if="!isAuthenticated" class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/register">Register</b-nav-item>
        <b-nav-item to="/login">Login</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav v-else class="ml-auto">
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheHeader",
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
