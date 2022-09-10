module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      // 清空原始配置
      routes.splice(0);
      routes.push(...[
        {
          path: '/',
          name: 'layout',
          component: resolve(__dirname, 'pages/layout'),
          children: [
            {
              path: '',
              name: 'home',
              component: resolve(__dirname, 'pages/home'),
            }
          ]
        }
      ]);
    }
  }
}