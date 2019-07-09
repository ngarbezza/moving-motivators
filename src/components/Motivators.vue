<template>
  <div class="motivators">
    <h1>Moving Motivators</h1>

    <draggable v-model="motivators" group="people" @start="drag=true" @end="drag=false">
      <div class="motivator" v-for="motivator in motivators" :key="motivator.id">
        <img :src=motivator.image :alt=motivator.name>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

const aceptacion = require('../assets/es/aceptacion.png');
const curiosidad = require('../assets/es/curiosidad.png');
const libertad = require('../assets/es/libertad.png');
const estatus = require('../assets/es/estatus.png');
const meta = require('../assets/es/meta.png');
const honra = require('../assets/es/honra.png');
const maestria = require('../assets/es/maestria.png');
const orden = require('../assets/es/orden.png');
const poder = require('../assets/es/poder.png');
const relaciones = require('../assets/es/relaciones.png');

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    // eslint-disable-next-line no-param-reassign
    array[currentIndex] = array[randomIndex];
    // eslint-disable-next-line no-param-reassign
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const motivators = shuffle([
  { name: 'Aceptación', image: aceptacion },
  { name: 'Curiosidad', image: curiosidad },
  { name: 'Libertad', image: libertad },
  { name: 'Estatus', image: estatus },
  { name: 'Meta', image: meta },
  { name: 'Honra', image: honra },
  { name: 'Maestría', image: maestria },
  { name: 'Orden', image: orden },
  { name: 'Poder', image: poder },
  { name: 'Relaciones', image: relaciones },
]);

export default {
  name: 'Motivators',
  components: { draggable },
  data: () => ({ motivators }),
  watch: {
    motivators: (o, n) => {
      // eslint-disable-next-line no-console
      console.log(`old: ${o}`);
      // eslint-disable-next-line no-console
      console.log(`new: ${n}`);
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}

.motivator {
  display: inline-block;
  margin: 0 1em;
}
</style>
