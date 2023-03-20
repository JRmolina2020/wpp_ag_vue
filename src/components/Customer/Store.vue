<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">
      Registro de clientes! {{ id }}
    </div>
    <input
      class="form-control form-control-sm mt-3"
      v-model="name"
      type="text"
      placeholder="Nombre cliente"
      required
    />
    <input
      class="form-control form-control-sm mt-3"
      v-model="phone"
      type="text"
      placeholder="tel"
      required
    />
    <button
      v-if="id == null"
      type="button"
      @click="send()"
      class="btn btn-primary btn-sm mt-3"
    >
      Guardar
    </button>
    <button
      v-else
      type="button"
      @click="send()"
      class="btn btn-success btn-sm mt-3"
    >
      Editar
    </button>
  </div>
</template>
<script>
import gql from "graphql-tag";
export default {
  name: "Store",
  data() {
    return {
      id: null,
      name: "",
      phone: "",
    };
  },

  methods: {
    send() {
      if (this.id == null) {
        this.createContact(this.name, this.phone);
      } else {
        this.update(this.id, this.name, this.phone);
      }
    },
    createContact(name, phone) {
      this.$apollo.mutate({
        mutation: gql`
          mutation addCustomer($name: String!, $phone: String!) {
            addCustomer(id: "", name: $name, phone: $phone) {
              id
              name
              phone
            }
          }
        `,
        variables: {
          name: name,
          phone: phone,
        },
      });
      location.reload();
    },
    show(row) {
      this.id = row.id;
      this.name = row.name;
      this.phone = row.phone;
    },
    update(id, name, phone) {
      console.log(`Update contact: # ${id}`);
      this.$apollo.mutate({
        mutation: gql`
          mutation updateCustomer($id: ID!, $name: String!, $phone: String!) {
            updateCustomer(id: $id, customer: { name: $name, phone: $phone }) {
              id
              name
              phone
            }
          }
        `,
        variables: {
          id: id,
          name: name,
          phone: phone,
        },
      });
      location.reload();
    },
  },
};
</script>
