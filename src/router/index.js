import { createRouter, createWebHistory } from 'vue-router'

// import employeeVoucher from '@/components/layout/employee/TheEmployeeVoucher.vue'
import manage from '@/components/layout/manage/TheContainer.vue'
import employee from '@/components/layout/employee/TheContainer.vue'
import login from "@/components/layout/login/LoginForm.vue"

const routes = [
   
    // { path: '/employeeVoucher', component:employeeVoucher },
    { path: '/manage', component:manage },
    { path: '/employee', component:employee },
    { path: '/login', component:login },
    {path: '/', redirect: '/login'}
  ]
    // router.beforeEach((to, from, next) => {
  //   // chuyển đến trang login nếu chưa được login
  //   const publicPages = ['/voucher'];
  //   const authRequired = !publicPages.includes(to.path);
  //   const loggedIn = localStorage.getItem('user');
  
  //   if (authRequired && !loggedIn) {
  //     return next('/login');
  //   }
  
  //   next();
  // })
  const router = createRouter({

    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
  
  })


export default router