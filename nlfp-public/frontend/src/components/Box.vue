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

<style scoped>
.dashboard-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid firebrick;
  border-width: 2px 2px 2px 2px;
}
</style>
