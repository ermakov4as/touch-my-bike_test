<template>
  <div class="main" :class="dNone" :style="{width: `${width_}%`}">
    <select v-model="target[attr]" :class="{null: target[attr]===null}">
      <option :value="null" :disabled="disabled_">
        <slot></slot>
      </option>
      <option v-for="option of options" :key="option.val" :value="option">{{option.name}}</option>
    </select>
    <div class="select-caret"></div>
    <div class="separator" :class="separator_"></div>
  </div>
</template>

<script>
export default {
  props: ['target', 'attr', 'options', 'disabled', 'width', 'separator'],
  computed: {
    dNone() {
      return this.width_ === 0 ? 'dNone' : ''
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
    },
    disabled_() {
      return this.disabled === ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/var';
.main {
  position: relative;
  height: 100%;
  &.dNone {
    display: none;
  }
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  border: none;
  height: 100%;
  outline: none;
  padding-left: $_2;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background: none;
  color: $black;
}
.select-caret::after {
  content: '';
  background: url('~@/assets/img/drop-arrow.png') center/cover no-repeat;
  width: 17px;
  height: 9px;
  position: absolute;
  right: $_2;
  top: 17px;
}
select.null {
  color: $gray;
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
