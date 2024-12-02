import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Signup from "@/components/Signup.vue";
import Weather from "@/components/Weather.vue"
import News from "@/components/News.vue"
import AboutUs from "@/components/AboutUs.vue"
import Financial from "@/components/Financial.vue"

const routes = [
  {
    path: '/',
    name: 'login',
    component: Main,
    
  },
  
  {
    path: "/signUp",
    name: "Signup",
    component: Signup,
  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    children: [
      { path: 'news', name: 'news', component: News },
      { path: 'financial', name: 'financial', component: Financial },
      { path: 'weather', name: 'weather', component: Weather },
      { path: 'about-us', name: 'about-us', component: AboutUs },
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
