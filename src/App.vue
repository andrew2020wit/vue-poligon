<template>
  <div id="app">
    <div class="layout">
      <div class="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand to="/">
            Vue Poligon
          </b-navbar-brand>
        </b-navbar>
      </div>
      <div class="main">
        <SiteNav />
        <router-view />
      </div>
      <div class="bottom">
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
        </b-navbar>
      </div>
    </div>
  </div>
</template>

<script>
import SiteNav from "./router/site-nav";
export default {
  name: "App",
  components: { SiteNav },
};
</script>

<style>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
}

.header {
  width: 100%;
  flex: 0;
}

.main {
  width: 100%;
  flex: 1;
}

.bottom {
  width: 100%;
  flex: 0;
}
</style>
