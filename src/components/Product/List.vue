<template>
  <div class="container col-lg-4 mt-3">
    <label>Filter by Name products:</label>
    <input class="form-control" v-model="filters.name.value" />
    <div class="table-responsive">
      <v-table
        :data="products"
        :filters="filters"
        :currentPage.sync="currentPage"
        :pageSize="4"
        @totalPagesChanged="totalPages = $event"
        class="table table-dark mt-3"
      >
        <input class="form-control" v-model="filters.name.value" />
        <thead slot="head">
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Category</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.id">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.price }}</td>
            <td>{{ row.category_id }}</td>
            <th>
              <button
                type="button"
                @click="destroy(row.id)"
                class="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </th>
            <th>
              <button
                type="button"
                @click="$emit('show', row)"
                class="btn btn-warning btn-sm"
              >
                Update
              </button>
            </th>
          </tr>
        </tbody>
      </v-table>
      <smart-pagination
        :currentPage.sync="currentPage"
        :totalPages="totalPages"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { DeleteProduct } from "@/graphql/productMutation";

export default {
  name: "ListProduct",
  data() {
    return {
      totalPages: 1,
      currentPage: 1,
      filters: {
        name: { value: "", keys: ["name", "price"] },
      },
    };
  },
  computed: {
    ...mapState(["products"]),
  },

  created() {
    this.listProduct();
  },
  methods: {
    listProduct() {
     setTimeout(() => {
        this.$store.dispatch("Productactions");
      }, 1000);
    },
    destroy(id) {
      try {
        this.$apollo.mutate({
          mutation: DeleteProduct,
          variables: {
            id: id,
          },
        });
        this.listProduct();
        this.$swal.fire("Good job!", "Producto eliminado", "success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
