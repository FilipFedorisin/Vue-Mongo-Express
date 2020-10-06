import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", component: () => import("@/views/Home.vue") },
  { path: "/about", component: () => import("@/views/About.vue") },

  { path: "/login", component: () => import("@/components/RegisterSystem/Login.vue") },
  { path: "/register", component: () => import("@/components/RegisterSystem/Register.vue") },
  { path: "/recovery", component: () => import("@/components/RegisterSystem/Recovery.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
