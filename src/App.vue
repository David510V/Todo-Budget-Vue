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
@import "/scss/app.scss";
</style>
