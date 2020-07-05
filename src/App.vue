<template>
  <div id="app">
    <SeqDiagram/>
  </div>
</template>

<script>
import vue from 'vue'
import vuex from 'vuex'
import {Store, SeqDiagram} from 'vue-sequence'

vue.use(vuex)

const store = new vuex.Store(Store)
export default {
  name: 'App',
  store,
  components: {
    SeqDiagram
  }
}
</script>

<style>
@import '~vue-sequence/dist/vue-sequence.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
