import {createRouter, createWebHistory} from 'vue-router';

import Home from '../src/pages/Home.vue';
import Font from '../src/pages/Font.vue';
import About from '../src/pages/About.vue';
import Licenses from '../src/pages/Licenses.vue';
import Pairs from '../src/pages/Pairs.vue'
import Faq from '../src/pages/Faq.vue'



// Defining routes
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/pairs',
        name: 'pairs',
        component: Pairs
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/licenses',
        name: 'license',
        component: Licenses
    },
    {
        path: '/faq',
        name: 'faq',
        component: Faq
    },
    {
        path: '/fonts/:fontname',
        name: 'font',
        component: Font
    },
];




// Create the router instance and pass `route`
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});




export default router;