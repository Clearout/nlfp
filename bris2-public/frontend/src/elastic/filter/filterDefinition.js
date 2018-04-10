import DeclaredFilterDefinitions from './declaredFilterDefinitions';
import Filter from './filter';
/* eslint-disable */

export default class FilterDefinitions {
  constructor() {
    let _ = new DeclaredFilterDefinitions();
    this.timeFilters = {
      title: 'Når?',
      filters: [_.registrertBrannvesen, _.weekdayDummy, _.monthDummy, _.yearDummy]
    };
    this.locationFilters = {
      title: 'Hvor?',
      filters: [_.fylke, _.kommune, _.postnr, _.adresse]
    };
    this.eventFilters = {
      title: 'Hva?',
      filters: [
        _.hendelsesType,
        _.revidertHendelsesType,
        _.innsatsOgOppgaverDummy,
        _.spredningDummy,
        _.ressurserDummy,
        _.farligStoffOgForurensningDummy,
        _.stedOgBygningDummy,
        _.bakgrunnOgOmfang,
        _.personDummy,
        _.personskaderOgOmkomneDummy,
        _.reddedeDummy,
        _.andreSkaderDummy,
        _.innsatsOgOppgaverDummy,
        _.politiDummy
      ]
    };
    this.resourceFilters = {
      title: 'Ressurser',
      filters: [_.brannvesen, _.stasjonsnavnDummy, _.bilerDummy, _.hundreOgTiSentral]
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
  time: 'time',
  category: 'category'
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

export function mapSortFormatAndEnrichNestedQuestionEntry(array) {
  return array.map(
    group =>
      (group = {
        title: group.title,
        field: group.field,
        answers: group.answers.map(
          answer =>
            (answer = {
              name: answer.name.charAt(0).toUpperCase() + answer.name.substr(1),
              field: group.field
            })
        )
      })
  );
}

export function categoryFilters(modifier, type, fields) {
  let filters = [];
  fields.forEach(field => filters.push(new Filter(modifier, type, field)));
  console.log(filters);
  return filters;
}
