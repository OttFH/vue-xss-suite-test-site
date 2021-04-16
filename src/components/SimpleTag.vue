<template>
  <h1>Simple Comment</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the value of the query parameter ("xss") into the value attribute of a value tag.
      This is done with setting innerHTML (v-html="xss") and is not considered best practice.
      <div class="vulnerability-info-container">
        <label>Has XSS vulnerability:</label>
        <div>Yes</div>
        <button v-on:click="loadExample()">
          Example
        </button>
      </div>
    </div>
  </div>

  <div class="value-container">
    <label>Value:</label>
    <div v-html="xss"></div>
  </div>
</template>

<script>
export default {
  name: "SimpleTag",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: params.get('xss'),
    };
  },
  methods: {
    loadExample() {
      window.location = '/simpleTag?xss=\u003Cimg src=/xss-meme.jpg onload=alert(1) /\u003E';
    },
  },
}
</script>

<style scoped>

</style>
