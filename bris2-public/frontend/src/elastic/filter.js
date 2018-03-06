export default class Filter {
  constructor(modifier, type, field, value) {
    this.modifier = modifier; // must | must_not | should
    this.type = type; // range | term | match
    this.field = field; // indexed.oppdrag.x.x.x
    this.value = value; // number | string | object | array
  }

  buildFilter() {
    let filter = {
      [this.type]: {
        [this.field]: this.value
      }
    };
    return filter;
  }
}
