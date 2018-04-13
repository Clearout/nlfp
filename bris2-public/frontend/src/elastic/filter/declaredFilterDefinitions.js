import Filter from './filter';
import {
  FilterDefinition,
  mapSortFormatEntry,
  mapSortEntry,
  mapSortFormatAndEnrichNestedQuestionEntry,
  categoryFilters,
  Type
} from './filterDefinition';

import filters from './filters';
import fylkeFile from '../data/fylker';
import kommuneFile from '../data/kommuner';
import brannvesenFile from '../data/brannvesen';
import hundreOgTiSentralFile from '../data/hundreOgTiSentral';
import revidertHendelsesTypeFile from '../data/revidertHendelsesType';
import bakgrunnOgOmfangFile from '../data/bakgrunnOgOmfang';
import stedOgBygningFile from '../data/stedOgBygning';

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
      'Brann- og Redningsvesen',
      mapSortFormatEntry(brannvesenFile.brannvesen, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.brannvesen)
    );
    this.hundreOgTiSentral = new FilterDefinition(
      '110- Sentral',
      mapSortFormatEntry(hundreOgTiSentralFile.hundreOgTiSentral, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.hundreOgTiSentral)
    );
    this.stasjonsnavnDummy = new FilterDefinition(
      'Stasjonsnavn',
      null,
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.hundreOgTiSentral)
    );
    this.bilerDummy = new FilterDefinition(
      'Biler',
      null,
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.hundreOgTiSentral)
    );
    this.hendelsesType = new FilterDefinition(
      'Opprinnelig Hendelsestype',
      null, // mapSortFormatEntry(revidertHendelsesTypeFile.revidertHendelsesType, 'key', 'key'),
      Type.select,
      new Filter(filters.modifier.should, filters.type.term, filters.field.hendelsesType)
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
      'Tid på Døgnet',
      '',
      Type.time,
      new Filter(filters.modifier.should, filters.type.term, filters.field.registrertBrannvesen)
    );
    this.weekdayDummy = new FilterDefinition(
      'Ukedag',
      '',
      Type.time,
      new Filter(filters.modifier.should, filters.type.term, filters.field.registrertBrannvesen)
    );
    this.monthDummy = new FilterDefinition(
      'Måned',
      '',
      Type.time,
      new Filter(filters.modifier.should, filters.type.term, filters.field.registrertBrannvesen)
    );
    this.yearDummy = new FilterDefinition(
      'År',
      '',
      Type.time,
      new Filter(filters.modifier.should, filters.type.term, filters.field.registrertBrannvesen)
    );
    this.bakgrunnOgOmfang = new FilterDefinition(
      'Bakgrunn og Omfang',
      mapSortFormatAndEnrichNestedQuestionEntry(bakgrunnOgOmfangFile.groups),
      Type.category,
      categoryFilters(filters.modifier.should, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.stedOgBygning = new FilterDefinition(
      'Sted og Bygning',
      mapSortFormatAndEnrichNestedQuestionEntry(stedOgBygningFile.groups),
      Type.category,
      categoryFilters(filters.modifier.should, filters.type.term, filters.field.stedOgBygning)
    );
    this.innsatsOgOppgaverDummy = new FilterDefinition(
      'Innsats og Oppgaver',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.spredningDummy = new FilterDefinition(
      'Spredning',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.ressurserDummy = new FilterDefinition(
      'Ressurser',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.farligStoffOgForurensningDummy = new FilterDefinition(
      'Farlig Stoff og Forurensning',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.personDummy = new FilterDefinition(
      'Person',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.personskaderOgOmkomneDummy = new FilterDefinition(
      'Personskader og Omkomne',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.reddedeDummy = new FilterDefinition(
      'Reddede',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.andreSkaderDummy = new FilterDefinition(
      'Andre Skader',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.vurderingAvHendelseDummy = new FilterDefinition(
      'Vurdering av Hendelse',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
    this.politiDummy = new FilterDefinition(
      'Politiårsak',
      null,
      Type.category,
      new Filter(filters.modifier.must, filters.type.term, filters.field.bakgrunnOgOmfang)
    );
  }
}
