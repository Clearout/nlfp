<template>  
  <div class="grid-layout">
    <div class="top">
      <search-box placeholder="Leter du etter noe?"></search-box>
    </div>
    <div class="center">

    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox';

export default {
  name: 'Search',  
  components: { SearchBox },
  data () {
    return {
      msg: 'Search'
    }
  }
}
</script>

<style scoped>
</style>
