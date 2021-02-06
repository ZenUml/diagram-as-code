<template>
  <div class="toolbox">
    <participant/>
    <async-message/>
  </div>
</template>

<script>
import Participant from './Toolbox/Participant'
import AsyncMessage from './Toolbox/AsyncMessage'

export default {
  name: 'App',
  components: {
    Participant,
    AsyncMessage
  }
}
</script>

<style>
  .toolbox {
    display: flex;
  }
</style>
