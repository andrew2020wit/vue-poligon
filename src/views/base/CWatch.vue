<template>
  <div>
    <select v-model="select1">
      <option value="val1">value1</option>
      <option value="val2">value2</option>
      <option value="val3">value3</option>
    </select>
    <p>watch result: {{ result }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      result: "none",
      select1: "value1",
    };
  },
  watch: {
    select1(x) {
      this.result = x;
    },
  },
};
</script>

<style></style>
