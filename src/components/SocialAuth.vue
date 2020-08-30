<template>
  <div>
    <div class="row justify-content-center">
      <p class="circled-text">Or</p>
    </div>
    <div class="row justify-content-center ">
      <div class="col-md-6 google">
        <a class="social-link" href="http://localhost:3000/api/auth/google"><i class="google-logo"></i>{{text}} Google</a>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-md-6 fb">
        <a class=" social-link" href="http://localhost:3000/api/auth/facebook"><i class="fb-logo"></i>{{text}} Facebook</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialAuth",
  props:{
    text: { type: String, required: true },
  }
};
</script>

<style scoped>
.fb {
  background-color: #3b5998;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
}

.fb-logo {
  background-image: url(../../public/icons/facebook-brands.svg);
  background-repeat: no-repeat;
  width: 1.2em;
  height: 1.2em;
  filter: invert(100%);
  margin: 0px 5px;
  display: inline-block;
}

.google {
  background-color: #dd4b39;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  margin: 5px 0;
  opacity: 0.85;
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

.circled-text {
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 7px 1px;
  width: 40px;
  height: 40px;
  margin: 10px;
}
</style>
