<template>
  <div id="input-filter-root">
  </div>
</template>

<script>
export default {
  name: 'TimeFilter',
  props: ['filterDefiniton'],
  data() {
    return {
      value: ''
    };
  },
  methods: {
    onChange() {
      console.log('CHANGE : ', this.filterDefiniton.type);
      this.filterDefiniton.filter.value = this.value;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.emitUpdate();
      }, 400);
    },
    emitUpdate() {
      this.$emit('filterUpdate', this.filterDefiniton.filter);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/main.scss';

.input-filter {
  border: 1px solid $bris-color;
  border-radius: 0;
  min-height: 2.7142em;
  line-height: 1em;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>
