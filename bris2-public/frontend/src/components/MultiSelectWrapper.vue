<template>
  <div id="filter-box-root">
    <multi-select 
      :options="options"
      :selected-options="items"
      :placeholder="filterDefiniton.title"
      @select="onSelect">
    </multi-select>
  </div>
</template>

<script>
import _ from 'lodash';
import { MultiSelect } from 'vue-search-select';

export default {
  name: 'MultiSelectWrapper',
  props: ['filterDefiniton'],
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
      this.$emit('filterUpdate', this.filterDefiniton.filter);
    },
    // deselect option
    reset() {
      this.items = []; // reset
    },
    // select option from parent component
    selectOption() {
      this.items = _.unionWith(this.items, [this.options[0]], _.isEqual);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
