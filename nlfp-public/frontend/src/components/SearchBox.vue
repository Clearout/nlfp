<template>
  <div id="searchbox-root">
      <b-col cols="4" offset="4" style="display:flex" class="search-container">
          <b-form-input 
            v-model="data" 
            type="search" 
            size="lg" 
            v-bind:placeholder="placeholder"
            class="searchbox searcharea">
          </b-form-input>
          <b-btn class="searchbutton searcharea">
            <i class="fa fa-search search-icon"></i>
          </b-btn>
      </b-col>
  </div>
</template>

<script>
export default {
  name: 'search-box',
  props: ['placeholder', 'initalSearch'],
  data () {
    return {
      data: ''
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../assets/main";
  @import '../assets/custom-bs';

  #searchbox-root {
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
    font-size: 1.4rem;
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
