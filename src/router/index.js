import Login from "../layouts/GuestLayout/Login.vue";
import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../layouts/DashboardLayout/Dashboard.vue";
import {useUserStore} from "../store/userStore.js";
import Register from "../layouts/GuestLayout/Register.vue";
import MainLayout from "../layouts/GuestLayout/MainLayout.vue";
import ChatContainer from "../layouts/DashboardLayout/ChatContainer.vue";

const routes = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
            name: 'login',
            meta: {guest: true, auth: false},
            redirect: '/login',
            children: [
                {
                    path: '/register',
                    component: Register,
                    name: 'register',
                },
                {
                    path: '/login',
                    component: Login,
                    name: 'login',
                }
            ]
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {guest: false, auth: true},
            children: [
                {
                    path: '/chat/:id',
                    component: ChatContainer,
                    name: 'chat',
                }
            ]
        },

    ]
})

routes.beforeEach(async (to, from, next) => {
    const piniaUserStore = useUserStore()

    if (!piniaUserStore.user) {
        await piniaUserStore.fetchUser()
    }

    if (to.meta.auth && !piniaUserStore.user.data) {
        next({name: 'login'})
    } else if(to.meta.guest && piniaUserStore.user.data){
        next({name: 'dashboard'})
    } else {
        next()
    }
})

export default routes