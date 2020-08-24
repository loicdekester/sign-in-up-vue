<template>
  <footer class="border-footer text-muted">
    <div class="container" >
      <div class="row justify-content-left" >
        <div class="text-left col-md-4 col-auto" >
          <h5 class="bd-text-purple-bright mb-1" >Index</h5> 
          <div>
            <b-nav vertical>
              <b-nav-item to="/">Home</b-nav-item>
              <b-nav-item to="/register">Register</b-nav-item>
              <b-nav-item to="/login">Login</b-nav-item>
            </b-nav>
          </div>
        </div>
      </div> 
      <hr > 
      <p class="mb-2" >
      Proof of concept SPA authentification
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style scoped>
.border-footer {
  padding: 2rem 0;
  text-align: center;
  background-color: #eee;
  border-top: 3px solid #dee2e6;
}
.nav-link {
  padding: 0.2rem 0.5rem;
}
</style>
