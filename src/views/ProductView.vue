<template>
  <div class="product">
    <ExampleProduct></ExampleProduct>
  </div>
</template>

<script>
import ExampleProduct from "@/components/Product/ExampleProduct.vue";

export default {
  name: "ProductView",
  components: {
    ExampleProduct,
  },
};
</script>
