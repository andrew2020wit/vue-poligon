<template>
  <div>
    <b-nav pills>
      <b-nav-item
        ><router-link to="/" exact exact-active-class="router-link-active">
          Home
        </router-link>
      </b-nav-item>
      <b-nav-item
        ><router-link to="/base" exact exact-active-class="router-link-active">
          Base
        </router-link>
      </b-nav-item>
      <b-nav-item
        ><router-link
          to="/vuex-page"
          exact
          exact-active-class="router-link-active"
        >
          VuexPage
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/about" exact exact-active-class="router-link-active"
          >About</router-link
        ></b-nav-item
      >
    </b-nav>
  </div></template
>
<script>
export default {
  name: "SiteNav",
};
</script>
<style scoped>
.router-link-active {
  background-color: greenyellow;
}
</style>
