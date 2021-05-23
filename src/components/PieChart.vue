<template>
  <div class="home">
    <h1>Pie chart here</h1>
    <pie-chart :data=returnedData></pie-chart>
  </div>
</template>

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
