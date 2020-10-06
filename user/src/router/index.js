import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  //! - Architecture => "/<subview>/<subcomponent>/<subcategory_<index [0 to infinite] or id [hash]>>"

  //? - The "/<subview>" router NAVIGATION
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: () => import("@/views/About.vue") },

  //? - The "/user-verification/<subcomponent>" router SUBLOAD-NAVIGATION
  {
    path: "/user-verification",
    component: () => import("@/views/User-Verification.vue"),
    children: [
      { path: "login", component: () => import("@/components/User-Verification/Login.vue") },
      { path: "register", component: () => import("@/components/User-Verification/Register.vue") },
      { path: "recovery", component: () => import("@/components/User-Verification/Recovery.vue") },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
