<template>
  <div class="motivators">
    <h1>Moving Motivators</h1>

    <p class="motivators-explanation">
      Ordena los siguientes motivadores de acuerdo a tus preferencias.<br>
      Al posicionarte en cada ítem podrás ver una descripción para entender qué significa cada uno.
    </p>
    <div class="motivators-container">
      <div class="motivators-list">
        <draggable v-model="motivators">
          <div v-for="motivator in motivators" :key="motivator.id">
            <div class="motivator-stacked"
                 :style="`background-color: ${motivator.color}`"
                 @mouseover="viewingMotivator(motivator)">
              <div class="motivator-name">{{ motivator.name }}</div>
            </div>
          </div>
        </draggable>
      </div>
      <div class="motivator-detail">
        <img class="motivator-image" :src=selectedMotivator.image :alt=selectedMotivator.name>
      </div>
    </div>
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
  {
    id: '00', name: 'RELACIONES', image: relaciones, description: 'bcd', color: '#1eb26a',
  },
  {
    id: '01', name: 'ACEPTACIÓN', image: aceptacion, description: 'abc', color: '#ece810',
  },
  {
    id: '02', name: 'CURIOSIDAD', image: curiosidad, description: 'def', color: '#faaf18',
  },
  {
    id: '03', name: 'LIBERTAD', image: libertad, description: 'ghi', color: '#ee3e35',
  },
  {
    id: '04', name: 'ESTATUS', image: estatus, description: 'jkl', color: '#f27ca9',
  },
  {
    id: '05', name: 'META', image: meta, description: 'mno', color: '#483082',
  },
  {
    id: '06', name: 'HONRA', image: honra, description: 'pqr', color: '#02bce8',
  },
  {
    id: '07', name: 'MAESTRÍA', image: maestria, description: 'stu', color: '#5dc3ad',
  },
  {
    id: '08', name: 'ORDEN', image: orden, description: 'vwx', color: '#f8c0cf',
  },
  {
    id: '09', name: 'PODER', image: poder, description: 'yza', color: '#a7af38',
  },
]);

const selectedMotivator = motivators[0];

export default {
  name: 'Motivators',
  components: { draggable },
  data: () => ({
    motivators,
    selectedMotivator,
  }),
  methods: {
    viewingMotivator(motiv) {
      this.$set(this, 'selectedMotivator', motiv);
    },
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

.motivators-list {
  order: 1;
  width: 30%;
}

.motivator-stacked {
  padding: 10px;
  margin: 5px;
  border: 2px solid #2c3e50;
}

.motivator-name {
  color: white;
  font-weight: bolder;
}

.motivator-stacked:hover {
  padding-left: 20px;
}

.motivator-detail {
  order: 2;
}

.motivator-image {
  width: 400px;
}

.motivators-explanation {
  text-align: center;
}
</style>
