<template>
  <div>
    <div>
      <ol>
        Users:
        <li
          v-for="user in this.$store.state.JsonPlaceHolder.users"
          :key="user.id"
        >
          {{ user.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  async mounted() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>

<style></style>
