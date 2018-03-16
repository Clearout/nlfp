import DeclaredFilterDefinitions from './declaredFilterDefinitions';
/* eslint-disable */

export default class FilterDefinitions {
  constructor() {
    let _ = new DeclaredFilterDefinitions();
    this.timeFilters = {
      title: 'Når?',
      filters: [_.registrertBrannvesen]
    };
    this.locationFilters = {
      title: 'Hvor?',
      filters: [_.fylke, _.kommune, _.postnr, _.adresse]
    };
    this.eventFilters = {
      title: 'Hva?',
      filters: [_.revidertHendelsesType]
    };
    this.resourceFilters = {
      title: 'Ressurser',
      filters: [_.brannvesen, _.hundreOgTiSentral]
    };
  }
}

export class FilterDefinition {
  constructor(title, options, type, filter) {
    this.title = title || '';
    this.options = options || [];
    this.type = type;
    this.filter = filter;
  }
}

const lowerCaseWords = new RegExp(/\b(og|i|på)(\b| |$)/);
const upperCaseWords = new RegExp(/\b(iks|kf|as|aba)(\b| |$)/);
const split = new RegExp(/( |-|\/)/);

export const Type = {
  select: 'select',
  input: 'input',
  time: 'time'
};

export function mapSortEntry(array, valueToMap, textToMap) {
  return array
    .map(
      entry =>
        (entry = {
          value: entry[valueToMap],
          text: entry[textToMap]
        })
    )
    .sort(function(a, b) {
      return a.text.localeCompare(b.text);
    });
}

export function mapSortFormatEntry(array, valueToMap, textToMap) {
  return array
    .map(
      entry =>
        (entry = {
          value: entry[valueToMap],
          text: entry[textToMap]
            .split(split)
            .map(
              word =>
                word.match(lowerCaseWords)
                  ? word
                  : word.match(upperCaseWords)
                    ? word.toUpperCase()
                    : (word = word.charAt(0).toUpperCase() + word.substr(1))
            )
            .join('')
        })
    )
    .sort(function(a, b) {
      return a.text.localeCompare(b.text);
    });
}
