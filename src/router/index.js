import {createRouter, createWebHistory} from 'vue-router'
import TelaLogin from '../views/TelaLogin.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'login',
            component: TelaLogin
        },
        {
            path: '/produtos/:id',
            name: 'produtos',
            component: () => import('../views/List.vue')
        },
        {
            path:'/controles/:id',
            name:'controles',
            component: () => import('../views/Controles.vue')
        },
        {
            path: '/cadastro',
            name: 'cadastro',
            component: () => import('../views/Cadastro.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    const requiresAuth = to.matched.some((recorded) => recorded.meta.requiresAuth)
    if (requiresAuth && !token){
        next('/');
    } else {
        next();
    }
})

export default router