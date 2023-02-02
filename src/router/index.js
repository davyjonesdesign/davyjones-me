import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// const Login = {
//   template: "<div>Login</div>"
// }
// const Profile = {
//   template: "<div>Login</div>"
// }

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    // meta: { requireAuth: true }
    // beforeEnter(to, from, next) {
    //   // logic here
    // }
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Portfolio.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/:itemAlias",
    name: "itemAlias",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CarouselItem.vue"),
  },
  {
    path: "/portfolio/:alias",
    name: "PortDetails",
    // props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/PortDetails.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
  {
    path: "/design-system",
    name: "DesignSystem",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DesignSystem.vue"),
  },
  {
    path: "/port-details-x",
    name: "PortDetailsX",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PortDetailsX.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
  },
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (!localStorage.getItem("token")) {
//       next("/");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
