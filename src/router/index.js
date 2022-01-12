import { createRouter, createWebHashHistory } from 'vue-router'
import EasyPayView from '/src/views/EasyPayView.vue'
import {ROUTES} from '../utils/base-constants.js'

const routes = [
    {
        path: '/',
        name: ROUTES.EASYPAYVIEW,
        component: EasyPayView,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router