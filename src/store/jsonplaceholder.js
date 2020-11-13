export default {
  state: { users: [] },
  mutations: {
    updateUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers(ctx) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.ok) {
        const users = await response.json();
        ctx.commit("updateUsers", users);
      } else {
        console.error("fetchUsers error: ", response.status);
        alert("fetchUsers error: ", response.status);
      }
    },
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
};
