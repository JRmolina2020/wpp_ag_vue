<template>
  <div class="payment">
    <ExamplePayment></ExamplePayment>
  </div>
</template>

<script>
import ExamplePayment from "@/components/Payment/ExamplePayment.vue";

export default {
  name: "PaymentView",
  components: {
    ExamplePayment,
  },
};
</script>
