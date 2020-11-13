<template>
  <div>
    <div>
      <ol>
        <strong>Users from https://jsonplaceholder.typicode.com/users:</strong>
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
