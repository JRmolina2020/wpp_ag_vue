<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">
      Registro de clientes! {{ id }}
    </div>
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
        placeholder="Nombre cliente"
        required
      />
      <input
        class="form-control form-control-sm mt-3"
        v-model="phone"
        type="number"
        placeholder="phone customers"
        required
      />
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
import { saveCustomer, UpdateCustomer } from "@/graphql/customerMutation";
export default {
  name: "Store",
  data() {
    return {
      id: null,
      name: "",
      phone: "",
    };
  },
  mounted() {
    this.$refs.name.focus();
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
      try {
        this.$apollo.mutate({
          mutation: saveCustomer,
          variables: {
            name: name,
            phone: phone,
          },
        });
        this.$store.dispatch("Customeractions");
        this.$swal.fire("Good job!", "Cliente registrado", "success");
        this.clear();
      } catch (error) {
        console.log(error);
      }
    },
    show(row) {
      this.id = row.id;
      this.name = row.name;
      this.phone = row.phone;
    },
    update(id, name, phone) {
      try {
        this.$apollo.mutate({
          mutation: UpdateCustomer,
          variables: {
            id: id,
            name: name,
            phone: phone,
          },
        });
        this.$store.dispatch("Customeractions");
        this.$swal.fire("Good job!", "Cliente modificado", "success");
      } catch (error) {
        console.log(error);
      }
    },
    clear() {
      this.$refs.name.focus();
      this.name = "";
      this.phone = "";
      this.id = null;
    },
  },
};
</script>
