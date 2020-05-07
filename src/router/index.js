import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/dashboard/Sci-Fi",
        name: "Sci-Fi",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Sci-Fi.vue")
      },
      {
        path: "/dashboard/Humor",
        name: "Humor",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Humor.vue")
      },
      {
        path: "/dashboard/Mystery",
        name: "Mystery",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Mystery.vue")
      },
      {
        path: "/dashboard/Poetry",
        name: "Poetry",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Poetry.vue")
      }
    ]
  },
  {
    path: "/signup",
    name: "signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
