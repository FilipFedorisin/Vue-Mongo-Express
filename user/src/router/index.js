import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  //! - Architecture => "/<subview>/<subcomponent>/<subcategory_<index [0 to infinite] or id [hash]>>"

  //? - The "/<subview>" router NAVIGATION
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: () => import("@/views/About.vue") },
  { path: "/user-verification", component: () => import("@/views/User-Verification") },

  //? - The /user-verification/<subcomponent>
  { path: "/register", component: () => import("@/components/RegisterSystem/Register.vue") },
  { path: "/login", component: () => import("@/components/RegisterSystem/Login.vue") },
  { path: "/recovery", component: () => import("@/components/RegisterSystem/Recovery.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
