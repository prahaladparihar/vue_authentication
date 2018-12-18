<template>
  <div class="container col-sm-5">
    <h3>Login</h3>
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

<style scoped>
input {
  border: solid 0px;
  border-bottom: #f0f1f1 solid 2px;
  box-shadow: #423c3c6b 0px 2px 0px 2px;
}
</style>
