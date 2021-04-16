<template>
  <h1>Escape Value</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the escaped value of the query parameter ("xss") into the value attribute of a value tag.
      It gets escaped by vue.
      <div class="vulnerability-info-container">
        <label>Has XSS vulnerability:</label>
        <div>No</div>
      </div>
    </div>
  </div>

  <div class="value-container">
    <label>
      Value:
      <input name="xss" v-bind:value="xss">
    </label>
  </div>
</template>

<script>
export default {
  name: "EscapingValue",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: params.get('xss'),
    };
  },
}
</script>

<style scoped>

</style>
