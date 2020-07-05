# diagram-as-code

The goal is to create a web component that wraps the editor and and viewer to be used by the
confluence server plugin.

It looks like this.

### MVP 1 - ZenUML only
```
<diagram-as-code show-editor="false">
//DSL
A.method
</diagram-as-code>
```

### MVP 2 - ZenUML + Mermaid
```
<diagram-as-code show-editor="false" diagram-type="mermaid">
//DSL
A-->B;
</diagram-as-code>
```

### MVP 3 - ZenUML + Mermaid + Theme
```
<diagram-as-code show-editor="false" diagram-type="mermaid" theme="theme1">
//DSL
A-->B;
</diagram-as-code>
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Test the web component locally

1. Install `live-server` with `npm install -g live-server`
2. Build the web component with `watch 'yarn build' src`
3. Open the browser.

#### Trouble-shooting

https://stackoverflow.com/questions/51346334/npm-live-server-not-auto-reloading

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
