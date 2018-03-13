import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Posts from '@/components/Posts';
import Post from '@/components/Post';
import CreatePost from '@/components/CreatePost';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
    },
    {
      path: '/post/:slug',
      name: 'Post',
      component: Post,
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/admin/post',
      name: 'CreatePost',
      component: CreatePost,
    },
  ],
});
