<template>
  <div>
    <hede></hede>
    <transition name="fade">
      <router-view class="man"></router-view>
    </transition>
    <fote></fote>
  </div>
</template>

<script>

  import hede from './components/hade'
  import fote from './components/foter'
  export default {
    name: 'app',
    components:{
      hede,
      fote
    }
  }


</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.2s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
