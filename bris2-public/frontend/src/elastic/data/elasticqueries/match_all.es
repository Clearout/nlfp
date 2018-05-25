GET /sambas/_search
{
  "size": 10,
  "query": {
    "bool": {
      "must" :{
        "term" : {
          "_type": "OppdragRapport"
        }
      }
    }
  }
}

GET /_cat/indices?v

GET /sambas_index_2/_mapping/

GET /_snapshot/_status

GET /

GET /_all/_settings

POST _reindex?requests_per_second=1
{
  "source": {
    "remote": {
      "host":  "http://ryzen2.utv.lokal:9200",
      "socket_timeout": "2m",
      "connect_timeout": "1m"
    },
    "index": "sambas_index_2",
    "size": 1000,
    "query": {
      "bool": {
        "must" :{
          "term" : {
            "_type": "OppdragRapport"
          }
        }
      }
    }
  },
  "dest": {
    "index": "sambas"
  }
}

PUT sambas
{
  "settings" : {
    "index" : {
      "number_of_shards" : 5, 
      "number_of_replicas" : 1,
      "mapping.total_fields.limit" : 1000000
    }
  }
}

PUT sambas
{
  "settings": {
    "index.mapping.total_fields.limit" : 1000000
  }
}

DELETE sambas