<template>
  <div>
    <store-product ref="form"></store-product>
    <list-product v-on:show="show"></list-product>
  </div>
</template>

<script>
import StoreProduct from "./Store.vue";
import ListProduct from "./List.vue";
export default {
  components: { ListProduct, StoreProduct },
  name: "ExampleProduct",
  component: {
    ListProduct,
    StoreProduct,
  },

  methods: {
    show(row) {
      this.$refs.form.show(row);
    },
  },
};
</script>
