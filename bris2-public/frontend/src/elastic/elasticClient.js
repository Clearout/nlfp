import Filter from './filter';
import Query from './query';
import filters from './filters';

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

  search(query) {
    let filter = new Filter(
      filters.modifier.must,
      filters.type.term,
      filters.location.fylke,
      'rogaland'
    );
    query = new Query();
    query.addFilter(filter);
    let hits;
    this.client.search(
      {
        index: index,
        type: type,
        body: {
          query: query.buildQuery()
        }
      }
    ).then(
      function(response) {
        hits = response.hits.hits;
      },
      function(error) {
        console.trace(error.message);
      }
    );
    console.log(filter);
    console.log(JSON.stringify(filter.buildFilter()));
    return hits;
  }
}
