<template>
  <div class="locale-changer">
    <span>Change language: </span>
    <select v-model="locale">
      <option
        v-for="availableLocale in availableLocales"
        :key="`locale-${availableLocale}`"
        :value="availableLocale"
      >
        {{ availableLocale }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { locale, availableLocales } = useI18n();
</script>

<style scoped>
.locale-changer {
  margin-top: 1em;
  text-align: right;
}
</style>
