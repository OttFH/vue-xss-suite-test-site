<template>
  <h1>Escape Href</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the escaped value of the query parameter ("xss") into the href attribute of an a tag.
      It gets escaped by vue.
      <div class="vulnerability-info-container">
        <label>Has XSS vulnerability:</label>
        <div>Yes</div>

        <ExampleButton location='/escapingHref?xss=javascript:alert(1)'/>
      </div>
    </div>
  </div>

  <div class="value-container">
    <label>Click here:</label>
    <br>
    <a v-bind:href="xss">Link</a>
  </div>
</template>

<script>
import ExampleButton from "@/components/ExampleButton";

export default {
  name: "EscapingHref",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: params.get('xss'),
    };
  },
  components: {
    ExampleButton,
  },
}
</script>

<style scoped>

</style>
