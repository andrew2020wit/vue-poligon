<template>
  <div>
    <b-nav>
      <b-nav-item to="/" exact exact-active-class="active">
        Home
      </b-nav-item>
      <b-nav-item to="/base" exact exact-active-class="active">
        Base
      </b-nav-item>
      <b-nav-item to="/vuex-page" exact exact-active-class="active">
        VuexPage
      </b-nav-item>
      <b-nav-item to="/about" exact exact-active-class="active">
        About
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  name: "SiteNav",
};
</script>
<style scoped>
.active {
  background-color: aliceblue;
}
</style>
