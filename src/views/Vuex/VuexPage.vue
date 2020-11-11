<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="StateCounters"><StateCounter /></b-tab>
      <b-tab title="StoreViewer"><StoreViewer /></b-tab>
    </b-tabs>
  </div>
</template>

<script>
import StateCounter from "./StateCounter.vue";
import StoreViewer from "./StoreViewer.vue";
export default {
  name: "VuexPage",
  components: { StateCounter, StoreViewer },
};
</script>
