<template>
  <h1>Simple Value</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the value of the query parameter ("xss") into a div tag.
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
  name: "SimpleValue",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: `\u003Cinput name="xss" value="${params.get('xss')}"\u003E`,
    };
  },
  methods: {
    loadExample() {
      window.location = '/simpleValue?xss="\u003E\u003Cimg src="/xss-meme.jpg" onload=alert(1) /\u003E\u003Cinput value="';
    },
  },
}
</script>

<style scoped>

</style>
