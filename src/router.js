import HomeView from  './components/HomeView.vue'
import SignUp from  './components/SignUp.vue'
import LogIn from  './components/LogIn.vue'
import AddResturant from  './components/AddResturant.vue'
import UpdateResturant from  './components/UpdateResturant.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name:'HomeView',
        component:HomeView,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    }, 
    {
        name:'LogIn',
        component:LogIn,
        path:'/log-in'
    },
    {
        name:'AddResturant',
        component:AddResturant,
        path:'/add-resturant'
    },   {
        name:'UpdateResturant',
        component:UpdateResturant,
        path:'/update-resturant/:id'
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router; 