<template>
  <div class="toolbox">
    <participant :on-click-handler="onParticipantClick"/>
    <async-message :on-click-handler="onAsyncMessageClick"/>
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
  },
  methods: {
    onParticipantClick() {
      /* eslint-disable */
      console.log('participant click...')
    },
    onAsyncMessageClick() {
      /* eslint-disable */
      console.log('async message click...')
    }
  }
}
</script>

<style>
  .toolbox {
    display: flex;
    width: 100%;
    text-align: center;
    background-color: #555;
    overflow: auto;
  }

  .toolbox>div {
    width: 20%;
    padding: 12px 0;
    float: left;
    transition: all 0.3s ease;
    color: white;
  }

  .toolbox>div:hover {
    background-color: #000;
  }


</style>
