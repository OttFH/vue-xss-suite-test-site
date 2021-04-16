<template>
  <h1>Vue XSS Test Site</h1>

  <div>
    <h2>Description</h2>
    <div>
      This website is build with Vue3 and contains different types of common XSS vulnerabilities.
      The purpose is to use this site to test xss detection suites, to compare them.
      Not all pages have vulnerabilities, to test sensitivity and specificity.
    </div>
  </div>

  <div class="pages-list-container">
    <h3>Pages</h3>

    <div class="pages-list-group">
      <label>Simple</label>
      <div>
        <router-link to="/simpleTag?xss=234">Tag</router-link>
      </div>
      <div>
        <router-link to="/simpleValue?xss=234">Value</router-link>
      </div>
      <div>
        <router-link to="/simpleComment?xss=234">Comment</router-link>
      </div>
    </div>

    <div class="pages-list-group">
      <label>Escaping</label>
      <div>
        <router-link to="/escapingTag?xss=234">Tag</router-link>
      </div>
      <div>
        <router-link to="/escapingValue?xss=234">Value</router-link>
      </div>
      <div>
        <router-link to="/escapingComment?xss=234">Comment</router-link>
      </div>
      <div>
        <router-link to="/escapingHref?xss=234">Href</router-link>
      </div>
      <div>
        <router-link to="/escapingOnLoad?xss=234">Event Handler</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>

</style>
