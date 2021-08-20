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
              <div class="motivator-name">{{ $t(motivator.name) }}</div>
            </div>
          </div>
        </draggable>
      </div>
      <div class="motivator-detail">
        <h3>{{ $t(selectedMotivatorStatus()) }}</h3>
        <p class="motivator-description" v-if="selectedMotivator && !dragging">
          "{{ $t(selectedMotivator.description) }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';
import motivators from '../motivators';
import shuffle from '../utils/shuffle';

export default {
  name: 'PrioritizedMotivators',
  components: {
    draggable: VueDraggableNext,
  },
  data: () => ({
    motivators: shuffle(motivators),
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
        return 'actions.ordering';
      }

      return selectedMotivator.value?.name ?? 'actions.choose_motivator';
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
