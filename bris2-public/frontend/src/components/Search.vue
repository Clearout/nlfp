<template>  
  <div class="grid-layout">
    <div class="top">
      <search-box placeholder="Leter du etter noe?" initialSearch=""></search-box>
    </div>
    <div class="center"> 
      <filter-section title="Hva?" :filters="filters" :isOpen="true"></filter-section>
      <filter-section title="Hvor?" :filters="filters" :isOpen="true"></filter-section>
      <filter-section title="Ressurser" :filters="filters" :isOpen="true"></filter-section>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox';
import FilterSection from './FilterSection';

export default {
  name: 'Search',
  components: { SearchBox, FilterSection },
  data() {
    return {
      msg: 'Search',
      filters: [
        { msg: 'test', other: '' },
        { msg: 'test' },
        { msg: 'test' },
        { msg: 'test' },
        { msg: 'test' }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.grid-layout {
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
}
</style>
