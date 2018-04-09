<template scope="props">
  <div id="filter-box-root">
    <div v-if="filterType === Type.select">
      <select-filter :filterDefiniton="filterDefiniton" :resetFilter="resetFilter" @filterUpdate="filterUpdate" />
    </div>
    <div v-else-if="filterType === Type.time">
      <time-filter :filterDefiniton="filterDefiniton" :resetFilter="resetFilter" @filterUpdate="filterUpdate" />
    </div>
    <div v-else-if="filterType === Type.input">
      <input-filter :filterDefiniton="filterDefiniton" :resetFilter="resetFilter" @filterUpdate="filterUpdate" />
    </div>
    <div v-else-if="filterType === Type.category">
      <category-filter :filterDefiniton="filterDefiniton" :resetFilter="resetFilter" @filterUpdate="filterUpdate" />
    </div>
    <div v-else>
      <p class="text-danger text-center">
        filterType: {{filterType}}<br> cant be found in<br> Type: {{Type}}<br> can't render filter.
      </p>
    </div>
  </div>
</template>

<script>
import SelectFilter from './SelectFilter';
import InputFilter from './InputFilter';
import TimeFilter from './TimeFilter';
import CategoryFilter from './CategoryFilter';
import { Type } from '../../elastic/filter/filterDefinition';

export default {
  name: 'FilterBox',
  props: ['filterDefiniton', 'resetFilter'],
  components: { SelectFilter, InputFilter, TimeFilter, CategoryFilter },
  methods: {
    filterUpdate(payload) {
      this.$emit('filterUpdate', payload);
    }
  },
  data() {
    return {
      filterType: this.filterDefiniton.type
    };
  },
  computed: {
    Type: () => Type
  }
};
</script>

<style scoped lang="scss">

</style>
