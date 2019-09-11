<template>
  <div>
    <OwnersHeader></OwnersHeader>
    <EditBike v-if="offer" :offer="offer" @save="create"></EditBike>
  </div>
</template>

<script>
import EditBike from '@/components/owner/EditBike'
import OwnersHeader from '@/components/owner/OwnersHeader'

import { OwnerOffer } from '@/models'

export default {
  name: 'OfferNew',
  components: { EditBike, OwnersHeader },
  data() {
    return { offer: OwnerOffer.empty() }
  },
  methods: {
    create() {
      OwnerOffer.create(this.offer)
        .then(offer =>
          this.$router.push({ name: 'offer', params: { id: offer.id } })
        )
        .catch(console.error)
    }
  }
}
</script>
