<template>
  <div class="toolbox">
    <participant/>
    <async-message/>
    <sync-message/>
    <self-sync-message/>
    <creation/>
    <fragment-alt/>
    <fragment-loop/>
    <fragment-par/>
  </div>
</template>

<script>
import Participant from './Toolbox/Participant'
import AsyncMessage from './Toolbox/AsyncMessage'
import SyncMessage from './Toolbox/SyncMessage'
import SelfSyncMessage from './Toolbox/SelfSyncMessage'
import Creation from './Toolbox/Creation'
import FragmentAlt from './Toolbox/FragmentAlt'
import FragmentLoop from './Toolbox/FragmentLoop'
import FragmentPar from './Toolbox/FragmentPar'

export default {
  name: 'Toolbox',
  components: {
    Participant,
    AsyncMessage,
    SyncMessage,
    SelfSyncMessage,
    Creation,
    FragmentAlt,
    FragmentLoop,
    FragmentPar
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
    padding: 12px 0 2px 0;
    float: left;
    transition: all 0.3s ease;
    color: white;
  }

  .toolbox>div>label {
    display: none;
  }

  .toolbox>div:hover {
    background-color: #000;
  }


</style>
