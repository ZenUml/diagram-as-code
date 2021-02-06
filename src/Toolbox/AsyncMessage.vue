<template>
  <div v-on:click="onClickHandler()">
    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <title>Async Message</title>
      <path d="M13.2001 1V17.8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.800049 1V17.8Z" fill="#FFFFFF"/>
      <path d="M0.800049 1V17.8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path d="M12.4596 8.45962C12.7135 8.20578 12.7135 7.79422 12.4596 7.54038L8.32304 3.40381C8.0692 3.14997 7.65765 3.14997 7.40381 3.40381C7.14997 3.65765 7.14997 4.0692 7.40381 4.32304L11.0808 8L7.40381 11.677C7.14997 11.9308 7.14997 12.3424 7.40381 12.5962C7.65765 12.85 8.0692 12.85 8.32304 12.5962L12.4596 8.45962ZM2 8.65L12 8.65V7.35L2 7.35L2 8.65Z" fill="white"/>
    </svg>
    <label>AsyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'AsyncMessage',
    methods: {
      onClickHandler() {
        this.$store.dispatch('updateCode', this.$store.state.code + '\n' + 'A->B: Message');
      }
    }

  }
</script>
