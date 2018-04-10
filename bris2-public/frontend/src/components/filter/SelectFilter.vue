<template>
  <div id="select-filter-root">
    <multi-select 
      :options="options"
      :selected-options="items"
      x:placeholder="filterDefiniton.title"
      @select="onSelect">
    </multi-select>
  </div>
</template>

<script>
import _ from 'lodash';
import { MultiSelect } from 'vue-search-select';

export default {
  name: 'SelectFilter',
  props: ['filterDefiniton', 'resetFilter'],
  components: { MultiSelect },
  data() {
    return {
      options: this.filterDefiniton.options,
      searchText: '', // If value is falsy, reset searchText & searchItem
      items: [],
      lastSelectItem: {}
    };
  },
  methods: {
    onSelect(items, lastSelectItem) {
      this.items = items;
      this.lastSelectItem = lastSelectItem;
      this.filterDefiniton.filter.value = items.map(item => (item = item.value));
      this.emitUpdate();
    },
    // deselect option
    reset() {
      this.items = []; // reset
    },
    // select option from parent component
    selectOption() {
      this.items = _.unionWith(this.items, [this.options[0]], _.isEqual);
    },
    emitUpdate() {
      this.$emit('filterUpdate', this.filterDefiniton.filter);
    }
  },
  watch: {
    resetFilter: function() {
      this.reset();
    }
  }
};
</script>

<style scoped lang="scss">

</style>
