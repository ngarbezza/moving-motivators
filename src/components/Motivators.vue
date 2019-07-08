<template>
  <div class="motivators">
    <h1>Moving Motivators</h1>

    <draggable v-model="motivators" group="people" @start="drag=true" @end="drag=false">
      <div class="motivator" v-for="motivator in motivators" :key="motivator.id">
        {{motivator.name}}
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

const motivators = [
  { name: 'Aceptación' },
  { name: 'Curiosidad' },
  { name: 'Libertad' },
  { name: 'Estatus' },
  { name: 'Meta' },
  { name: 'Honra' },
  { name: 'Maestría' },
  { name: 'Orden' },
  { name: 'Poder' },
  { name: 'Relaciones' },
];

export default {
  name: 'Motivators',
  props: { title: String },
  components: { draggable },
  data: () => ({ motivators }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.motivators {
}

.motivator {
  display: inline-block;
  margin: 0 2em;
}
</style>
