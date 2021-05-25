<template>
  <div class="home">
    <h1>Pie chart here</h1>
    <pie-chart :data=returnedData :download="true"></pie-chart>
  </div>
</template>

<style>
div {
  margin: 0 auto;
  width: 70%;
}
</style>
<script>
export default {
  name: "PieChartComponent",
  computed: {
    returnedData() {
      return this.$store.getters.getData
    }
  },
  created() {
    this.$store.dispatch('pullData')
  }
};
</script>
