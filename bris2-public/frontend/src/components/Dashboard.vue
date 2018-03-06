<template>
<div class="grid-layout">
  <div class="top">
    <search-box placeholder="Leter du etter noe?"></search-box>
  </div>
  <div class="center">
    <div class="dashboard-grid">
      <box v-for="(box, index) in boxes" v-bind:text="box" v-bind:index="index" v-bind:key="box + index"></box>
    </div>
  </div>
  <div class="bottom">

  </div>
</div>
</template>

<script>
import Box from './Box.vue';
import SearchBox from './SearchBox';

export default {
  name: 'Dashboard',
  components: { Box, SearchBox },
  data () {
    return {
      msg: 'Dashboard',
      boxes: [1,2,3,4,5,6]
    }
  }
}
</script>

<style scoped lang="scss">
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, 15vmax);
  grid-gap: 20px;
  padding: 10px;
}
</style>
