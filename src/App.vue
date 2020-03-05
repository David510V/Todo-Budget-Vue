<template>
  <div id="app">
      <Budget id="budgett"></Budget>
      <ToDo></ToDo>
  </div>
</template>

<script>
import Budget from './components/Budget.vue'
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',
  components: {
    Budget,
    ToDo
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
