<template>
  <h1>Simple Comment</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the value of the query parameter ("xss") into a HTML comment.
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
    Open source code of page to see it.
  </div>
</template>

<script>
export default {
  name: "SimpleComment",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: `\u003C!-- ${params.get('xss')} --\u003E`,
    };
  },
  methods: {
    loadExample() {
      window.location = '/simpleComment?xss=--\u003E\u003Cimg src="/xss-meme.jpg" onload=alert(1) /\u003E\u003C!--';
    },
  },
}
</script>

<style scoped>

</style>
