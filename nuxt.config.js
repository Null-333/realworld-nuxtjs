module.exports = {
  router: {
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
            }
          ]
        }
      ]);
    }
  }
}