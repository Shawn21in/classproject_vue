import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "Layout",
    },
  },
  {
    path: "/product",
    name: "product",
    meta: {
      layout: "Layout",
    },
    children: [
      {
        path: "detail/:type_layer1/:id", //detail/:type_layer1/:id
        name: "productDetail",
        component: () => import("../views/ProductDetail.vue"),
      },
      {
        path: "type_layer1",
        name: "type_layer1",
        component: () => import("../views/Type_layer1.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
