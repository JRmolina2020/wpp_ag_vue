<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">Registrar producto</div>
    <form
      method="POST"
      @submit.enter.prevent="send()"
      autocomplete="off"
      onKeyPress="if(event.keyCode == 13) event.returnValue = false;"
    >
      <input
        class="form-control form-control-sm mt-3"
        v-model="id"
        ref="name"
        type="number"
        placeholder="ID producto"
        required
      />

      <input
        class="form-control form-control-sm mt-3"
        v-model="name"
        ref="name"
        type="text"
        placeholder="Nombre producto"
        required
      />
      <input
        class="form-control form-control-sm mt-3"
        v-model="price"
        type="text"
        placeholder="precio"
        required
      />

      <input
        class="form-control form-control-sm mt-3"
        v-model="status"
        type="text"
        placeholder="status"
        required
      />

      <input
        class="form-control form-control-sm mt-3"
        v-model="category_id"
        type="text"
        placeholder="category_id"
        required
      />

      <button
        v-if="isEditing"
        type="submit"
        class="btn btn-success btn-sm mt-3"
      >
        Editar
      </button>

      <button v-else type="submit" class="btn btn-primary btn-sm mt-3">
        Guardar
      </button>
    </form>
  </div>
</template>
<script>
import { saveProduct, UpdateProduct } from "@/graphql/productMutation";
export default {
  name: "Store",
  data() {
    return {
      id: "",
      name: "",
      price: "",
      status: "",
      category_id: "",
    };
  },
  mounted() {
    this.$refs.id.focus();
  },
  methods: {
    send() {
      this.createProduct(
        this.id,
        this.name,
        this.price,
        this.status,
        this.category_id
      );
    },
    createProduct(id, name, price, status, category_id) {
      
      try {
        this.$apollo.mutate({
          mutation: saveProduct,
          variables: {
            id,
            name,
            price,
            status: status,
            category_id: category_id,
          },
        });

        this.$store.dispatch("Productactions");
        this.$swal.fire("Excelente!", "Producto registrado", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
    },
    show(row) {
      this.id = row.id;
      this.name = row.name;
      this.price = row.price;
    },
    update(id, name, price) {
      try {
        this.$apollo.mutate({
          mutation: UpdateCustomer,
          variables: {
            id: id,
            name: name,
            price: price,
          },
        });
        this.$store.dispatch("Productactions");
        this.$swal.fire("Good job!", "Producto modificado", "success");
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.$refs.id.focus();
      this.name = "";
      this.price = "";
      this.id = null;
      this.category_id = "";
      this.status = "";
    },
  },
};
</script>
