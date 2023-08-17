<template>
  <div id="app">
    <PhoneBook></PhoneBook>
  </div>
</template>

<script>

import PhoneBook from './components/phone-book/PhoneBook';

export default {
  name: 'App',
  components: {
    PhoneBook
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
