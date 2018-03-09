export default class FilterDefinition {
  constructor(title, values, type, filter) {
    this.title = title || '';
    this.values = values || [];
    this.type = type;
    this.filter = filter;
  }
}
