import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _dff7540e = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5740b76e = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _dde3028c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _609088ba = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _42c09f32 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _f7950788 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _475acc07 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _dff7540e,
    children: [{
      path: "",
      component: _5740b76e,
      name: "home"
    }, {
      path: "/register",
      component: _dde3028c,
      name: "register"
    }, {
      path: "/login",
      component: _dde3028c,
      name: "login"
    }, {
      path: "profile/:username",
      component: _609088ba,
      name: "profile"
    }, {
      path: "settings",
      component: _42c09f32,
      name: "settings"
    }, {
      path: "editor",
      component: _f7950788,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _475acc07,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
