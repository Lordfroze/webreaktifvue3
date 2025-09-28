import { createRouter, createWebHistory } from 'vue-router'; // mengimport createRouter dan createWebHistory dari vue-router

const router = createRouter({ // membuat router
    history: createWebHistory(import.meta.env.BASE_URL), // membuat history router menggunakan createWebHistory
    routes: [
        // halaman home
        { 
            path: "/", // path untuk halaman home
            name: "home",
            component: () => import("../views/Home.vue"), // mengimport component Home.vue
        }, 
        // redirect ke halaman home
        { 
            path: "/home", // path untuk halaman home
            redirect: "/", // redirect ke halaman home
        },
        {
            path: "/products/:id", // path untuk halaman product dengan parameter id
            name: "products", // name untuk halaman product dengan parameter id
            component: () => import("../views/Product.vue"), // mengimport component Product.vue
            children: [
                {
                    path: "/products/:id/owner", // path untuk halaman owner dengan parameter id
                    name: "owner", // name untuk halaman owner dengan parameter id
                    component: () => import("../views/Owner.vue"), // mengimport component Owner.vue
                }
            ]
        },

        {
            path: "/about", // path untuk halaman about
            name: "about",
            component: () => import("../views/About.vue"),
        },
        {
            path: "/:pathMatch(.*)*", // path untuk halaman 404
            name: "not-found", // name untuk halaman 404
            component: () => import("../views/errors/404.vue"), // mengimport component 404.vue
        },
    ]
});

export default router; // export router