import Vue from "vue";
import Router from "vue-router";

import Home from "./Home";
// import About from '@/components/About';
import Auth from "./Auth";
import TeacherHome from "../modules/misc/TeacherHome";
import ClassroomHome from "../modules/misc/ClassroomHome";
import AssignmentHome from "../modules/misc/AssignmentHome";
import StudentHome from "../modules/misc/StudentHome";
import NewHardware from "../modules/equipment/FormHardware";

import store from "./store";

// import firebase from 'firebase';

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "landing",
      component: Home
    },
    {
      path: "/newhardware",
      name: "newhardware",
      component: NewHardware
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About,
    // },
    {
      path: "/auth",
      name: "login",
      component: Auth
    },
    {
      path: "/home",
      name: "home",
      component: TeacherHome,
      meta: { requiresAuth: true }
    },
    {
      path: "/classroomhome/:id",
      name: "ClassroomHome",
      component: ClassroomHome,
      meta: { requiresAuth: true }
    },
    {
      path: "/assignmenthome/:classId/:id",
      name: "AssignmentHome",
      component: AssignmentHome,
      meta: { requiresAuth: true }
    },
    {
      path: "/studenthome/:id",
      name: "StudentHome",
      component: StudentHome,
      meta: { requiresAuth: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.state.user) next("auth");
  else next();
});
export default router;
