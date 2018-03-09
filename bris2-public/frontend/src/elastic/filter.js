export default class Filter {
  constructor(modifier, type, field, value) {
    this.modifier = modifier; // must | must_not | should
    this.type = type; // range | term | match
    this.field = field; // indexed.oppdrag.x.x.x
    this.value = value; // number | string | object | array
  }

  buildFilter() {
    let filter = {
      bool: {
        [this.modifier]: []
      }
    };
    if (this.value.constructor === Array) {
      this.value.forEach(value => {
        filter.bool[this.modifier].push({
          [this.type]: {
            [this.field]: value
          }
        });
      });
    } else {
      filter.bool[this.modifier].push({
        [this.type]: {
          [this.field]: this.value
        }
      });
    }
    return filter;
  }
}
