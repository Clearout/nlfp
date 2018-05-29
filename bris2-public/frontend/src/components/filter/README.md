# Filter components

Contains all specific filter and filter holder components.

## FilterSection.vue

This is a top level holder of a group of filters.

Uses **FilterBox** component.  
Propagates a **filterEvent** from each **FilterBox** child up to the parent **Search** component.

Each **FilterSection** gets a list of **FilterDefinition**.  
It will use each element in the list to create a **FilterBox**.

## FilterBox.vue

This component is a generic holder of the different types of filter components.  
It receives a **FilterDefinition** and decides based on its **Type** which specific filter component should be used.

Depending on **Type** in the **FilterDefinition** it will create a
* **CategoryFilter**
* **InputFilter** 
* **SelectFilter**
* **TimeFilter**

It will pass to the specific filter components its **FilterDefinition**.  
It will propagate a **filterEvent** from its children filter component to its parent **FilterSection**.  


## CategoryFilter.vue

Filter that supports multi select on multiple options with multiple values each.  
This utilizes the [vue-multiselect](https://github.com/shentao/vue-multiselect) component.  

Selections will apply a filter in the form of:
```
Option1 : Value1 OR Value2 OR ... OR Value N
AND
Option2 : Value1 OR Value2 OR ... OR Value N
AND
...
AND
OptionN : Value1 OR Value2 OR ... OR Value N
```
Use has been to have multiple questions as options and their each of their answers as values.

Emits a **filterEvent** when a change occurs.  

## InputFilter.vue

This is a pure user input filter.  
Supports text and number input.

Will apply a filter of simple text or number match against fields. 

Emits a **filterEvent** when a change occurs.  

## SelectFilter.vue

Filter that supports multi select on a single option with multiple values.  
This utilizes the [vue-search-select](https://github.com/moreta/vue-search-select) component.

Will apply a filter in the form of 
```
Option1 = Value1 OR Value2 OR ... OR ValueN
```
Use has been for allowing multi selection of region field as the option and the possible regions as the values.

## TimeFilter.vue

Unfinished implementation of a time filter.  
Utilizes the [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker) component.