<template>
  <div class="container col-sm-4">
    <form class="form" v-on:submit.prevent="onSubmit">
      <input
        type="text"
        :class=" {error:$v.name.$error} "
        v-model.trim="first_name"
        @input="$v.first_name.$touch()"
        class="form-control"
        placeholder="Enter First Name"
      >
      <!-- error message-->
      <div v-if="$v.name.$dirty">
        <span class="text-warning" v-if="!$v.name.required">*Name required</span>
      </div>
      <br>
      <input
        type="email"
        :class=" {error:$v.email.$error} "
        @input="$v.email.$touch()"
        v-model.trim="email"
        class="form-control"
        placeholder="Enter Email"
      >
      <!-- error message-->
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
        :class=" {error:$v.password.$error} "
        v-model.trim="password"
        @input="$v.password.$touch()"
        class="form-control"
        placeholder="Enter Password error"
      >
      <!-- error message-->
      <div v-if="$v.password.$dirty">
        <span class="text-warning" v-if="!$v.password.required">*Password required</span>
        <span class="text-danger" v-if="!$v.password.minLength">Password must greater then 7</span>
      </div>
      <br>

      <input
        type="password"
        :class=" {error:$v.repeat_password.$error} "
        v-model.trim="repeat_password"
        @input="$v.repeat_password.$touch()"
        class="form-control"
        placeholder="Enter Password error"
      >
      <!-- error message-->
      <div v-if="$v.repeat_password.$dirty">
        <span class="text-danger" v-if="!$v.repeat_password.sameAsPassword">Password must be same</span>
        <span class="text-warning" v-if="!$v.repeat_password.required">*Password required</span>
      </div>
      <button
        type="submit"
        :disabled="$v.$invalid"
        class="btn btn-outline-success my-4 float-right"
      >SUBMIT</button>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      name: "",
      password: "",
      repeat_password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    password: {
      required,
      minLength: minLength(7)
    },
    repeat_password: {
      required,
      minLength: minLength(7),
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    onSubmit() {
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          name: this.first_name,
          password: this.password,
          repeat_password: this.repeat_password
        };
        console.log(user);
      }
    }
  }
};
</script>


<style scoped>
button:disabled {
  cursor: not-allowed;
}
</style>
