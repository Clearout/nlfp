const host = 'http://utvvfpt09.dsbutv.lokal:9200';
const logType = 'trace';
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

  search(query, that, callback) {
    this.client
      .search({
        index: index,
        type: type,
        body: {
          query: query.buildQuery()
        }
      })
      .then(
        function(response) {
          callback(that, response.hits.hits);
        },
        function(error) {
          console.trace(error.message);
        }
      );
  }

  count(query, that, callback) {
    console.log(JSON.stringify(query.buildQuery()));
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
          callback(that, response.count);
        },
        function(error) {
          console.trace(error.message);
        }
      );
  }
}
