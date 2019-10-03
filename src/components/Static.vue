<template>
  <div class="pl-3 main" :class="dNone" :style="{width: `${width_}%`}">
    <figure f-if="sun" class="mr-auto my-auto icon">
      <img src="@/assets/img/sun.png" />
    </figure>
    <div class="my-auto mr-2 reg-14">
      <slot></slot>
    </div>
    <div class="separator" :class="separator_"></div>
  </div>
</template>

<script>
export default {
  props: ['sun', 'width', 'separator'],
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
.icon {
  height: 18px;
  width: 18px;
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
