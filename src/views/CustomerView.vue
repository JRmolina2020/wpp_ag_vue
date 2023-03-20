<template>
  <div class="customer">
    <ExampleCustomer></ExampleCustomer>
  </div>
</template>

<script>
import ExampleCustomer from "@/components/Customer/ExampleCustomer.vue";

export default {
  name: "CustomerView",
  components: {
    ExampleCustomer,
  },
};
</script>
