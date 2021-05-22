<template>
  <div class="home">
    <h1>Pie chart here</h1>
    <pie-chart :data=returnedData></pie-chart>
  </div>
</template>

<script>

export default {
  name: "PieChartComponent",
  data() {
    return {
      chartData: []  
    }
  },
  computed: {
    returnedData() {
      return this.$store.getters.getData
    }
  },
  methods: {
   pieChartData() {
      this.chartData = Object.entries(this.returnedData);
   }
  },
  mounted() {
    this.$store.dispatch('pullData')
    this.pieChartData()
  }
};
</script>
