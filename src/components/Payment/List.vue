<template>
  <div class="container col-lg-4 mt-3">
    <label>Filter by Name payments:</label>
    <input class="form-control" v-model="filters.name.value" />
    <div class="table-responsive">
      <v-table
        :data="payments"
        :filters="filters"
        :currentPage.sync="currentPage"
        :pageSize="4"
        @totalPagesChanged="totalPages = $event"
        class="table table-dark mt-3"
      >
        <input class="form-control" v-model="filters.name.value" />
        <thead slot="head">
          <th>Nombre</th>
          <th>Estado</th>
          <th>OD</th>
          <th>OU</th>
        </thead>
        <tbody slot="body" slot-scope="{ displayData }">
          <tr v-for="row in displayData" :key="row.id">
            <td>{{ row.name }}</td>
            <td v-if="row.status">
              <span class="badge badge-success">Activo</span>
            </td>
            <td v-else><span class="badge badge-warning">Inactivo</span></td>
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
import { DeletePayment } from "@/graphql/paymentMutation";

export default {
  name: "ListPayment",
  data() {
    return {
      totalPages: 1,
      currentPage: 1,

      filters: {
        name: { value: "", keys: ["name"] },
      },
    };
  },
  computed: {
    ...mapState(["payments"]),
  },

  created() {
    this.listPayment();
  },
  methods: {
    listPayment() {
      this.$store.dispatch("Paymentactions");
    },
    destroy(id) {
      try {
        this.$apollo.mutate({
          mutation: DeletePayment,
          variables: {
            id: id,
          },
        });
        this.listPayment();
        this.$swal.fire("Good job!", "Pago eliminado", "success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
