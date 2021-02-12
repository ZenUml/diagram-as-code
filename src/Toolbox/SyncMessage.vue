<template>
  <div v-on:click="onClickHandler()">
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 1V17.8" stroke="white" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path d="M17 7H13V15H17V7Z" fill="white" stroke="white" stroke-width="0.4"/>
      <path d="M3 6H10" stroke="white" stroke-width="2" stroke-linecap="square"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6L9 8V4L13 6Z" fill="white" stroke="white" stroke-width="0.8"/>
      <path d="M1 1V17.8" stroke="white" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
    </svg>

    <label>SyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'AsyncMessage',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'ret = A.Method()'
        this.$store.dispatch('updateCode', {code: newCode});
      }
    }
  }
</script>
