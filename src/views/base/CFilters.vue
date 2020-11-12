<template>
  <div>
    <div>filter uppercase: {{ text1 }} => {{ text1 | uppercase }}</div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { text1: "filter" };
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style></style>
