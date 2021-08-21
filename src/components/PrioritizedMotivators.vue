<template>
  <div
    class="motivators-list"
  >
    <draggable
      v-model="motivatorsList"
      @start="startDragging"
      @end="stopDragging"
      @moved="orderingMotivator"
    >
      <div
        v-for="motivator in motivatorsList"
        :key="motivator.id"
      >
        <div
          class="motivator-stacked"
          :style="`background-color: ${motivator.color}`"
          @mouseenter="viewingMotivator(motivator)"
          @mouseleave="unsetMotivator"
        >
          <div class="motivator-name">
            {{ t(motivator.name) }}
          </div>
        </div>
      </div>
    </draggable>
  </div>
  <div class="motivator-detail">
    <h3>{{ t(selectedMotivatorStatus()) }}</h3>
    <p
      class="motivator-description"
      v-if="selectedMotivator && !dragging"
    >
      "{{ t(selectedMotivator.description) }}"
    </p>
  </div>
</template>

<script setup>
import { VueDraggableNext as draggable } from 'vue-draggable-next';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import motivators from '../motivators';
import shuffle from '../utils/shuffle';

const motivatorsList = shuffle(motivators);
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

const { t } = useI18n();
</script>

<style scoped>
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
