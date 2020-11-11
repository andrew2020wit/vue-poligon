<template>
  <div>
    <div v-bind:class="{ 'red-color': bul1 }">active red class</div>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
      v-bind:style
    </div>
  </div></template
>

<script>
export default {
  name: "StylesVue",
  data: function() {
    return { bul1: true, fontSize: 30, activeColor: "green" };
  },
};
</script>

<style>
.red-color {
  color: red;
}
</style>
