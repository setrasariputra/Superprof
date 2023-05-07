import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import UsersView from '../views/UsersView.vue'
import UserTransactionView from '../views/UserTransactionView.vue'
import ProfileView from '../views/ProfileView.vue'
import RegisterView from '../views/RegisterView.vue'
import RecoveryView from '../views/RecoveryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/recovery',
      name: 'RecoveryView',
      component: RecoveryView
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    },
    {
      path: '/users',
      name: 'UsersView',
      component: UsersView
    },
    {
      path: '/user/transaction',
      name: 'UserTransactionView',
      component: UserTransactionView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    },
  ]
})

export default router
