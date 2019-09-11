<template>
  <div>
    <h1>Доступна только владельцу</h1>

    <offer :isNew="false"></offer>

  </div>
</template>

<script>
import Offer from '@/components/Offer'

export default {
  components: { 
    offer: Offer 
  },
}
</script>