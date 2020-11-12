<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="TemplateSyntax"><TemplateSyntax /></b-tab>
      <b-tab title="ComputedProperties"><ComputedProperties /></b-tab>
      <b-tab title="Styles"><Styles /></b-tab>
      <b-tab title="IfFor"><IfFor /></b-tab>
      <b-tab title="VOn"><VOn /></b-tab>
      <b-tab title="CWatch"><CWatch /></b-tab>

      <b-tab title="CFilters"><CFilters /></b-tab>

      <b-tab title="Forms"><Forms /></b-tab>
      <b-tab title="PropsComponentHello"
        ><PropsComponentHello name="Jon"
      /></b-tab>
      <b-tab title="ObjPropsComponentHello"
        ><ObjPropsComponentHello name="Bob"
      /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import TemplateSyntax from "./TemplateSyntax.vue";
import Styles from "./Styles.vue";
import Forms from "./Forms.vue";
import CFilters from "./CFilters.vue";
import PropsComponentHello from "./PropsComponentHello.vue";
import ObjPropsComponentHello from "./ObjPropsComponentHello.vue";
import IfFor from "./IfFor.vue";
import VOn from "./VOn.vue";
import CWatch from "./CWatch.vue";
import ComputedProperties from "./ComputedProperties.vue";
export default {
  name: "Base",
  components: {
    TemplateSyntax,
    ComputedProperties,
    Styles,
    IfFor,
    VOn,
    Forms,
    PropsComponentHello,
    ObjPropsComponentHello,
    CFilters,
    CWatch,
  },
};
</script>
