<template>
  <vue-bootstrap4-table :rows="rows" :columns="columns" :config="config" :actions="actions" @on-create="create">
      <template slot="id" slot-scope="props">
        <button class="btn btn-warning color_text" @click="edit(props.cell_value)">
            Editar
        </button>
        <button class="btn btn-danger color_text" @click="inactivate(props.cell_value)">
            Eliminar
        </button>
    </template>
  </vue-bootstrap4-table>
</template>
    
<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import User from '../api/User.js';

export default {
  name: "Usuarios",
  components: { VueBootstrap4Table },
  methods: {
            create(payload) {
                this.$router.push("/register");
            },
            edit(id_usuario){
                alert("editar "+id_usuario);
            },
            inactivate(id_usuario){
                alert("inactivar "+id_usuario);
            },
        },
  data() {
    return {
      rows: [],
      columns: [
        {
          label: "Nombre",
          name: "name",
          filter: {
            type: "simple",
            placeholder: "Ingrese el Nombre del usuario",
          },
          sort: false,
        },
        {
          label: "Email",
          name: "email",
          filter: {
            type: "simple",
            placeholder: "Ingrese el Correo del usuario",
          },
          sort: false,
        },
        {
          label: "Rol",
          name: "rol",
          filter: {
            type: "simple",
            placeholder: "Ingrese el Rol del usuario",
          },
          sort: false,
        },
        {
          label: "Acciones",
          name: "id",
        },
      ],
      actions: [
        {
          btn_text: "Nuevo Usuario",
          event_name: "on-create",
          class: "btn btn-success color_text",
          event_payload: {
            msg: "Nuevo Usuario",
          },
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: false,
        card_title: "Listado de Usarios",
      },
    };
  },
  created(){
      var users = [];
      
      User.list().then((response) => {
         
          const dataApi = response.data;
          dataApi.map( (user) => {

              let userAux = {
                  id: user.id,
                  name: user.nombre,
                  email: user.email,
                  rol: user.rol
              }

              users.push(userAux);
          });

          this.rows = users;
      }).catch((error)=>{
          console.log("error",error);
      });
  }
};
</script>

<style >
.color_text{
    color: aliceblue;
}
</style>