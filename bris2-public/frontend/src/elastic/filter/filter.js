export default class Filter {
  constructor(modifier, type, field, value) {
    this.modifier = modifier; // must | must_not | should
    this.type = type; // range | term | match
    this.field = field; // indexed.oppdrag.x.x.x
    this.value = value; // number | string | object | array
  }

  buildFilter() {
    this.filter = {
      bool: {
        [this.modifier]: []
      }
    };
    if (this.value.constructor === Array) {
      this.value.forEach(value => {
        this.pushToFilter(this.field, value);
      });
    } else {
      this.pushToFilter(this.field, this.value);
    }
    return this.filter;
  }

  pushToFilter(field, value) {
    if (field.constructor === Array) {
      field.forEach(field => {
        this.filter.bool[this.modifier].push({
          [this.type]: {
            [field]: value.toLowerCase()
          }
        });
      });
    } else {
      this.filter.bool[this.modifier].push({
        [this.type]: {
          [this.field]: value.toLowerCase()
        }
      });
    }
  }
}
