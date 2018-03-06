import Filter from './filter';

export default class Query {
  constructor() {
    this.query = {
      bool: {}
    };
    this.filters = [];
  }

  addFilter(filter) {
    if (filter.constructor === Filter) {
      this.filters.push(filter);
    }
  }

  buildQuery() {
    this.filters.forEach(filter => {
      if (filter.constructor === Filter) {
        if (this.query.bool[filter.modifier] == null) {
          this.query.bool[filter.modifier] = [];
        }
        this.query.bool[filter.modifier].push(filter.buildFilter());
      } else {
        console.log(filter, ' is not a Filter and is omitted from this query ', this.query);
      }
    });
    return this.query;
  }
}
