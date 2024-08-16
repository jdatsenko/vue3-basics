import MainPage from "@/pages/MainPage";
import PostPage from "@/pages/PostPage";
import PostIdPage from "@/pages/PostIdPage";
import {createRouter, createWebHistory} from "vue-router";
import PostPageStorage from "@/pages/PostPageStorage.vue";

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
    },

    {
        path: '/store',
        component: PostPageStorage
    }
    
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;