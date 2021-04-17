<template>
  <h1>Read Data</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page displays the value of the data that is saved in the localStorage, which was posted on
      <router-link to="/postData">this page</router-link>, in a div tag.
    </div>
  </div>

  <div class="value-container">
    <label>Value:</label>
    <div v-html="data"></div>
  </div>
</template>

<script>
import {postDataKey} from '@/constants';

export default {
  name: "ReadData",
  data: () => ({
    data: localStorage.getItem(postDataKey) || '',
  }),
}
</script>

<style scoped>

</style>
