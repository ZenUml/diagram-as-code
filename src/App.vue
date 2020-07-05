<template>
  <div id="app">
    <codemirror
            ref="cmEditor"
            :value="code"
            :options="cmOptions"
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


vue.use(vuex)

const store = new vuex.Store(Store)
export default {
  name: 'App',
  data () {
    return {
      code: 'Example.method()',
      cmOptions: {
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'monokai',
        lineNumbers: true,
        line: true,
        autoCloseBrackets: true,
        // more CodeMirror options...
      }
    }
  },
  methods: {
    onCmCodeChange(newCode) {
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
      let code = that.$slots?.default?.[0]?.text || 'Example.method(1)'
      store.dispatch('updateCode', code)
      that.code = code
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
@import '~codemirror-theme-github/theme/github.css';
@import '~codemirror/theme/monokai.css';
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app .CodeMirror-linenumber {
  font-size: 1.2em;
}

#app pre,
#app .CodeMirror-gutter {
  font-family: Menlo, 'Fira Code', Monaco, source-code-pro, "Ubuntu Mono", "DejaVu sans mono", Consolas, monospace;
}
</style>
