<template>
  <div>
    <store-category ref="form"></store-category>
    <list-category v-on:show="show"></list-category>
  </div>
</template>

<script>
import StoreCategory from "./Store.vue";
import ListCategory from "./List.vue";

export default {
  components: { ListCategory, StoreCategory },
  name: "ExampleCategory",
  component: {
    ListCategory,
    StoreCategory,
  },

  methods: {
    show(row) {
      this.$refs.form.show(row);
    },
  },
};
</script>
