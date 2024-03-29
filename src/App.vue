<template>
  <div class="diagram-as-code" :class="{noEditor: !showEditor}">
    <div ref="left" class="split" v-show="showEditor">
      <toolbox/>
      <codemirror
          ref="cmEditor"
          :code="dsl"
          :options="cmOptions"
          @input="onCmCodeChange"
      />
    </div>
    <div ref="right" class="split">
      <DiagramFrame/>
    </div>
  </div>
</template>

<script>
import vue from 'vue'
import vuex from 'vuex'
import {VueSequence} from 'vue-sequence'
import {codemirror} from 'vue-codemirror'
import Split from 'split.js'
import Toolbox from './Toolbox'
import _ from 'lodash'

// import language js
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/addon/edit/closebrackets.js'

const Store = VueSequence.Store
const DiagramFrame = VueSequence.DiagramFrame
const BuildTime = VueSequence.BuildTime
const Version = VueSequence.Version
vue.use(vuex)

const EventBus = new vue()
export default {
  name: 'App',
  props: ['showEditor'],
  data () {
    return {
      BuildTime: BuildTime,
      Version: Version,
      mark: undefined,
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
      let pos = undefined;
      if (this.showEditor) {
        const cursor = this.codemirror.getCursor();
        const line = cursor.line;
        pos = cursor.ch;

        for (let i = 0; i < line; i++) {
          pos += this.codemirror.getLine(i).length + 1
        }
      }
      this.$store.dispatch('updateCode', {code: newCode, cursor: pos })
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
    const storeConfig = Store()
    storeConfig.state.onElementClick = (codeRange) => {
      EventBus.$emit('highlight', codeRange)
    }
    return new vuex.Store(storeConfig)
  },
  mounted() {
    const that = this
    EventBus.$on('highlight', (codeRange) => {
      if (this.mark) {
        this.mark.clear()
      }
      this.mark = this.codemirror.markText({
        line: codeRange.start.line-1, ch: codeRange.start.col
      }, {
        line: codeRange.stop.line-1, ch: codeRange.stop.col
      }, {css: 'background: gray'})
    })
    setTimeout(() => {
      let defaultMessage = `// Async message
Client->Server: Client Hello
// Sync Message (Client is optional)
Client->Service.GetOrder(id)`
      let code = that.$slots?.default?.[0]?.text || defaultMessage
      that.$store.dispatch('updateCode', {code})
    })
    if (this.showEditor) {
      Split([this.$refs['left'], this.$refs['right']], { sizes: [35, 65]})
      this.codemirror.on('cursorActivity',_.debounce(() => {
        if (this.mark) {
          this.mark.clear()
        }
        const cursor = that.codemirror.getCursor();
        const line = cursor.line;
        let pos = cursor.ch;

        for (let i = 0; i < line; i++) {
          pos += that.codemirror.getLine(i).length + 1
        }
        that.$store.state.cursor = pos
      }, 500))
    } else {
      Split([this.$refs['left'], this.$refs['right']], { sizes: [0, 100]})
    }
  },
  components: {
    DiagramFrame,
    codemirror,
    Toolbox
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

.diagram-as-code .vue-codemirror,
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
