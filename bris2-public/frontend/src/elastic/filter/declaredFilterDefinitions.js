import Filter from './filter';
import { FilterDefinition, mapSortFormatEntry, mapSortEntry, Type } from './filterDefinition';

import filters from './filters';
import fylkeFile from '../data/fylker';
import kommuneFile from '../data/kommuner';
import brannvesenFile from '../data/brannvesen';
import hundreOgTiSentralFile from '../data/hundreOgTiSentral';
import revidertHendelsesTypeFile from '../data/revidertHendelsesType';

export default class DeclaredFilterDefinitions {
  constructor() {
    this.fylke = new FilterDefinition(
      'Fylke',
      mapSortEntry(fylkeFile.entries, 'navn', 'navn'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.fylke, '')
    );
    this.kommune = new FilterDefinition(
      'Kommune',
      mapSortEntry(kommuneFile.kommuner, 'navn', 'navn'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.kommune, '')
    );
    this.brannvesen = new FilterDefinition(
      'Brannvesen',
      mapSortFormatEntry(brannvesenFile.brannvesen, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.brannvesen)
    );
    this.hundreOgTiSentral = new FilterDefinition(
      '110 Sentral',
      mapSortFormatEntry(hundreOgTiSentralFile.hundreOgTiSentral, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.hundreOgTiSentral)
    );
    this.revidertHendelsesType = new FilterDefinition(
      'Revidert Hendelsestype',
      mapSortFormatEntry(revidertHendelsesTypeFile.revidertHendelsesType, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.revidertHendelsesType)
    );
    this.adresse = new FilterDefinition(
      'Adresse',
      'text',
      Type.input,
      new Filter(filters.modifier.should, filters.type.term, filters.field.adresse)
    );
    this.postnr = new FilterDefinition(
      'Postnummer',
      'number',
      Type.input,
      new Filter(filters.modifier.should, filters.type.term, filters.field.postnr)
    );
    this.registrertBrannvesen = new FilterDefinition(
      'Tidsperiode',
      '',
      Type.time,
      new Filter(filters.modifier.should, filters.type.term, filters.field.registrertBrannvesen)
    );
  }
}
