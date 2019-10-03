<template>
  <div>
    <figure @click="shop.like(offer)" class="pointer">
      <img v-if="offer[attr]" src="@/assets/img/heart-enable.png" />
      <img v-else src="@/assets/img/heart-disable.png" />
    </figure>
  </div>
</template>

<script>
export default {
  props: ['offer', 'attr']
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
figure {
  width: 21px;
  height: 19px;
}
</style>
