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
          <th>Nombre</th>
          <th>Tel</th>
          <th>OD</th>
          <th>OU</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.id">
            <td>{{ row.name }}</td>
            <td>{{ row.phone }}</td>
            <th>
              <button
                type="button"
                @click="destroy(row.id)"
                class="btn btn-danger btn-sm"
              >
                E
              </button>
            </th>
            <th>
              <button
                type="button"
                @click="$emit('show', row)"
                class="btn btn-warning btn-sm"
              >
                U
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
import { DeleteCustomer } from "@/graphql/customerMutation";

export default {
  name: "ListCustomer",
  data() {
    return {
      totalPages: 1,
      currentPage: 1,

      filters: {
        name: { value: "", keys: ["name", "phone"] },
      },
    };
  },
  computed: {
    ...mapState(["customers"]),
  },

  created() {
    this.listCustomer();
  },
  methods: {
    listCustomer() {
      this.$store.dispatch("Customeractions");
    },
    destroy(id) {
      try {
        this.$apollo.mutate({
          mutation: DeleteCustomer,
          variables: {
            id: id,
          },
        });
        this.listCustomer();
        this.$swal.fire("Good job!", "Cliente eliminado", "success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
