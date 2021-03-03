import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('views/home/Home')
const Sort = () => import('views/sort/Sort')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [
  {
    path:'',
    redirect:'/home',
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/sort',
    component:Sort
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/profile',
    component:Profile
  }
]

const router = new Router({
  routes,
  mode:'history'
})

export default router
