<template>
  <div class="home">
    <PieCHart />
  </div>
</template>

<script>
// @ is an alias to /src
import PieCHart from "@/components/PieChart.vue";

export default {
  name: "Home",
  components: {
    PieCHart,
  },
};
</script>
