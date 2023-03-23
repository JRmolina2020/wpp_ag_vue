<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">Registrar producto</div>
    <form method="POST" @submit.enter.prevent="send()" autocomplete="off"
      onKeyPress="if(event.keyCode == 13) event.returnValue = false;">
      <input class="form-control form-control-sm mt-3" v-model="id" ref="name" type="number" placeholder="ID producto"
        required />

      <input class="form-control form-control-sm mt-3" v-model="name" ref="name" type="text" placeholder="Nombre producto"
        required />
      <input class="form-control form-control-sm mt-3" v-model="price" type="text" placeholder="precio" required />

      <input class="form-control form-control-sm mt-3" v-model="status" type="text" placeholder="status" required />
      
      <select class="form-control form-control-sm mt-3" v-model="category_id" @click="getCategories()">
        <option v-for="(item, index) in categories" :key="index" :value="item.name">{{item.name}}</option>
      </select>
    

      <button type="submit" class="btn btn-primary btn-sm mt-3">Guardar</button>
    </form>
  </div>
</template>
<script>
import { saveProduct,UpdateProduct } from "@/graphql/productMutation";
import { mapState } from "vuex";

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

  methods: {
    send() {
      console.log(":::SEND:::",this.$store.state.editing)
      if (this.$store.state.editing) {
        this.update(
          this.id,
          this.name,
          this.price,
          this.status,
          this.category_id,
        );
        this.$store.dispatch("handleEditAction");
        return;
      }
      this.createProduct(
        this.id,
        this.name,
        this.price,
        this.status,
        this.category_id
      );
    },
    listProduct() {
      console.log(".::GET PRODUCTS::.");
      setTimeout(() => {
        this.$store.dispatch("Productactions");
      }, 1000);
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
        this.$swal.fire("Excelente!", "Producto registrado", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
      this.listProduct();
    },
    show(row) {
      this.id = row.id;
      this.name = row.name;
      this.price = row.price;
      this.status = row.status;
      this.category_id = row.category_id;
      this.$store.dispatch("handleEditAction");
    },
    update(id, name, price, status, category_id) {
      try {
        console.log(category_id)
        this.$apollo.mutate({
          mutation: UpdateProduct,
          variables: {
            id: id,
            name: name,
            price: price,
            category_id: category_id,
            status: status,
          },
        });
        this.$store.dispatch("Productactions");
        this.listProduct();
        this.$swal.fire("Muy bien!", "Producto modificado", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.name = "";
      this.price = "";
      this.id = null;
      this.category_id = "";
      this.status = "";
    },
    getCategories(){
      this.$store.dispatch("Categoryactions");
    }
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>
