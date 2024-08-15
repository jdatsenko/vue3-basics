import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/post',
        component: PostPage
    },
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;