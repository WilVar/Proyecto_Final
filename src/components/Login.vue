<template>
  <div>
    <form @submit.prevent="login">
      <p class="h4 text-center mb-4">Inicio sesión</p>
      <label for="defaultFormRegisterEmailEx" class="grey-text"
        >Email</label
      >
      <input
        type="email"
        id="defaultFormRegisterEmailEx"
        class="form-control"
        v-model="email"
        required
      />
      <br />
      <label for="defaultFormRegisterPasswordEx" class="grey-text"
        >Password</label
      >
      <input
        type="password"
        id="defaultFormRegisterPasswordEx"
        class="form-control"
        v-model="password"
        required
      />
      <div class="text-center mt-4">
        <button class="btn btn-primary" type="submit">Login</button>
      </div>
    </form>
  </div>
</template>
<script >
import User from '../api/User.js';

export default {
  name: "Login",
  data () {
    return{
        email: "",
        password: ""
    }
  },
  methods:{
      login: function () {
          const form = {
              email: this.email,
              password: this.password
          }
          console.log("login");
          
          User.login(form).then( (response) => {
              let token = response.data.tokenReturn.toString();
              localStorage.setItem("auth", response.data.auth);
              localStorage.setItem("user", JSON.stringify(response.data.user));
              
              console.log("response", token);
          }).catch( (error) => {
              console.log("error", error);
          });
          
      }
  }
};
</script>
