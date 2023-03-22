<template>
  <div class="container col-lg-4 mt-3">
    <label>Filter by Name categories:</label>
    <input class="form-control" v-model="filters.name.value" />
    <div class="table-responsive">
      <v-table
        :data="categories"
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
          <th>Actions</th>
 
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
                @click="$emit('show', row)"
                class="btn btn-secondary btn-sm mr-2"
              >
                Updade
              </button>
              <button
                type="button"
                @click="destroy(row.id)"
                class="btn btn-danger btn-sm"
              >
                Delete
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
import { DeleteCategory } from "@/graphql/categoryMutation";

export default {
  name: "listCategory",
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
    ...mapState(["categories"]),
  },

  created() {
    this.listCategory();
  },
  methods: {
    listCategory() {
      this.$store.dispatch("Categoryactions");
    },
    destroy(id) {
      try {
        this.$apollo.mutate({
          mutation: DeleteCategory,
          variables: {
            id: id,
          },
        });
        this.listCategory();
        this.$swal.fire("Good job!", "Categoria Eliminada", "success");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
