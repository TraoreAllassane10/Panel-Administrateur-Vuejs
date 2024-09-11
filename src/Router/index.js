import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '../pages/Dashboard.vue'
import Revenu from '../pages/Revenu.vue'
import Depense from '../pages/Depense.vue'
import Budget from '../pages/Budget.vue'
import Investissement from '../pages/Investissement.vue'
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/" ,
            component: Dashboard
        },
        {
            path: "/revenu" ,
            component: Revenu
        },
        {
            path: "/depense" ,
            component: Depense
        },
        {
            path: "/budget" ,
            component: Budget
        },
        {
            path: "/investissement" ,
            component: Investissement
        },

    ]
})

export default router