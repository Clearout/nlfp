<template>
  <div id="filter-box-root">
    <multi-select-wrapper
      :filterDefiniton="filterDefiniton"
      @filterUpdate="filterUpdate"
    >
    </multi-select-wrapper>
  </div>
</template>

<script>
import MultiSelectWrapper from './MultiSelectWrapper';

export default {
  name: 'FilterBox',
  props: ['filterDefiniton'],
  components: { MultiSelectWrapper },
  methods: {
    filterUpdate(payload) {
      this.$emit('filterUpdate', payload);
    }
  }
};
</script>

<style scoped lang="scss">

</style>
