<template>
  <div v-on:click="onClickHandler()">
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.2 11.8V18.6" stroke="white" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10L8 10Z" fill="white"/>
      <path d="M3 10L8 10" stroke="white" stroke-width="2" stroke-linecap="square"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11 10L7 12V8L11 10Z" fill="white" stroke="white" stroke-width="0.8"/>
      <path d="M1.79999 1V17.8" stroke="white" stroke-width="2" stroke-linecap="square" stroke-dasharray="2 3"/>
      <path d="M15 7.2H13.4C12.7373 7.2 12.2 7.73726 12.2 8.4V10C12.2 10.6627 12.7373 11.2 13.4 11.2H15C15.6628 11.2 16.2 10.6627 16.2 10V8.4C16.2 7.73726 15.6628 7.2 15 7.2Z" stroke="white" stroke-width="2"/>
      <path d="M6.61124 5.29414L8.00695 5.71602C7.9132 6.10742 7.76554 6.43438 7.56398 6.69688C7.36241 6.95938 7.11163 7.15742 6.81163 7.29102C6.51398 7.42461 6.13429 7.49141 5.67257 7.49141C5.11241 7.49141 4.65421 7.41055 4.29796 7.24883C3.94406 7.08477 3.6382 6.79766 3.38038 6.3875C3.12257 5.97735 2.99366 5.45235 2.99366 4.8125C2.99366 3.95938 3.21984 3.3043 3.67218 2.84727C4.12687 2.38789 4.76906 2.1582 5.59874 2.1582C6.24796 2.1582 6.75773 2.28945 7.12804 2.55195C7.5007 2.81445 7.77726 3.21758 7.95773 3.76133L6.55148 4.07422C6.50226 3.91719 6.4507 3.80235 6.39679 3.72969C6.30773 3.60781 6.19874 3.51406 6.06984 3.44844C5.94093 3.38281 5.79679 3.35 5.63741 3.35C5.27648 3.35 4.99991 3.49531 4.80773 3.78594C4.66241 4.00156 4.58976 4.34024 4.58976 4.80195C4.58976 5.37383 4.67648 5.76641 4.84991 5.97969C5.02335 6.19063 5.2671 6.2961 5.58116 6.2961C5.88585 6.2961 6.11554 6.21055 6.27023 6.03945C6.42726 5.86836 6.54093 5.61992 6.61124 5.29414Z" fill="white"/>
    </svg>
    <label>SyncMsg</label>
  </div>
</template>

<script>
  export default {
    name: 'Creation',
    methods: {
      onClickHandler() {
        let newCode = this.$store.state.code + '\n' + 'a = new A()'
        this.$store.dispatch('updateCode', {code: newCode});
      }
    }
  }
</script>
