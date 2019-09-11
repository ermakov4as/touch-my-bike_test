<template>
  <div>
    <OwnersHeader></OwnersHeader>
    <EditBike v-if="offer" :offer="offer" @save="update"></EditBike>
  </div>
</template>

<script>
import { OwnerOffer } from '@/models'
import EditBike from '@/components/owner/EditBike'
import OwnersHeader from '@/components/owner/OwnersHeader'

export default {
  name: 'OfferEdit',
  components: { EditBike, OwnersHeader },
  data() {
    return { offer: null }
  },
  methods: {
    async update() {
      await OwnerOffer.update(this.offer)
      this.$router.push({ name: 'offer' })
    }
  },
  async created() {
    this.offer = await OwnerOffer.get(this.$route.params.id)
  }
}
</script>
