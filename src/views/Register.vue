<template>
  <div class="register-page">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Register</h1>
          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">
              Have an account?
            </router-link>
          </p>
          <ul v-if="errors" class="error-messages">
            <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="firstName"
                placeholder="First Name"
              />
              <ul v-if="formErrors && formErrors.firstName" class="error-messages">
                <li v-for="(error, k) in formErrors.firstName" :key="k">{{ error }}</li>
              </ul>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="lastName"
                placeholder="Last Name"
              />
              <ul v-if="formErrors && formErrors.lastName" class="error-messages">
                <li v-for="(error, k) in formErrors.lastName" :key="k">{{ error }}</li>
              </ul>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="text"
                v-model="email"
                placeholder="Email"
              />
              <ul v-if="formErrors && formErrors.email" class="error-messages">
                <li v-for="(error, k) in formErrors.email" :key="k">{{ error }}</li>
              </ul>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password1"
                placeholder="Password"
              />
              <ul v-if="formErrors && formErrors.password" class="error-messages">
                <li v-for="(error, k) in formErrors.password" :key="k">{{ error }}</li>
              </ul>
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                v-model="password2"
                placeholder="Password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Register
            </button>
          </form>
          <SocialAuth :text="`Register with`"></SocialAuth>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
import SocialAuth from "@/components/SocialAuth"

export default {
  name: "RegisterVue",
  components:{
    SocialAuth
  },
  data() {
    return {
      formErrors:{
        firstName:[],
        lastName:[],
        email:[],
        password:[]
      },
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: ""
    };
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit() {
      this.formErrors = {
        firstName:[],
        lastName:[],
        email:[],
        password:[]
      };
      if (this.formCheck()) {
        this.$store
        .dispatch(REGISTER, {
            email: this.email.trim().toLowerCase(),
            password: this.password1.trim(),
            firstName: this.firstName.trim(),
            lastName: this.lastName.trim()
        })
        .then(() => this.$router.push({ name: "home" }));
      }   
    },
    formCheck() {
      let response = true;
      if (!this.firstName) {
        response = false;
        this.formErrors.firstName.push("This field is required")
      }
      if (!this.lastName) {
        response = false;
        this.formErrors.lastName.push("This field is required")
      }
      if (!this.email) {
        response = false;
        this.formErrors.email.push("This field is required")
      }
      if (!this.validEmail(this.email)){
        response = false;
        this.formErrors.email.push("This is not a valid email format")
      }
      if (!this.password1 || !this.password2) {
        response = false;
        this.formErrors.password.push("This field is required")
      }
      if (!this.validPassword(this.password1)){
        response = false;
        this.formErrors.password.push("Password must be between 8-20 characters long and have at least one upper and lower case character as well as a number and one of these symbols !@#$%^&*.");
      }
      if(this.password1 !== this.password2) {
        response = false;
        this.formErrors.password.push("Passwords do not match");
      }
      return response;
    },
    validEmail(email) {
      // eslint-disable-next-line
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    },
    validPassword(password) {
      // eslint-disable-next-line
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\?!@#\$%\^&\*]).{8,20}$/;
      return regex.test(password);
    },
  }
};
</script>

<style scoped>
.register-page {
  padding: 3rem 0;
  text-align: center;
}
.error-messages {
  color: red;
  list-style-type: none;
}
</style>
