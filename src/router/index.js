import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "category",
    component: () => import("../views/CategoryView.vue"),
  },
  {
    path: "/productos",
    name: "product",
    component: () => import("../views/ProductView.vue"),
  },
  {
    path: "/clientes",
    name: "customer",
    component: () => import("../views/CustomerView.vue"),
  },
  {
    path: "/pagos",
    name: "payment",
    component: () => import("../views/PaymentView.vue"),
  },
  {
    path: "/ordenes",
    name: "order",
    component: () => import("../views/OrderView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
