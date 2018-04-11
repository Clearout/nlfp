export function getTime(hit) {
  let dateTime =
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.registrertBrannvesen
      ? hit._source.indexed.oppdrag.registrertBrannvesen
      : null;
  let str = dateTime && dateTime[0] ? dateTime[0].substr(dateTime[0].length - 8) : '';
  return str;
}
export function getDate(hit) {
  let date =
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.registrertBrannvesen
      ? hit._source.indexed.oppdrag.registrertBrannvesen
      : null;
  return date && date[1] ? date[1] : '';
}
export function getRevidertOppdragstype(hit) {
  return hit &&
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.revidertOppdragstype &&
    hit._source.indexed.oppdrag.revidertOppdragstype.navn &&
    hit._source.indexed.oppdrag.revidertOppdragstype.navn.verdi
    ? hit._source.indexed.oppdrag.revidertOppdragstype.navn.verdi
    : '';
}
export function getKommune(hit) {
  return hit &&
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.adresse &&
    hit._source.indexed.oppdrag.adresse.kommune &&
    hit._source.indexed.oppdrag.adresse.kommune.kommunenavn
    ? hit._source.indexed.oppdrag.adresse.kommune.kommunenavn
    : '';
}

export function getFylke(hit) {
  return hit &&
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.adresse &&
    hit._source.indexed.oppdrag.adresse.kommune &&
    hit._source.indexed.oppdrag.adresse.kommune.fylke &&
    hit._source.indexed.oppdrag.adresse.kommune.fylke.fylkenavn
    ? hit._source.indexed.oppdrag.adresse.kommune.fylke.fylkenavn
    : '';
}

export function getBrannOgRedningsvesen(hit) {
  return hit &&
    hit._source &&
    hit._source.indexed &&
    hit._source.indexed.oppdrag &&
    hit._source.indexed.oppdrag.brannvesenNavnForGruppering
    ? hit._source.indexed.oppdrag.brannvesenNavnForGruppering
    : '';
}
