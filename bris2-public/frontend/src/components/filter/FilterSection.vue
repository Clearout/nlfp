<template>
  <div id="filter-section-root">
    <div class="filter-list-container" role="tablist">
      <b-card no-body class="card">
        <b-card-header class="filter-list-header" role="tab">
          <h4 v-b-toggle="title">{{title}}</h4>
          <hr/>
        </b-card-header>
        <b-collapse 
          :id="title" 
          :visible="open" 
          :accordion="title" 
          role="tabpanel"
        >
          <b-card-body class="filter-list">
            <div class="filter-grid">
              <div 
                v-for="(filterDefiniton, key) in filterDefinitons" 
                :key="key"
              >
                <filter-box 
                  :filterDefiniton="filterDefiniton"
                  :resetFilter="resetFilter"
                  @filterUpdate="filterUpdate"
                >
                </filter-box>
              </div>
            </div>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
import FilterBox from './FilterBox';

export default {
  name: 'FilterSection',
  props: ['title', 'filterDefinitons', 'isOpen', 'resetFilter'],
  components: { FilterBox },
  data() {
    return {
      open: this.isOpen
    };
  },
  methods: {
    filterUpdate(payload) {
      this.$emit('filterUpdate', payload);
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/main';
.filter-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-template-rows: auto;
}

#filter-section-root {
  margin-bottom: 10px;
}

.filter-list-container {
  border: 0;
}

.filter-list-header {
  border: 0;
  background-color: $white;
}

.card {
  border: 0;
  border-radius: 0;
}

h4 {
  margin: 0;
}

hr {
  border: none;
  border-top: 2px solid $bris-color;
  height: 2px;
}
</style>
