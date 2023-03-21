<template>
  <div class="container col-lg-4 mt-5">
    <div class="alert alert-info" role="alert">Registro de pagos! {{ id }}</div>
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
        placeholder="Nombre del pago"
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
import { savePayment, UpdatePayment } from "@/graphql/paymentMutation";
export default {
  name: "Store",
  data() {
    return {
      id: null,
      name: "",
      status: 1,
    };
  },
  mounted() {
    this.$refs.name.focus();
  },
  methods: {
    send() {
      if (this.id == null) {
        this.createPayment(this.name, this.status);
      } else {
        this.update(this.id, this.name, this.status);
      }
    },
    createPayment(name, status) {
      try {
        this.$apollo.mutate({
          mutation: savePayment,
          variables: {
            name: name,
            status: status,
          },
        });
        this.$store.dispatch("Paymentactions");
        this.$swal.fire("Good job!", "Pago registrado", "success");
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
          mutation: UpdatePayment,
          variables: {
            id: id,
            name: name,
            status: status,
          },
        });
        this.$store.dispatch("Paymentactions");
        this.$swal.fire("Good job!", "Pago modificado", "success");
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
