const host = 'http://localhost:3000';
const logType = 'error';
const index = 'sambas';
const type = 'OppdragRapport';

export default class ElasticClient {
  constructor() {
    let elasticsearch = require('elasticsearch');
    this.client = new elasticsearch.Client({
      host: host,
      log: logType
    });
  }

  search(query, size, that, callback) {
    this.client
      .search({
        index: index,
        type: type,
        body: {
          query: query.buildQuery(),
          size: size
        }
      })
      .then(
        function(response) {
          callback(that, response);
        },
        function(error) {
          console.trace(error.message);
        }
      );
  }

  count(query, that, callback) {
    this.client
      .count({
        index: index,
        type: type,
        body: {
          query: query.buildQuery()
        }
      })
      .then(
        function(response) {
          callback(that, response);
        },
        function(error) {
          console.trace(error.message);
        }
      );
  }
}
