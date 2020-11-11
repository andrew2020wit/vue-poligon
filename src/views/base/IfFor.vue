<template>
  <div>
    <div v-if="yes1">v-if: On</div>
    <div v-if="false">v-if Off</div>
    <div style="background-color: yellow">
      <h2>v-else-if</h2>
      <div v-if="type === 'A'">
        A
      </div>
      <div v-else-if="type === 'B'">
        B
      </div>
      <div v-else-if="type === 'C'">
        C
      </div>
      <div v-else>
        Не A/B/C
      </div>
    </div>
    <div>
      <h2>V-for</h2>
      <li v-for="item in arr1" :key="item.id">
        {{ item.title }}
      </li>
    </div>
  </div></template
>

<script>
export default {
  name: "IfFor",
  data: function() {
    return {
      yes1: true,
      type: "B",
      arr1: [
        { id: 1, title: "title1" },
        { id: 2, title: "title2" },
        { id: 3, title: "title3" },
      ],
    };
  },
};
</script>

<style></style>
