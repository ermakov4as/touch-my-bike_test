<template>
  <!-- <Desk v-if="windowWidth>$deskWidthFrom"></Desk>
  <Mob v-else></Mob>-->
  <div style="color: blue;">is_owner = {{is_owner}}</div>
</template>

<script>
// import Desk from './desk'
// import Mob from './mob'
import { mapGetters } from 'vuex'

export default {
  // components: {
  //   Desk,
  //   Mob
  // }
  computed: mapGetters('User', ['is_owner'])
}
</script>
