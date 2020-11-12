<template>
  <div>
    <p>ObjPropsComponentHello props name: {{ name }}</p>
    <p>Hello, {{ name }}!</p>
  </div>
</template>

<script>
export default {
  props: { name: { requried: true, type: String } },
};
</script>

<style></style>
