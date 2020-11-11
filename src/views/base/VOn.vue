<template>
  <div id="example-1">
    <h2>v-on:click</h2>
    <b-button variant="success" v-on:click="counter += 1"> __ +1 __</b-button>
    <p>Кнопка выше была нажата {{ counter }} раз</p>

    <div id="example-2">
      <!-- `greet` — это название метода, определённого ниже -->
      <b-button v-on:click="greet">Поприветствовать</b-button>
    </div>
    <button v-on:click="say('hi')">Скажи hi</button>
  </div></template
>

<script>
export default {
  name: "VOn",
  data: function() {
    return {
      counter: 0,
      name: "Vue.js",
    };
  },
  methods: {
    greet: function(event) {
      // `this` внутри методов указывает на экземпляр Vue
      alert("Привет, " + this.name + "!");
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function(message) {
      alert(message);
    },
  },
};
</script>

<style></style>
