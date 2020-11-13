<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="StateCounters"><StateCounter /></b-tab>
      <b-tab title="StoreViewer"><StoreViewer /></b-tab>
      <b-tab title="CHttp"><CHttp /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import StateCounter from "./StateCounter.vue";
import StoreViewer from "./StoreViewer.vue";
import CHttp from "./CHttp.vue";
export default {
  name: "VuexPage",
  components: { StateCounter, StoreViewer, CHttp },
};
</script>
