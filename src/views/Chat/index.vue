<template>
  <div>
    <Tourist v-if="user.role === 'tourist'"></Tourist>
    <Owner v-if="user.role === 'owner'"></Owner>
  </div>
</template>

<script>
import Tourist from './touristView'
import Owner from './ownerView'

export default {
  components: {
    Tourist,
    Owner
  }
}
</script>
