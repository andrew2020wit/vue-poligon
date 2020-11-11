<template>
  <div>
    <input v-model="message" placeholder="отредактируй меня" />
    <p>Введённое сообщение: {{ message }}</p>
  </div></template
>

<script>
export default {
  name: "Forms",
  data: function() {
    return {
      message: "",
    };
  },
};
</script>

<style></style>
