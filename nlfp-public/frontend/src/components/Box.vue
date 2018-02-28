<template>
  <div id="box-root" class="dashboard-box">
    <p>{{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['index', 'text']
}
</script>

<style scoped lang="scss">
@import '../assets/main.scss';

.dashboard-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid $bris-color;
  border-radius: 10px;
}
</style>
