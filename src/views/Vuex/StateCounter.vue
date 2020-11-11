<template>
  <div>
    <p>from state: {{ this.$store.state.stateCount }}</p>
    <button @click="increment">increment</button>
  </div></template
>

<script>
export default {
  name: "StateCounter",
  methods: {
    increment() {
      this.$store.commit("incrementStateCount");
    },
  },
};
</script>

<style></style>
