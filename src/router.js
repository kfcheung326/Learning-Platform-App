import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Community from './views/Community.vue';
import VideoAdmin from './views/VideoAdmin.vue';
import Video from './views/Video.vue';
import CommunityAdmin from './views/CommunityAdmin.vue';
import UploadPoster from './views/UploadPoster.vue';
import UploadVideo from './views/UploadVideo.vue';
import Quiz from './views/quiz.vue';
import UserManage from './views/ListUser.vue';







Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/community',
      name: 'community',
      component: Community
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    //for user
    {
      path: '/profile',
      name: 'profile',
      // lazy-loaded
      component: () => import('./views/Profile.vue')
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
    {
      path: '/admin',
      name: 'admin',
      // lazy-loaded
      component: () => import('./views/BoardAdmin.vue')
    },

    // for admin
    {
      path: '/videoAdmin',
      name: 'videoAdmin',
      component: VideoAdmin
    },
    {
      path: '/communityAdmin',
      name: 'communityAdmin',
      component: CommunityAdmin
    },
    {
      path: '/uploadPoster',
      name: 'uploadPoster',
      component: UploadPoster
    },
    {
      path: '/uploadVideo',
      name: 'uploadVideo',
      component: UploadVideo
    },
    {
      path: '/userManage',
      name: 'userManage',
      component: UserManage
    }
    ,
    {
      path: '/mod',
      name: 'moderator',
      // lazy-loaded
      component: () => import('./views/BoardModerator.vue')
    },
    {
      path: '/user',
      name: 'user',
      // lazy-loaded
      component: () => import('./views/BoardUser.vue')
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });
