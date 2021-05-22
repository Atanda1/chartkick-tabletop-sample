<template>
  <div class="home">
    <PieChartComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import PieChartComponent from "@/components/PieChart.vue";

export default {
  name: "Home",
  components: {
    PieChartComponent,
  },
};
</script>
