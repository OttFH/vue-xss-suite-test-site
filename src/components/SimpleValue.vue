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

        <ExampleButton location='/simpleValue?xss="&gt;&lt;img src="/xss-meme.jpg" onload=alert(1) /&gt;&lt;input value="'/>
      </div>
    </div>
  </div>

  <div class="value-container">
    <label>Value:</label>
    <div v-html="xss"></div>
  </div>
</template>

<script>
import ExampleButton from '@/components/ExampleButton';

export default {
  name: "SimpleValue",
  data: () => {
    const params = new URLSearchParams(window.location.search);
    return {
      xss: `\u003Cinput name="xss" value="${params.get('xss')}"\u003E`,
    };
  },
  components: {
    ExampleButton,
  },
}
</script>

<style scoped>

</style>
