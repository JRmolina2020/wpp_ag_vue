<template>
  <div>
    <store-customer ref="form"></store-customer>
    <list-customer v-on:show="show"></list-customer>
  </div>
</template>

<script>
import StoreCustomer from "./Store.vue";
import ListCustomer from "./List.vue";
export default {
  components: { ListCustomer, StoreCustomer },
  name: "ExampleCustomer",
  component: {
    ListCustomer,
    StoreCustomer,
  },

  methods: {
    show(row) {
      this.$refs.form.show(row);
    },
  },
};
</script>
