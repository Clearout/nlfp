<template>
  <div id="select-filter-root">
    <multiselect 
      v-model="value" 
      :options="options" 
      :multiple="true" 
      group-values="answers" 
      group-label="title" 
      :group-select="true" 
      :placeholder="title"
      track-by="name" 
      label="name"
      selectLabel="Trykk for å velge"
      selectedLabel="Valgt"
      deselectLabel="Trykk for å fjerne"
      :maxHeight="maxHeight"
      openDirection="below"
      :clearOnSelect="true"
      :hideSelected="true"
    >
      <span slot="noResult">Ingen elementer funnet for ditt søk.</span>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';
import FilterDefinitions from '../../elastic/filter/filterDefinition';

export default {
  name: 'CategoryFilter',
  props: ['filterDefiniton', 'resetFilter'],
  components: { Multiselect },
  data() {
    return {
      maxHeight: 500,
      title: this.filterDefiniton.title,
      options: this.filterDefiniton.options,
      value: []
    };
  },
  methods: {
    reset() {
      this.value = [];
    }
  },
  watch: {
    resetFilter: function() {
      this.reset();
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>  
<style scoped lang="scss">

</style>
