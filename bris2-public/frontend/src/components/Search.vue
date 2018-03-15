<template>  
  <div class="grid-layout">
    <div class="top">
      <search-box placeholder="Leter du etter noe?" initialSearch=""></search-box>
      <br>
      <h4>Antall treff: {{count}}</h4>
    </div>
    <div class="center"> 
      <div 
        v-for="(filterDefinition, key) in filterDefinitons" 
        :key="key"
      >        
        <filter-section 
          :title="filterDefinition.title"
          :filterDefinitons="filterDefinition.filters" 
          :isOpen="true" 
          @filterUpdate="updateFilters">
        </filter-section>
      </div>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import SearchBox from './SearchBox';
import FilterSection from './filter/FilterSection';
import FilterDefinitions from '../elastic/filter/filterDefinition';
import Query from '../elastic/query';
import ElasticClient from '../elastic/elasticClient';

let filterDefinitions = new FilterDefinitions();
let updateCount = function(that, count) {
  that.count = count;
};

export default {
  name: 'Search',
  components: { SearchBox, FilterSection },
  data() {
    return {
      msg: 'Search',
      filterDefinitons: filterDefinitions,
      query: new Query(),
      client: new ElasticClient(),
      count: 0
    };
  },
  methods: {
    updateFilters(filter) {
      this.query.updateFilters(filter);
      let that = this;
      this.client.count(this.query, this, updateCount);
    }
  },
  mounted() {
    let that = this;
    this.client.count(this.query, this, updateCount);
  }
};
</script>

<style scoped lang="scss">
.grid-layout {
  grid-template-columns: 1fr 3fr 4fr 3fr 1fr;
}
h4 {
  text-align: center;
}
</style>
