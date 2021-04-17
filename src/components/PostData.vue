<template>
  <h1>Post Data</h1>
  <div>
    <h2>Description</h2>
    <div>
      This page writes the value into localStorage and displays it on
      <router-link to="/readData">this page</router-link>.
    </div>
  </div>

  <div class="value-container">
    <label>
      Value:
      <br/>
      <input name="xss" ref="xss"/>
    </label>
    <br/>
    <button v-on:click="post">Post</button>
  </div>
</template>

<script>
import {postDataKey} from '@/constants';

export default {
  name: "PostData",
  methods: {
    post() {
      localStorage.setItem(postDataKey, this.$refs.xss.value);
    },
  },
}
</script>

<style scoped>

</style>
