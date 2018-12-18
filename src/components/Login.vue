<template>
  <div class="container col-sm-5">
    <h3>Sign In</h3>
    <hr>
    <input type="text" placeholder="Mail id" class="form-control">
    <br>
    <input type="password" placeholder="Password" class="form-control">
    <br>
    <button class="btn btn-primary">Login</button>
    <router-link to="/signup">SiginUP</router-link>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

