import Vue from 'vue'
import Router from 'vue-router'

import Home from './Home'
// import About from '@/components/About';
import Auth from './Auth'
// import TeacherHome from '../modules/misc/TeacherHome'
// import ClassroomHome from '../modules/misc/ClassroomHome'
// import AssignmentHome from '../modules/misc/AssignmentHome'
// import StudentHome from '../modules/misc/StudentHome'
// import NewHardware from '../modules/equipment/FormHardware'
import Hardware from '../modules/equipment/hardware/Hardware'
import NewHardware from '../modules/equipment/hardware/NewHardware'
import CrewList from '../modules/people/CrewList'
import EditHardware from '../modules/equipment/hardware/EditHardware'
import Profile from '../modules/people/Profile'
import store from '../store/store'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Home,
    },
    {
      path: '/crewlist',
      name: 'CrewList',
      component: CrewList,
    },
    {
      path: '/hardware',
      name: 'Hardware',
      component: Hardware,
    },
    {
      path: '/hardware/new',
      name: 'NewHardware',
      component: NewHardware,
    },
    {
      path: '/hardware/:id/edit',
      name: 'EditHardware',
      component: EditHardware,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/newhardware',
      name: 'newhardware',
      component: NewHardware,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: '/auth',
      name: 'login',
      component: Auth,
    },
    // {
    //   path: '/home',
    //   name: 'home',
    //   component: TeacherHome,
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/classroomhome/:id',
    //   name: 'ClassroomHome',
    //   component: ClassroomHome,
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/assignmenthome/:classId/:id',
    //   name: 'AssignmentHome',
    //   component: AssignmentHome,
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: '/studenthome/:id',
    //   name: 'StudentHome',
    //   component: StudentHome,
    //   meta: { requiresAuth: true },
    // },
    {
      path: '*',
      name: 'Auth',
      component: Auth,
    },
  ],
})
router.beforeEach((to, from, next) => {
  // let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  console.log(to)
  if (!store.state.user) {
    console.log(store.state.user)
  }
  // if (requiresAuth && !store.state.user) next('auth')
  // else next()
  next()
})
export default router
