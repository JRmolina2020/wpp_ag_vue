<template>
  <div>
    <store-payment ref="form"></store-payment>
    <list-payment v-on:show="show"></list-payment>
  </div>
</template>

<script>
import StorePayment from "./Store.vue";
import ListPayment from "./List.vue";
export default {
  components: { ListPayment, StorePayment },
  name: "ExamplePayment",
  component: {
    ListPayment,
    StorePayment,
  },

  methods: {
    show(row) {
      this.$refs.form.show(row);
    },
  },
};
</script>
