import { getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "shop" */ '../views/Shop.vue')
  },
  {
    path: '/shop/:category',
    name: 'product-categories',
    // route level code-splitting
    // this generates a separate chunk (shop.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product-categories" */ '../views/Shop.vue')
  },
  {
    path: '/product/:id/:slug',
    name: 'product',
    // route level code-splitting
    // this generates a separate chunk (product.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (blog.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ '../views/Blog.vue')
  },
  {
    path: '/post/:id/:slug',
    name: 'singlepost',
    // route level code-splitting
    // this generates a separate chunk (singlepost.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "singlepost" */ '../views/SinglePost.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ '../views/Faq.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    // route level code-splitting
    // this generates a separate chunk (checkout.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "checkout" */ '../views/Checkout.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/wishlist',
    name: 'wishlist',
    // route level code-splitting
    // this generates a separate chunk (wishlist.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "wishlist" */ '../views/Wishlist.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (cart.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  },
  {
    path: '/account',
    name: 'account',
    // route level code-splitting
    // this generates a separate chunk (account.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    // route level code-splitting
    // this generates a separate chunk (not-found.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "not-found" */ '../views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next)=> {
  if(to.matched.some((record)=> record.meta.requireAuth)) {
    if(getAuth().currentUser) {
      next();
    }else {
      alert("you have to login");
      next("/")
    }
  }else {
    next();
  }
})

export default router
