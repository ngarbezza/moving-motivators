<template>
  <div class="motivators">
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
      <div class="motivators-list">
        <draggable
            v-model="motivators"
            @start="startDragging"
            @end="stopDragging"
            @moved="orderingMotivator">
          <div v-for="motivator in motivators" :key="motivator.id">
            <div class="motivator-stacked"
                 :style="`background-color: ${motivator.color}`"
                 @mouseenter="viewingMotivator(motivator)"
                 @mouseleave="unsetMotivator">
              <div class="motivator-name">{{ motivator.name }}</div>
            </div>
          </div>
        </draggable>
      </div>
      <div class="motivator-detail">
        <h3>{{ selectedMotivatorStatus() }}</h3>
        <p class="motivator-description" v-if="selectedMotivator && !dragging">
          "{{ selectedMotivator.description }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

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
    id: '00',
    name: 'RELACIONES',
    description: 'Tengo buenas relaciones sociales con la gente de mi trabajo',
    color: '#1eb26a',
  },
  {
    id: '01',
    name: 'ACEPTACIÓN',
    description: 'Las personas a mi alrededor aprueban lo que hago y quién soy',
    color: '#ece810',
  },
  {
    id: '02',
    name: 'CURIOSIDAD',
    description: 'Tengo muchas cosas para investigar y sobre las cuales pensar',
    color: '#faaf18',
  },
  {
    id: '03',
    name: 'LIBERTAD',
    description: 'Soy independiente de otres con mi propio trabajo y responsabilidades',
    color: '#ee3e35',
  },
  {
    id: '04',
    name: 'ESTATUS',
    description: 'Mi posición es buena y reconocida por la gente que trabaja conmigo',
    color: '#f27ca9',
  },
  {
    id: '05',
    name: 'META',
    description: 'Mi propósito en la vida se refleja en el trabajo que hago',
    color: '#483082',
  },
  {
    id: '06',
    name: 'HONRA',
    description: 'Me siento orgulloso de que mis valores personales se reflejen en cómo trabajo',
    color: '#02bce8',
  },
  {
    id: '07',
    name: 'MAESTRÍA',
    description: 'Mi trabajo desafía mis competencias pero aún está dentro de mis capacidades',
    color: '#5dc3ad',
  },
  {
    id: '08',
    name: 'ORDEN',
    description: 'Hay suficientes reglas y políticas para un entorno estable',
    color: '#f8c0cf',
  },
  {
    id: '09',
    name: 'PODER',
    description: 'Hay suficiente espacio para que yo influencie lo que ocurre a mi alrededor',
    color: '#a7af38',
  },
]);

export default {
  name: 'Motivators',
  components: {
    draggable: VueDraggableNext,
  },
  data: () => ({
    motivators,
  }),
  setup: () => {
    const selectedMotivator = ref(null);
    const viewingMotivator = (motivator) => { selectedMotivator.value = motivator; };
    const unsetMotivator = () => { selectedMotivator.value = null; };
    const orderingMotivator = (_i, _e, elem) => { selectedMotivator.value = elem; };

    const dragging = ref(false);
    const startDragging = () => { dragging.value = true; };
    const stopDragging = () => { dragging.value = false; };

    const selectedMotivatorStatus = () => {
      if (dragging.value) {
        return 'Ordenando...';
      }

      return selectedMotivator.value?.name ?? 'Elige un motivador';
    };

    return {
      selectedMotivator,
      viewingMotivator,
      unsetMotivator,
      orderingMotivator,
      dragging,
      startDragging,
      stopDragging,
      selectedMotivatorStatus,
    };
  },
};
</script>

<style scoped>

@media only screen and (min-width: 800px) {
  .motivators {
    padding-left: 10%;
    padding-right: 10%;
  }
}

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
  width: 40%;
}

.motivator-stacked {
  padding: .8em;
}

.motivator-name {
  color: white;
  font-weight: bolder;
  text-align: center;
  text-shadow: 0 0 3px black;
}

.motivator-stacked:hover {
  padding: calc(.8em - .15em);
  border: .15em solid;
  cursor: grab;
}

.motivators-explanation {
  text-align: center;
}

.motivator-detail {
  order: 2;
  text-align: center;
  width: 40%;
}

.motivator-description {
  font-size: 1.5em;
  font-style: italic;
}
</style>
