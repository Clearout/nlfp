# declaredFilterDefinitions.js

Collection class to declare and instantiate all filterDefinitions with their settings.
Each is an instationation of the **FilterDefiniton** class. 

# filter.js

## Filter
Class to build dynamically any filter type which has been identified so far. 
A filter will be built in the structure of:
```javascript
bool : {
  // must, must_not or should.
  modifier: [
    {
      // range, term or match.
      type: {
        // Example field fylke: "indexed.oppdrag.adresse.kommune.fylke.fylkenavn.not_analyzed".
        // Value is either direct user input or a selection of values from possible ones.
        field: value
      }
    }
  ]
}
```

Fields and values can also be lists which may produce any combination of queries.
```javascript
{
  field1: value1,
  ...
  fieldN: value1,
  
  ...

  field1: valueN,
  ...
  fieldN: valueN
}
```
Also handles adding / updating / removing of values to a **Filter**

# filterDefinition.js

## FilterDefinitions
The **FilterDefinitions** class handles instantiation and declaration of filter categories.  
It gets the already declared **FilterDefintion** from the **DeclaredFilterDefinitions** class.  
This decides the order and category of filters which the Vue app will dynamically build. 

## FilterDefinition
**FilterDefinition** class requires these values:
* Title
* Processed possible filter values 
* Vue filter component
* **Filter**

## Type
**Type** specifies which Vue component will utilize the **FilterDefinition**.

File also contains some helper functions to correctly map, sort and capitalize the possible filter values used.

# filters.json

Collection of **Filter** class values.

* field - field in the Elasticsearch index. A list is used when targeting multiple fields in a filter.
* modifier - types of filter modifiers.
* type - types of Elasticsearch filters.
