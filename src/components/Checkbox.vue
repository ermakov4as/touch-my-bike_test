<template>
  <div
    @click="target[attr]=!target[attr]"
    class="pl-3 main"
    :class="dNone"
    :style="{width: `${width_}%`}"
  >
    <div class="my-auto mr-1 box pionter" :class="active"></div>
    <div class="my-auto text-secondary reg-14 pionter">
      <slot></slot>
    </div>
    <div class="separator" :class="separator_"></div>
  </div>
</template>

<script>
export default {
  props: ['target', 'attr', 'width', 'separator'],
  computed: {
    dNone() {
      return this.width_ === 0 ? 'dNone' : ''
    },
    active() {
      return this.target[this.attr] ? 'active' : ''
    },
    width_() {
      if (this.windowWidth > this.$md && this.windowWidth < this.$xl) {
        return Number(this.width.split(' ')[1]) || 0
      } else if (this.windowWidth > this.$xl) {
        return Number(this.width.split(' ')[2]) || 0
      }
      return Number(this.width.split(' ')[0]) || 0
    },
    separator_() {
      if (this.separator === '') return 'full'
      else if (this.separator === 'md') return 'md'
      else if (this.separator === 'xl') return 'xl'
      else return ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
.main {
  position: relative;
  height: 100%;
  display: flex;
  &.dNone {
    display: none;
  }
}
.box {
  height: 16px;
  width: 16px;
  border-radius: 2px;
  background-color: $white;
  border: solid $gray-dark 1px;
  &.active {
    border: none;
    background: url('~@/assets/img/enable.png') center/cover no-repeat;
  }
}

.separator {
  background-color: $gray;
  height: 10px;
  width: 1px;
  position: absolute;
  top: $_1;
  height: calc(100% - #{$_2});
  right: 0;
  display: none;
  &.full {
    display: block;
  }
  @media (min-width: $md) {
    &.md {
      display: block;
    }
  }
  @media (min-width: $xl) {
    &.xl {
      display: block;
    }
  }
}
</style>
