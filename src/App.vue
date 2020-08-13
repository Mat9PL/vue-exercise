<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <userform/>
    <list/>
  </div>
</template>

<script>
  import userform from './components/userform.vue'
  import list from './components/list.vue'
  export default {
    name: 'app',
    components: {
      userform,
      list
    },
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  a {
    color: #42b983;
  }
  h1 {
    font-weight: normal;
  }
  h1>a {
    color: inherit;
    text-decoration: none;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>