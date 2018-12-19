<template>
  <div class="container col-sm-5">
    <h3>Login</h3>
    <hr>
    <input
      type="text"
      v-model="email"
      :class=" {error:$v.email.$error} "
      @input="$v.email.$touch()"
      v-model.trim="email"
      placeholder="Mail id"
      class="form-control"
    >
    <div v-if="$v.email.$dirty">
      <span
        class="text-danger"
        v-if="!$v.email.email"
      >Please enter valid email address "example@mail.com "</span>
      <span class="text-warning" v-if="!$v.email.required">*Email required</span>
    </div>
    <br>
    <input
      type="password"
      v-model="password"
      :class=" {error:$v.password.$error} "
      @input="$v.password.$touch()"
      v-model.trim="password"
      placeholder="Password"
      class="form-control"
    >
    <div v-if="$v.password.$dirty">
      <span class="text-danger" v-if="!$v.password.required">*Password required</span>
    </div>
    <br>
    <button class="btn btn-primary">Login</button>
    <br>
    <br>

    <router-link to="/signup">SiginUP</router-link>
    <hr>
    <pre> {{$v}} </pre>
  </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>

