<template>
  <div>
    <h1>Moving Motivators</h1>

    <p class="motivators-explanation">
      Ordena los siguientes motivadores de acuerdo a tus preferencias.
      <br>
      Al posicionarte en cada ítem podrás ver una descripción para entender qué significa cada uno.
      <br>
      Moving Motivators es una de las actividades de Management 3.0
      (<a href="https://management30.com/practice/moving-motivators/">más info aquí</a>)
    </p>
    <div class="motivators-container">
      <PrioritizedMotivators />
    </div>
  </div>
</template>

<script>
import PrioritizedMotivators from './PrioritizedMotivators.vue';

export default {
  name: 'MotivatorsContainer',
  components: {
    PrioritizedMotivators,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.motivators-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.motivators-explanation {
  text-align: center;
}
</style>
