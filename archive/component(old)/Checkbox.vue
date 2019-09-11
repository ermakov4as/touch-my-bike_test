<template>
  <div class="chkbx" :class="{'chk_active': value}">
    <img v-if="value" src="@/assets/img/check.png" style="width: 100%;" />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['value']
  // data() {
  //   return {
  //     value: (которое я получил из :value)
  //     oldValue: true
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.chkbx {
  background-color: #ececec;
  width: 13px;
  height: 13px;
  border-radius: 0px;
  cursor: pointer;
  border 1px solid #cbcbcb
  margin 0px 8px 0px 2px
}

.chk_active {
  display: flex;
  align-items: center;
  background-color: yellow;
}
</style>
