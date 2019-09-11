<template>
  <div class="chkbx" :class="'chk_'+value">
    <img v-if="value" src="@/assets/img/check.png" style="width: 100%; display: block;" />
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['value']
}
</script>

<style lang="stylus" scoped>
.chkbx {
  background-color: #ececec;
  width: 13px;
  height: 13px;
  border-radius: 0px;
  cursor: pointer;
  border: 1px solid #cbcbcb;
  margin: 0px 8px 0px 2px;
  display: flex;
  align-items: center;
  display: inline-block;
}

.chk_false {
  background-color: red;
}

.chk_true {
  background-color: yellow;
}
</style>
