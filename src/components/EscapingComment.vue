<template>
  <h1>Escape Comment</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the escaped value of the query parameter ("xss") into a comment.
      This is done with setting innerHTML (v-html="xss") and is not considered best practice.
      To escape the value the npm package 'escape-html' is used.
      <div class="vulnerability-info-container">
        <label>Has XSS vulnerability:</label>
        <div>No</div>
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
import escape from 'escape-html';

export default {
  name: "EscapingComment",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: `\u003C!-- ${escape(params.get('xss'))} --\u003E`,
    };
  },
}
</script>

<style scoped>

</style>
