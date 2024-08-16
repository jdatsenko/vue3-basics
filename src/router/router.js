import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
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

    {
        path: '/post/:id',
        component: PostIdPage
    }
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;