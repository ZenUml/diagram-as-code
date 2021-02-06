<template>
  <div class="toolbox">
    <participant/>
    <async-message/>
    <sync-message/>
  </div>
</template>

<script>
import Participant from './Toolbox/Participant'
import AsyncMessage from './Toolbox/AsyncMessage'
import SyncMessage from './Toolbox/SyncMessage'

export default {
  name: 'App',
  components: {
    Participant,
    AsyncMessage,
    SyncMessage
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
