module.exports = {
  router: {
    linkExactActiveClass: 'active',
    extendRoutes(routes, resolve) {
      // 清空原始配置
      routes.splice(0);
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home'),
            }, {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login'),
            }, {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login'),
            }, {
              path: 'profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile'),
            }, {
              path: 'settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings'),
            }, {
              path: 'editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor'),
            }, {
              path: 'article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article'),
            }
          ]
        }
      ]);
    }
  }
}