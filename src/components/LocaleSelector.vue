<template>
  <div class="locale-changer">
    <span>Change language: </span>
    <label>
      <select v-model="$i18n.locale" name="locale-select">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: 'LocaleSelector',
};
</script>

<style scoped>

.locale-changer {
  margin-top: 1em;
  text-align: right;
}

</style>
