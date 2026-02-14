<template>
  <div>
    <hede v-if="!isFullScreenPage"></hede>
    <transition name="fade">
      <router-view class="man"></router-view>
    </transition>
    <fote v-if="!isFullScreenPage"></fote>
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
    },
    computed: {
      isFullScreenPage() {
        const name = this.$route.name
        return ['chat', 'profile', 'friend', 'space'].indexOf(name) !== -1
      }
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
