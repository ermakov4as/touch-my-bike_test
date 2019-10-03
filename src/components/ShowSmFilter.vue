<template>
  <div class="overline-box">
    <button @click="data[attr] = false" class="btn btn-warning btn-close">X</button>
  </div>
</template>

<script>
export default {
  props: ['data', 'attr']
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
.btn-close {
  width: 24px;
  height: 24px;
  background: #fff000;
  border: none;
  border-radius: 30px;
  color: $black;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  margin: -42px;
}

.overline-box {
  position: fixed;
  z-index: 999;
  height: 426px;
  width: 306px;
  top: 20%;
  padding: $_6;
  background: #f8f8f8;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}
</style>
