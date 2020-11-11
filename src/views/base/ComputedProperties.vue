<template>
  <div>{{ reversedMessage }}</div></template
>

<script>
export default {
  name: "ComputedProperties",
  computed: {
    reversedMessage: function() {
      const c = "some " + "computed string";
      return c;
    },
  },
};
</script>

<style></style>
