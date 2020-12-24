<template>
  <div>
    <form @submit.prevent="register">
      <p class="h4 text-center mb-4">Formulario Categoria</p>
      <label for="defaultFormRegisterNameEx" class="grey-text">Nombre</label>
      <input
        type="text"
        id="defaultFormRegisterNameEx"
        class="form-control"
        v-model="nombre"
        required
      />
      <br />
      <label for="defaultFormRegisterEmailEx" class="grey-text">Descripcion</label>
      <input
        type="text"
        id="defaultFormRegisterEmailEx"
        class="form-control"
        v-model="descripcion"
        required
      />
      <br />
      <label for="defaultFormRegisterPasswordEx" class="grey-text"
        >URL</label
      >
      <input
        type="text"
        id="defaultFormRegisterPasswordEx"
        class="form-control"
        v-model="url"
        required
      />
      <div class="text-center mt-4">
        <button class="btn btn-primary" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
import Categories from "../api/Categories.js";

export default {
  name: "Formulario",
  data() {
    return {
      nombre: "",
      descripcion: "",
      url: "",
      estado: 1,
    };
  },

  methods: {
    register: function () {
      const form = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        url: this.url,
        estado: this.estado,
      };
      console.log("register");

      Categories.add(form)
        .then((response) => {
          console.log("response", response.data);
          this.$router.push('/admincategorias')

        })
        .catch((error) => {
          console.log("error", error);
        });
    },

  },
};
</script>