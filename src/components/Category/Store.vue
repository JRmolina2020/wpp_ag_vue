<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">Registro de Categorias! {{ id }}</div>
    <form
      method="POST"
      @submit.enter.prevent="send()"
      autocomplete="off"
      onKeyPress="if(event.keyCode == 13) event.returnValue = false;"
    >
      <input
        class="form-control form-control-sm mt-3"
        v-model="name"
        ref="name"
        type="text"
        placeholder="Nombre de la Categoria"
        required
      />
      <div class="form-group mt-3">
        <select id="my-select" class="form-control" v-model="status">
          <option :value="true">Activo</option>
          <option :value="false">Inactivo</option>
        </select>
      </div>
      <button
        v-if="id == null"
        type="submit"
        class="btn btn-primary btn-sm mt-3"
      >
        Guardar
      </button>
      <button v-else type="submit" class="btn btn-success btn-sm mt-3">
        Editar
      </button>
    </form>
  </div>
</template>
<script>
import { SaveCategory, UpdateCategory } from "@/graphql/categoryMutation";
export default {
  name: "Store",
  data() {
    return {
      id: null,
      name: "",
      status: true,
    };
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    send() {
      if (this.id == null) {
        this.createCategory(this.name, this.status);
      } else {
        this.update(this.id, this.name, this.status);
      }
    },
    createCategory(name, status) {
      try {
        this.$apollo.mutate({
          mutation: SaveCategory,
          variables: {
            name: name,
            status: status,
          },
        });
        this.$store.dispatch("Categoryactions");
        this.$swal.fire("Good job!", "Categoria Registrada!", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
    },
    show(row) {
      this.id = row.id;
      this.name = row.name;
      this.status = row.status;
    },
    update(id, name, status) {
      try {
        this.$apollo.mutate({
          mutation: UpdateCategory,
          variables: {
            id: id,
            name: name,
            status: status,
          },
        });
        this.$store.dispatch("Categoryactions");
        this.$swal.fire("Good job!", "Categoria Actualizada!", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.$refs.name.focus();
      this.name = "";
      this.status = true;
      this.id = null;
    },
  },
};
</script>
