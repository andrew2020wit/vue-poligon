<template>
  <div>
    <span>Message: {{ msg }}</span>
    <p v-html="rawHtml"></p>
    <button v-bind:disabled="isButtonDisabled">
      v-bind:disabled: isButtonDisabled
    </button>
    <button v-bind:disabled="isButtonDisabled2">
      v-bind:disabled: isButtonNotDisabled
    </button>
    <h2>Directives</h2>
    <p v-if="vifv">v-if: visible</p>
    <p v-if="false">not visible</p>
    <p><a v-bind:href="url1"> v-bind:href= </a></p>
  </div>
</template>

<script>
export default {
  name: "TemplateSyntax",
  data: function() {
    return {
      msg: "message from js",
      rawHtml: `<span  style="color: red">v-html: rawHtml </span>`,
      isButtonDisabled: true,
      isButtonDisabled2: false,
      vifv: true,
      url1: "http://google.com",
    };
  },
};
</script>

<style></style>
