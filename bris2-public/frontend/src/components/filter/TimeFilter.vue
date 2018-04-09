<template>
  <div id="input-filter-root">
    <b-card no-body class="card timefilter">
      <b-card-header v-b-toggle="filterDefiniton.title" class="timefilter-header text default" role="tab">
        {{filterDefiniton.title}}
      </b-card-header>
      <b-collapse :id="filterDefiniton.title" :accordion="filterDefiniton.title" role="tabpanel">
        <b-card-body class="timefilter-body">
          <div class="inner-container">
            <h6>Fra</h6>
            <b-row>
              <datepicker :calendar-button="true" calendar-button-icon="fa fa-calendar pull-right picker-button">
              </datepicker>
            </b-row>
            <h6>Til</h6>
            <b-row>
              <datepicker :calendar-button="true" calendar-button-icon="fa fa-calendar pull-right picker-button">
              </datepicker>
            </b-row>
          </div>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'TimeFilter',
  props: ['filterDefiniton', 'resetFilter'],
  components: {
    Datepicker
  },
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
    },
    reset() {
      this.value = '';
    }
  },
  watch: {
    resetFilter: function() {
      this.reset();
    }
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/main.scss';

.timefilter {
  border: 1px solid $bris-color;
  border-radius: 0;
}

.timefilter-header {
  border: 1px solid $bris-color;
  border-radius: 0;
  background-color: $white;
  margin: -1px -1px -1px -1px;
  padding: 9px 13px;
  h6 {
    font-weight: 400;
    font-size: 16px;
  }
}

.timefilter-body {
  > i {
    font-size: 18px;
  }
}
.inner-container {
  > h6 {
    padding: 5px 0 5px 0;
    margin: 0;
  }
  > .row {
    margin: 0;
  }
}
</style>
