<template>
  <div id="app">
    <codemirror
            ref="cmEditor"
            :value="code"
            :options="cmOptions"
            @ready="onCmReady"
            @focus="onCmFocus"
            @input="onCmCodeChange"
    />
    <SeqDiagram/>
  </div>
</template>

<script>
import vue from 'vue'
import vuex from 'vuex'
import {Store, SeqDiagram} from 'vue-sequence'
import {codemirror} from 'vue-codemirror'

// import language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/edit/closebrackets.js'

// import theme style
import 'codemirror/theme/base16-dark.css'

vue.use(vuex)

const store = new vuex.Store(Store)
export default {
  name: 'App',
  data () {
    return {
      code: 'const a = 10',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-dark',
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
        // more CodeMirror options...
      }
    }
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focused!', cm)
    },
    onCmCodeChange(newCode) {
      console.log('this is new code', newCode)
      this.code = newCode
      store.dispatch('updateCode', newCode || 'Example.method()')
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    }
  },
  store,
  mounted() {
    const that = this
    setTimeout(() => {
      store.dispatch('updateCode', that.$slots?.default?.[0]?.text || 'Example.method()')
    })
  },
  components: {
    SeqDiagram,
    codemirror
  }
}
</script>

<style>
@import '~vue-sequence/dist/vue-sequence.css';
@import '~codemirror/lib/codemirror.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
