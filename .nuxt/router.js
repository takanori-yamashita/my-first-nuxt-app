import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _066a023c = () => interopDefault(import('../pages/authed-route.vue' /* webpackChunkName: "pages/authed-route" */))
const _3308de1a = () => interopDefault(import('../pages/child.vue' /* webpackChunkName: "pages/child" */))
const _f4a4c680 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _454091bc = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _0eed6803 = () => interopDefault(import('../pages/users/register.vue' /* webpackChunkName: "pages/users/register" */))
const _90e203d6 = () => interopDefault(import('../pages/users/_userid.vue' /* webpackChunkName: "pages/users/_userid" */))
const _87f40cae = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/authed-route",
      component: _066a023c,
      name: "authed-route"
    }, {
      path: "/child",
      component: _3308de1a,
      name: "child"
    }, {
      path: "/login",
      component: _f4a4c680,
      name: "login"
    }, {
      path: "/users",
      component: _454091bc,
      name: "users"
    }, {
      path: "/users/register",
      component: _0eed6803,
      name: "users-register"
    }, {
      path: "/users/:userid",
      component: _90e203d6,
      name: "users-userid"
    }, {
      path: "/",
      component: _87f40cae,
      name: "index"
    }],

    fallback: false
  })
}
