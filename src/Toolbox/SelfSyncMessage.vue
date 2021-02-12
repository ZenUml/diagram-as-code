<template>
  <div v-on:click="onClickHandler()">
    <svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1V17.8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path d="M5 8.8H1V14H5V8.8Z" fill="white" stroke="#FFFFFF" stroke-width="0.4"/>
      <path d="M3.39999 4.20001H12.2" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="square"/>
      <path d="M9.82104 8.80002H12" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="square"/>
      <path d="M12.2 8.60001V4.20001" stroke="#FFFFFF" stroke-width="1.3" stroke-linecap="square"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.39999 8.60001L9.02105 7.00001V10.2L5.39999 8.60001Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="1"/>
    </svg>
    <label>SyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'SelfSyncMessage',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'A.Method() {\n  ret = SelfMethod()\n}\n'
        this.$store.dispatch('updateCode', {code: newCode});
      }
    }
  }
</script>
