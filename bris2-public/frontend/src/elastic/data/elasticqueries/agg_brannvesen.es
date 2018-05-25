GET /sambas/_search
{   
  "size": 0,
  "aggregations" : {
    "brannsvesen" : {
      "terms" : { 
        "field" : "indexed.oppdrag.brannvesenNavn.not_analyzed",
        "size" : 0
      }
    },
    "110sentral" : {
      "terms" : { 
        "field" : "indexed.oppdrag.sentral.hundreOgTiSentral.navn.not_analyzed",
        "size" : 500
      }
    },
    "oppdragsType" : {
      "terms" : { 
        "field" : "indexed.oppdrag.oppdragsType.not_analyzed",
        "size" : 500
      }
    },    
    "oppdragsType" : {
      "terms" : { 
        "field" : "indexed.oppdrag.revidertOppdragstype.navn.verdi.not_analyzed",
        "size" : 500
      }
    }
  }
}

GET /sambas/_search
{   
  "size": 0,
  "aggregations" : {
    "oppdragsType" : {
      "terms" : { 
        "field" : "indexed.oppdrag.ressurser.stasjonNavn",
        "size" : 5000,
        "order" : { "_term" : "desc" }
      }
    }
  }
}

GET /sambas/_search
{   
  "size": 0,
  "aggregations" : {
    "oppdragsType" : {
      "terms" : { 
        "field" : "indexed.sporsmal.229.tekst.not_analyzed",
        "size" : 5000,
        "order" : { "_term" : "desc" }
      }
    }
  }
}

GET /sambas/_search
{   
  "size": 0,
  "aggregations" : {
    "oppdragsType" : {
      "terms" : { 
        "field" : "indexed.sporsmal.208.tekst.not_analyzed",
        "size" : 5000,
        "order" : { "_term" : "asc" }
      }
    }
  }
}