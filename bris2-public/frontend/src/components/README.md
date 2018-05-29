# Components

Contains main components for app, mostly encapsulates other components.

## Dashboard.vue

Displays **Box** components in a grid.

## Box.vue

Empty box to represent a dashboard element.

## Report.vue

Stub site to represent reports.

## Search.vue

Uses 
* **SearchBox**
* **SearchResult**
* **FilterSection**

components.  

Holds 
* **FilterDefinitions**
* **ElasticClient**
* **Query**

instances.

Implements methods to handle
* Update filters.
* Reset filters.
* Update search result.

Receives **filterUpdate** events and calls approprate method to handle changes done in filters.  
Uses **reset** prop to tell **filter-section** to empty its children components.  
Uses **hits** prop to update **SearchResult**.  

A **FilterSection** is dynamically built based on each variable in the **FilterDefinitions** class.  
Currently it will build from FilterDefinitions.timeFilters, .locationFilters, .eventFilters and .resourceFilters.

## SearchBox.vue

Stub search box with no functionality, only styling.

## SearchResult.vue

Uses a table to show search results.
Gets a search result and uses **getFieldHelpers.js** functions to get values from it.
