import { createWebHistory, createRouter } from "vue-router"

// const Home = { template: '<div>Home</div>' }

const routes = [

    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },
    {
        path: '/login',
        name: 'loginView',
        component: () => import('../views/auth/LoginView.vue')
    },
    {
        path: '/register',
        name: 'registerView',
        component: () => import('../views/auth/RegisterView.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router