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
          <div class="other-login">
            <div class="circle-container">
              <p class="circled-text">Or</p>
            </div>
            <div class="link-container">
              <div class="google">
                <a class="social-link" href="http://localhost:3000/api/auth/google"><i class="google-logo"></i>Login with Google</a>
              </div>
              <div class="fb">
                <a class="social-link" href="http://localhost:3000/api/auth/facebook"><i class="fb-logo"></i>Login with Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { LOGIN } from "@/store/actions.type";

export default {
  name: "LoginVue",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
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
.fb {
  background-color: #3b5998;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
}

.fb-logo {
  background-image: url(../../public/icons/facebook-brands.svg);
  background-repeat: no-repeat;
  width: 1.2em;
  height: 1.2em;
  display: inline-block;
  filter: invert(100%);
  margin: 0px 5px;
}

.google {
  background-color: #dd4b39;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
  display: inline-block;
}

.google-logo {
  background-image: url(../../public/icons/google-brands.svg);
  background-repeat: no-repeat;
  width: 1.2em;
  height: 1.2em;
  display: inline-block;
  filter: invert(100%);
  margin-right: 10px;
}

.social-link {
  text-decoration: none;
  color: white;
  font-size: large;
  font-weight: 500;
  vertical-align: middle;
}

.link-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
}

.circled-text {
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 7px 1px;
  width: 40px;
  height: 40px;
  margin-bottom: 0px;
}

.circle-container {
  margin: auto;
  display: inline-block;
  margin-top: 10px;
}

.other-login {
  display: inline-block;
}
</style>
