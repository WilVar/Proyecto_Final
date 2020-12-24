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
import Categories from '../api/Categories.js';

export default {
  name: "Categorias",
  components: { VueBootstrap4Table },
  methods: {
            create(payload) {
                this.$router.push("/formulario");
            },
            edit(id_categoria){
                alert("editar "+id_categoria);
            },
            inactivate(id_categria){
                alert("inactivar "+id_categoria);
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
            placeholder: "Ingrese nombre de la categoria",
          },
          sort: false,
        },
        {
          label: "Descripcion",
          name: "descripcion",
          filter: {
            type: "simple",
            placeholder: "Escriba la descripcion",
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
          btn_text: "Nueva Categoria",
          event_name: "on-create",
          class: "btn btn-success color_text",
          event_payload: {
            msg: "Nueva Categoria",
          },
        },
      ],
      config: {
        checkbox_rows: false,
        rows_selectable: false,
        card_title: "Lista de Categorias",
      },
    };
  },
  created(){
      var cat = [];
      
      Categories.list().then((response) => {
          const dataApi = response.data;
          dataApi.map( (categoria) => {

              let cateAux = {
                  id: categoria.id,
                  name: categoria.nombre,
                  descripcion: categoria.descripcion,
              }

              cat.push(cateAux);
          });

          this.rows = cat;
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