# elasticClient.js

## ElasticClient
The **ElasticClient** class contains the interface between the client application and Elasticsearch.  
It sets the connection values to the Go proxy, Elasticsearch index and document type.

It implements functions for network calls and callbacks for the search and count queries.  
These take naive parameters of the **Query** class, current app instance and a callback method.

# getFieldHelpers.js

Collection of helper functions to get certain fields from an Elasticsearch query result  
if they are not empty / exists etc.  
Used to present data in the **SearchResult.vue** component.

# query.js

## Query
The **Query** class handles the building of the outer parts of an Elasticsearch query.  
It implements functions for adding / updating / removing filters to be applied to the query  
as well as initial / reset / failure / null cases.  
**Query** expects to receive and handle objects from the **Filter** class. 
