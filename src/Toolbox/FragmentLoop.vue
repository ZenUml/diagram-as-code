<template>
  <div v-on:click="onClickHandler()">
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2 1.4H1.79999V15.4H18.2V1.4Z" stroke="white" stroke-width="2"/>
      <path d="M2.22858 6.36055L8.79999 6.4" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08028L8.84406 6.36055" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08027V1.6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.52734 7.84609H9.11992V11.7309H11.6055V13H7.52734V7.84609Z" fill="white"/>
    </svg>
    <label>SyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'Creation',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'loop(condition){\n  A.method()\n}\n'
        this.$store.dispatch('updateCode', {code: newCode});
      }
    }
  }
</script>
