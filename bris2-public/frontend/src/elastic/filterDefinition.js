import Filter from './filter';
import filters from './filters';
import fylkeFile from './data/fylker';
import kommuneFile from './data/kommuner';
import brannvesenFile from './data/brannvesen';

export default class FilterDefinitions {
  constructor() {
    this.timeFilters = {
      title: 'Når?',
      filters: []
    };
    this.locationFilters = {
      title: 'Hvor?',
      filters: [fylke, kommune]
    };
    this.eventFilters = {
      title: 'Hva?',
      filters: []
    };
    this.resourceFilters = {
      title: 'Ressurser',
      filters: [brannvesen]
    };
  }
}

class FilterDefinition {
  constructor(title, options, type, filter) {
    this.title = title || '';
    this.options = options || [];
    this.type = type;
    this.filter = filter;
  }
}

const type = {
  select: 'select',
  input: 'input',
  date: 'date'
};

let fylke = new FilterDefinition(
  'Fylke',
  fylkeFile.entries
    .map(entry => (entry = { value: entry.navn, text: entry.navn }))
    .sort(function(a, b) {
      return a.text.localeCompare(b.text);
    }),
  type.select,
  new Filter(filters.modifier.should, filters.type.term, filters.location.fylke, '')
);
let kommune = new FilterDefinition(
  'Kommune',
  kommuneFile.kommuner
    .map(entry => (entry = { value: entry.navn, text: entry.navn }))
    .sort(function(a, b) {
      return a.text.localeCompare(b.text);
    }),
  type.select,
  new Filter(filters.modifier.should, filters.type.term, filters.location.kommune, '')
);
let brannvesen = new FilterDefinition(
  'Brannvesen',
  brannvesenFile.brannvesen
    .map(
      entry =>
        (entry = {
          value: entry.key,
          text: entry.key
            .split(' ')
            .map(
              word =>
                word === 'iks'
                  ? (word = 'IKS')
                  : word === 'og'
                    ? 'og'
                    : word === 'kf' ? 'KF' : (word = word.charAt(0).toUpperCase() + word.substr(1))
            )
            .join(' ')
        })
    )
    .sort(function(a, b) {
      return a.text.localeCompare(b.text);
    }),
  type.select,
  new Filter(filters.modifier.should, filters.type.term, filters.location.brannvesen)
);
