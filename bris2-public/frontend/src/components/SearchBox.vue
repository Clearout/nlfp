<template>
  <div id="searchbox-root">
    <b-col cols="4" offset="4" class="search-container">
      <b-form-input 
        v-model="search" 
        type="search" 
        size="lg" 
        :placeholder="placeholder"
        class="searchbox searcharea">
      </b-form-input>
      <b-btn class="searchbutton searcharea" @click="ping">
        <i class="fa fa-search search-icon"></i>
      </b-btn>
    </b-col>
    <b-col cols="2">
      <b-btn @click="resetFilter" class="reset btn-light">
        <i class="fa fa-minus-circle"></i>
        Nullstill søk og filter
      </b-btn>
    </b-col>
  </div>
</template>

<script>
import ElasticClient from '../elastic/elasticClient';

export default {
  name: 'search-box',
  props: ['placeholder', 'initialSearch'],
  data() {
    return {
      search: this.initialSearch
    };
  },
  methods: {
    ping() {},
    resetFilter() {
      this.search = '';
      this.$emit('resetFilter', true);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/main';
@import '../assets/custom-bs';

.reset {
  background-color: $white;
  border: 0;
  box-shadow: 0;
}

#searchbox-root {
  display: flex;
}

.search-container {
  display: flex;
}

.search-container:focus-within > .searcharea {
  box-shadow: 0 0 0 0.1rem $bris-color;
  border-color: $bris-color;
}

.searcharea {
  box-shadow: 0;
  border: 2px solid $gray-700;
  border-radius: 0;
}

.searchbox {
  height: 100px;
  font-weight: 600;
  font-size: 1.3rem;
  border-right: 0;
}

.searchbutton {
  width: 100px;
  background-color: $white;
}

.search-icon {
  color: $gray-700;
  font-weight: 200;
  font-size: 2.5rem;
}
</style>
