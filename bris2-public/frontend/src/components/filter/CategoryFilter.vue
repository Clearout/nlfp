<template>
  <div id="select-filter-root">
    <multiselect 
      v-model="values" 
      :options="options"
      @input="onChange" 
      :multiple="true" 
      group-values="answers" 
      group-label="title" 
      :group-select="true" 
      placeholder="Velg eller søk..."
      track-by="name" 
      label="name"
      selectLabel="Trykk for å velge"
      selectedLabel="Valgt"
      deselectLabel="Trykk for å fjerne"
      selectGroupLabel="Trykk for å velge alle svar"
      deselectGroupLabel="Trykk for å fjerne alle svar"
      :maxHeight="maxHeight"
      openDirection="below"
      :clearOnSelect="true"
      :hideSelected="true"
    >
      <span slot="noResult">Ingen resultater for ditt søk.</span>
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
      values: []
    };
  },
  methods: {
    reset() {
      this.values = [];
    },
    onChange() {
      this.filterDefiniton.filter.forEach(filter => (filter.value = []));
      this.values.forEach(value => {
        this.filterDefiniton.filter.filter(f => f.field === value.field).forEach(f => {
          f.value.push(value.name);
        });
      });
      this.emitUpdate();
    },
    emitUpdate() {
      this.filterDefiniton.filter.forEach(filter => this.$emit('filterUpdate', filter));
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
