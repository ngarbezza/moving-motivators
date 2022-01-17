<template>
  <div class="moving-motivators-container">
    <PrioritizedMotivators />
    <LocaleSelector />
  </div>
</template>

<script>
import PrioritizedMotivators from './components/PrioritizedMotivators.vue';
import LocaleSelector from './components/LocaleSelector.vue';

export default {
  name: 'App',
  components: { PrioritizedMotivators, LocaleSelector },
};
</script>

<style>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #24262AFF;
}

@media only screen and (min-width: 800px) {
  .moving-motivators-container {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
