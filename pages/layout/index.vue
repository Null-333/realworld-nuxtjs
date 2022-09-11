<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container">
          <a class="navbar-brand" href="index.html">conduit</a>
          <ul class="nav navbar-nav pull-xs-right">
              <li class="nav-item">
                  <!-- Add "active" class when you're on that page" -->
                  <nuxt-link exact class="nav-link" to="/">Home</nuxt-link>
              </li>
              <li class="nav-item">
                  <nuxt-link class="nav-link" to="/editor">
                    <i class="ion-compose"></i>&nbsp;New Article
                  </nuxt-link>
              </li>
              <li class="nav-item">
                  <nuxt-link class="nav-link" to="/settings">
                      <i class="ion-gear-a"></i>&nbsp;Settings
                  </nuxt-link>
              </li>
              <li class="nav-item">
                  <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link ng-binding" to="/profile/1" ui-sref-active="active" ui-sref="app.profile.main({ username: $ctrl.currentUser.username })">
                  <img src="https://wx4.sinaimg.cn/mw2000/7709ac50gy1gc20cs6n0wj20u0140qe3.jpg" class="user-pic">
                  _Helen_
                </nuxt-link>
              </li>
          </ul>
      </div>
    </nav>
    <nuxt-child />
    <footer>
        <div class="container">
            <a href="/" class="logo-font">conduit</a>
            <span class="attribution">
              An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
            </span>
        </div>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>