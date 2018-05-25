GET /sambas/OppdragRapport/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "_type": "OppdragRapport"
          }
        }
      ]
    }
  }
}

POST /sambas/OppdragRapport/_search
{
  "query" : {
    "constant_score": {
      "filter": {
        "bool": {
          "must": [
            {
              "range": {
                "indexed.oppdrag.opprettetDato": {
                  "gte": "2017/01/01",
                  "lt": "2017/11/02"
                }
              }
            },
            {
              "term": {
                "_type": "OppdragRapport"
              }
            }
          ],
          "should": [  
            {
              "bool": {
                "should" : [         
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "rogaland"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "hordaland"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "finnmark"
                    }
                  }
                ]
              }
            },
            {
              "bool": {
                "should": [
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "hedmark"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "nordland"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "troms"
                    }
                  }
                ]              
              } 
            }
          ]
        }
      }
    }
  }
}

/*
,
            { 
              "term": {
                "indexed.sporsmal.id": "100"    
              }
            },
            {
              "term": {
                "indexed.sporsmal.100.tekst": "ja"
              }
            }*/

GET /sambas/_search
{
  "query" : {
    "constant_score": {
      "filter": {
        "bool": {
          "must": [
            {
              "range": {
                "indexed.oppdrag.registrertBrannvesen": {
                  "gte": "2017/01/01",
                  "lt": "2017/11/02"
                }
              }
            },
            {
              "bool": {
                "must": [
                  {"term": {
                    "_type": "OppdragRapport"
                  }}
                ]
              }
            },
            {
              "bool": {
                "should": [
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "hedmark"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "nordland"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "troms"
                    }
                  }
                ]              
              } 
            }
          ]
        }
      }
    }
  }
}

GET /sambas/_search
{
  "query" : {
    "constant_score": {
      "filter": {
        "bool": {
          "must": [
            {
              "range": {
                "indexed.oppdrag.registrertBrannvesen": {
                  "gte": "2017/01/01",
                  "lt": "2017/11/02"
                }
              }
            },
            {
              "bool": {
                "must": [
                  {"term": {
                    "_type": "OppdragRapport"
                  }}
                ]
              }
            },
            {
              "bool": {
                "should": [
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "hedmark"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "nordland"
                    }
                  },
                  {
                    "term": {
                      "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "troms"
                    }
                  }
                ]              
              } 
            }
          ]
        }
      }
    }
  }
}