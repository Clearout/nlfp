POST /sambas/OppdragRapport/_search
{
    "query": {
        "constant_score": {
            "filter": {
                "bool": {
                    "must": [
                        {
                            "bool": {
                                "should": [
                                    {
                                        "term": {
                                            "indexed.oppdrag.sentral.hundreOgTiSentral.navn.not_analyzed": "110 hordaland"
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

POST /sambas/OppdragRapport/_search
{
    "query": {
        "constant_score": {
            "filter": {
                "bool": {
                    "should": [
                        {
                            "bool": {
                                "should": [
                                    {
                                        "term": {
                                            "indexed.oppdrag.adresse.adresseLinje.not_analyzed": "kongshaugvegen 32"
                                        }
                                    },
                                    {
                                        "term": {
                                            "indexed.oppdrag.adresse.adresseLinje2.not_analyzed": "vaulenveien 25"
                                        }
                                    },
                                    {
                                        "term": {
                                            "indexed.oppdrag.adresse.adresseLinjer.not_analyzed": "vaulenveien 25"
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

POST /sambas/OppdragRapport/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "bool": {
          "should": [
            {
              "bool": {
                "must": [
                  {
                    "term": {
                      "indexed.sporsmal.229.tekst": "annet"
                    }
                  },
                  {
                    "term": {
                      "indexed.sporsmal.101.tekst": "ja"
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

POST /sambas/OppdragRapport/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "bool": {
          "should": [
            {
              "bool": {
                "must": [
                  {
                    "term": {
                      "indexed.sporsmal.227.tekst.not_analyzed": "kjøkken"
                    }
                  },
                  {
                    "term": {
                      "indexed.sporsmal.209.tekst.not_analyzed": "enebolig"
                    }
                  },
                  {
                    "term": {
                      "indexed.sporsmal.225.tekst.not_analyzed": "automatisk brannalarm"
                    }
                  }
                ]
              }
            }
          ],
          "must" : [         
            {
              "term": {
                "indexed.oppdrag.adresse.kommune.fylke.fylkenavn": "vestfold"
              }
            }
          ]
        }
      }
    }
  }
}

POST /sambas/OppdragRapport/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "bool": {
          "must":
            {
              "term": {
                "indexed.sporsmal.267.valgt.not_analyzed": "skolebygning, universitet- og høgkolebygning"
              }
            }
          }
        }
      }
    }
  }

POST /sambas/OppdragRapport/_search
{
  "query": {
    "constant_score": {
      "filter": {
        "bool": {
          "must": [
            {
              "bool": {
                "should": [
                  {
                    "term": {
                      "indexed.oppdrag.sentral.hundreOgTiSentral.navn.not_analyzed": "110 hordaland "
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    }
  },
  "size": 10
}