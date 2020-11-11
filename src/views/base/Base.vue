<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="TemplateSyntax"><TemplateSyntax /></b-tab>
      <b-tab title="ComputedProperties"><ComputedProperties /></b-tab>
      <b-tab title="Styles"><Styles /></b-tab>
      <b-tab title="IfFor"><IfFor /></b-tab>
      <b-tab title="VOn"><VOn /></b-tab>
      <b-tab title="Forms"><Forms /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import TemplateSyntax from "./TemplateSyntax.vue";
import Styles from "./Styles.vue";
import Forms from "./Forms.vue";
import IfFor from "./IfFor.vue";
import VOn from "./VOn.vue";
import ComputedProperties from "./ComputedProperties.vue";
export default {
  name: "Base",
  components: { TemplateSyntax, ComputedProperties, Styles, IfFor, VOn, Forms },
};
</script>
