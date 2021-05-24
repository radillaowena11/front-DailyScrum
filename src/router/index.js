import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Daily_Scrum from '../views/Daily_Scrum.vue'
import Navbar from '../views/Layouts/Navbar.vue'
import Footer from '../views/Layouts/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    components: {default: Login}
  },
  {
    path: '/register',
    name: 'Register',
    components: {default: Register}
  },
  {
    path: '/scrum',
    name: 'Scrum',
    components: { default: Daily_Scrum, header : Navbar, footer: Footer}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

// router.beforeEach((to, from, next) => {
//   if(to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next()
//       return
//     }
//     next('/login') 
//   } else {
//     next() 
//   }
// })

export default router

