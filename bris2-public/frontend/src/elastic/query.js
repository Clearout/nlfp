import Filter from './filter';

export default class Query {
  constructor() {
    this.query = this.resetQuery();
    this.filters = [];
  }

  resetQuery() {
    return {
      constant_score: {
        filter: {
          bool: {
            must: []
          }
        }
      }
    };
  }

  buildQuery() {
    this.query = this.resetQuery();
    this.filters.forEach(filter => {
      if (filter.constructor === Filter) {
        this.query.constant_score.filter.bool.must.push(filter.buildFilter());
      } else {
        console.log(filter, ' is not a Filter and is omitted from this query ', this.query);
      }
    });
    return this.query;
  }

  updateFilters(filter) {
    if (filter == null) return;
    let existingFilterIndex = -1;
    this.filters.forEach((filterInQuery, index) => {
      if (filterInQuery.field === filter.field) {
        existingFilterIndex = index;
      }
    });
    if (existingFilterIndex >= 0) {
      if (filter.value == null || filter.value.length <= 0) {
        this.filters.splice(existingFilterIndex, 1);
      } else {
        this.filters[existingFilterIndex] = filter;
      }
    } else {
      if (!(filter.value == null || filter.value.length <= 0)) {
        this.filters.push(filter);
      }
    }
  }

  ready() {
    return this.filters.length > 0;
  }
}
