<template>
  <h1>Simple Tag</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page puts the value of the query parameter ("xss") into the value attribute of a value tag.
      This is done with setting innerHTML (v-html="xss") and is not considered best practice.
      <div class="vulnerability-info-container">
        <label>Has XSS vulnerability:</label>
        <div>Yes</div>

        <ExampleButton location='/simpleTag?xss=&lt;img src=/xss-meme.jpg onload=alert(1) /&gt;'/>
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
  name: "SimpleTag",
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
