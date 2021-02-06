<template>
  <div v-on:click="onClickHandler()">
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2 1.4H1.79999V15.4H18.2V1.4Z" stroke="white" stroke-width="2"/>
      <path d="M2.22858 6.36055L8.79999 6.4" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08028L8.84406 6.36055" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08027V1.6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10.6984 12.1492H8.88438L8.63477 13H7.00703L8.94414 7.84609H10.6809L12.618 13H10.9516L10.6984 12.1492ZM10.3645 11.0348L9.79492 9.18203L9.22891 11.0348H10.3645Z" fill="white"/>
    </svg>
    <label>SyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'Creation',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'if(condition){\n  A.method\n}\n'
        this.$store.dispatch('updateCode', newCode);
      }
    }
  }
</script>
