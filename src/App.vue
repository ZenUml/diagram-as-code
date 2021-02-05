<template>
  <div class="diagram-as-code" :class="{noEditor: !showEditor}">
    <div ref="left" class="split" v-show="showEditor">
      <codemirror
          ref="cmEditor"
          :code="dsl"
          :options="cmOptions"
          @input="onCmCodeChange"

      />
    </div>
    <div ref="right" class="split">
      <SeqDiagram/>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
import vuex from 'vuex'
import {Store, SeqDiagram, BuildTime, Version} from 'vue-sequence'
import {codemirror} from 'vue-codemirror'
import Split from 'split.js'

// import language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/edit/closebrackets.js'

vue.use(vuex)

export default {
  name: 'App',
  props: ['showEditor'],
  data () {
    return {
      BuildTime: BuildTime,
      Version: Version,
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
      this.$store.dispatch('updateCode', newCode || 'Example.method()')
    }
  },
  computed: {
    codemirror() {
      return this.$refs.cmEditor.codemirror
    },
    dsl() {
      return this.$store.state.code
    }
  },
  store() {
    return new vuex.Store(Store())
  },
  mounted() {
    const that = this
    setTimeout(() => {
      let code = that.$slots?.default?.[0]?.text || 'Example.method(1)'
      that.$store.dispatch('updateCode', code)
    })
    if (this.showEditor) {
      Split([this.$refs['left'], this.$refs['right']], { sizes: [35, 65]})
      this.codemirror.on('cursorActivity', () => {
        const cursor = that.codemirror.getCursor();
        const line = cursor.line;
        let pos = cursor.ch;

        for (let i = 0; i < line; i++) {
          pos += that.codemirror.getLine(i).length + 1
        }

        that.$store.state.cursor = pos
      })
    } else {
      Split([this.$refs['left'], this.$refs['right']], { sizes: [0, 100]})
    }
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
@import '~codemirror/theme/monokai.css';

.diagram-as-code {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.diagram-as-code .CodeMirror {
  height: 100%;
}

.diagram-as-code .CodeMirror-linenumber {
  font-size: 1.2em;
}

.diagram-as-code .splitpanes__splitter {
  width: 5px;
}
.diagram-as-code .CodeMirror pre,
.diagram-as-code .CodeMirror .CodeMirror-gutter {
  font-family: Menlo, 'Fira Code', Monaco, source-code-pro, "Ubuntu Mono", "DejaVu sans mono", Consolas, monospace;
}

.gutter {
  background-color: #eee;

  background-repeat: no-repeat;
  background-position: 50%;
}

.gutter.gutter-horizontal {
  cursor: col-resize;
  height: 100%;
}
.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
}

.noEditor>.gutter-horizontal {
  display: none;
}
.split,
.gutter.gutter-horizontal {
  float: left;
  height: 100%;
}

.split {
  box-sizing: border-box;
  overflow: scroll;
}
</style>
