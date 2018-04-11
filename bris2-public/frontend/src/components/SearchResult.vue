<template>
  <div id="search-result-root">
    <h2 v-if="hits" class="text-center">Søkeresultat</h2>
    <b-card v-if="hits" class="border-dark">
      <b-card-header class="search-result-header" >
        <h5 class="d-inline">
          {{total}} treff i Oppdrag
        </h5>
        <h5 class="d-inline float-right">
          Viser {{hits.length}} av {{total}}
        </h5>
      </b-card-header>
      <b-card-body>
        <b-table hover  class="border" :items="items"></b-table>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  getTime,
  getDate,
  getRevidertOppdragstype,
  getKommune,
  getFylke,
  getBrannOgRedningsvesen
} from '../elastic/getFieldHelpers';

function mapHitsToItem(hits) {
  return hits.map(
    hit =>
      (hit = {
        dato: getDate(hit),
        tidspunkt: getTime(hit),
        revidertOppdragstype: getRevidertOppdragstype(hit),
        fylke: getFylke(hit),
        kommune: getKommune(hit),
        brannOgRedningsvesen: getBrannOgRedningsvesen(hit)
      })
  );
}

export default {
  name: 'SearchResult',
  props: ['hits', 'total'],
  components: {},
  data() {
    return {
      fields: this.getFields()
    };
  },
  methods: {
    getFields() {
      return [
        'Dato',
        'Tidspunkt',
        'Revidert Oppdragstype',
        'Fylke',
        'Kommune',
        'Brann- og Redningsvesen'
      ];
    }
  },
  computed: {
    items: function() {
      return this.hits ? mapHitsToItem(this.hits) : [];
    }
  }
};
</script>

<style scoped lang="scss">
@import '../assets/main';

.search-result-header {
  border: 0;
  background-color: $white;
}
</style>
