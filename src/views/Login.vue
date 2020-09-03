<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Login</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'register' }">
              Need an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
          </ul>
          <form @submit.prevent="onSubmit(email, password)">
            <div class="row justify-content-center">
              <fieldset class="form-group col-md-7">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="email"
                  placeholder="Email"
                  autocomplete="username"
                />
              </fieldset>
            </div>
            <div class="row justify-content-center">
              <fieldset class="form-group col-md-7">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="password"
                  placeholder="Password"
                  autocomplete="current-password"
                />
              </fieldset>
            </div>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Login
            </button>
          </form>
          <SocialAuth :text="`Login with`"></SocialAuth>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";
import SocialAuth from "@/components/SocialAuth"

export default {
  name: "LoginVue",
  components: {
    SocialAuth,
  },
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      })
        .then(() => this.$router.push({ name: "profile" }));
    },
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
};
</script>

<style scoped>
.login-page {
  padding: 3rem 0;
  text-align: center;
}
</style>
