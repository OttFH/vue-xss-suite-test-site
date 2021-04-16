<template>
  <h1>Escape OnLoad</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the escaped value of the query parameter ("xss") into the onload attribute of an img tag.
      It gets escaped by vue.
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
import escape from 'escape-html';

export default {
  name: "EscapingOnLoad",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: `\u003Cimg src="/xss-meme.jpg" alt="Funny Meme" onLoad="${escape(params.get('xss'))}"/\u003E`,
    };
  },
  methods: {
    loadExample() {
      window.location = '/escapingOnload?xss=alert(1)';
    },
  },
}
</script>

<style scoped>

</style>
