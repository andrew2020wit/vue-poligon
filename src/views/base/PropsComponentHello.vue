<template>
  <div>
    <p>props name: {{ name }}</p>
    <p>Hello, {{ name }}!</p>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style></style>
