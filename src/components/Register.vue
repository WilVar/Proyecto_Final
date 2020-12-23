<template>
  <div>
    <form @submit.prevent="register">
      <p class="h4 text-center mb-4">Registrar Usuario</p>
      <label for="defaultFormRegisterNameEx" class="grey-text">Nombre</label>
      <input
        type="text"
        id="defaultFormRegisterNameEx"
        class="form-control"
        v-model="nombre"
        required
      />
      <br />
      <label for="defaultFormRegisterEmailEx" class="grey-text">Email</label>
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
        <button class="btn btn-primary" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import User from "../api/User.js";

export default {
  name: "Register",
  data() {
    return {
      rol: "Cliente",
      nombre: "",
      email: "",
      password: "",
      estado: 1,
    };
  },
  created() {
    this.initialData();
  },
  updated() {
    this.initialData();
  },
  methods: {
    register: function () {
      const form = {
        rol: this.rol,
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        estado: this.estado,
      };
      console.log("register");

      User.register(form)
        .then((response) => {
          console.log("response", response.data);
          if (this.rol == "Empleado") {
            this.$router.push("/usuarios");
          } else {
            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    initialData() {
      let user = localStorage.getItem("user");

      if (user) {
        user = JSON.parse(user);
        if (user.rol == "Administrador") {
          this.rol = "Empleado";
        } else {
          this.rol = "Cliente";
        }
      }
    },
  },
};
</script>