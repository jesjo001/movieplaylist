<template>
  <div class="container-fluid text-center">
      <h2>Error</h2>
      <h2>Ops somethng went wrong</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Error',
  props: {
    status: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
