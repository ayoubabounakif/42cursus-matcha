import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }
]