<template>
  <div>
    <svg v-on:click="onClickHandler()" width="20px" height="20px" viewBox="0 0 50 50" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>New participant</title>
      <g stroke="none" stroke-width="4" fill="none" fill-rule="evenodd">
        <g id="Participant" stroke="#FFFFFF">
          <rect id="Rectangle" x="8.5" y="4.5" width="34" height="10" rx="3"></rect>
          <path d="M25.5,15 L25.5,47.5" id="Line" stroke-linecap="square" stroke-dasharray="5"></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
  function until(arr, fn) {
    const l = arr.length;
    let i = 0;
    while (i < l && !fn(arr[i])) {
      i++;
    }
    return arr.slice(0, i);
  }

  const isEmpty = str => !str || str.trim() === '';
  const isComment = (line) => line && line.trim().startsWith('//');

  export default {
    name: 'Participant',
    methods: {
      onClickHandler() {
        /* eslint-disable */
        console.log('participant clicked')
        const lines = this.$store.state.code.split('\n');
        const leadingCommentLines = until(lines, line => !isEmpty(line) && !isComment(line));
        const remainingLines = lines.slice(leadingCommentLines.length)
        const all = leadingCommentLines.concat(['NewParticipant']).concat(remainingLines);
        const result = all.join('\n');
        this.$store.dispatch('updateCode', result);

      }
    }
  }
</script>
