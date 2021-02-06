<template>
  <div v-on:click="onClickHandler()">
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.2 1.4H1.79999V15.4H18.2V1.4Z" stroke="white" stroke-width="2"/>
      <path d="M2.22858 6.36055L8.79999 6.4" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08028L8.84406 6.36055" stroke="white" stroke-width="2" stroke-linecap="round"/>
      <path d="M10.2 4.08027V1.6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.52031 7.84609H10.1676C10.7441 7.84609 11.1754 7.9832 11.4613 8.25742C11.7496 8.53164 11.8938 8.92187 11.8938 9.42812C11.8938 9.94844 11.7367 10.3551 11.4227 10.648C11.1109 10.941 10.634 11.0875 9.9918 11.0875H9.11992V13H7.52031V7.84609ZM9.11992 10.0434H9.51016C9.81719 10.0434 10.0328 9.99062 10.157 9.88516C10.2813 9.77734 10.3434 9.64023 10.3434 9.47383C10.3434 9.31211 10.2895 9.175 10.1816 9.0625C10.0738 8.95 9.87109 8.89375 9.57344 8.89375H9.11992V10.0434Z" fill="white"/>
    </svg>
    <label>Fragment Par</label>
  </div>
</template>

<script>
  export default {
    name: 'Creation',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'par {\n  A.method\n  B.method\n}\n'
        this.$store.dispatch('updateCode', newCode);
      }
    }
  }
</script>
