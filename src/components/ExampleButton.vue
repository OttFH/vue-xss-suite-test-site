<template>
  <button v-if="enableExamples" v-on:click="loadExample">Example</button>
</template>

<script>
import {exampleKey} from '@/constants';

export default {
  name: "ExampleButton",
  props: {
    location: String,
  },
  data: () => ({
    enableExamples: localStorage.getItem(exampleKey) === 'true',
  }),
  methods: {
    loadExample() {
      window.location = this.location;
    },
  },
}
</script>

<style scoped>

</style>
