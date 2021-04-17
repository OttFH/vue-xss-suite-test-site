<template>
  <div class="example-info-container">
    <div>
      <button v-on:click="toggle">
        {{ enableExamples ? 'Disable examples' : 'Enable examples' }}
      </button>
    </div>
    <p>
      <i>This disables and enables the example buttons on every page with a vulnerability.</i>
    </p>
  </div>
</template>

<script>
import {exampleKey} from "@/constants";

export default {
  name: "ToggleExamples",
  data: () => ({
    enableExamples: localStorage.getItem(exampleKey) === 'true',
  }),
  methods: {
    toggle() {
      this.enableExamples = !this.enableExamples;
      localStorage.setItem(exampleKey, this.enableExamples.toString());
    },
  },
}
</script>

<style scoped>

</style>
