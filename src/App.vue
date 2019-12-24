<template>
  <div id="app">
    <Motivators/>
  </div>
</template>

<script>
import Motivators from './components/Motivators.vue';

export default {
  name: 'app',
  components: { Motivators },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
