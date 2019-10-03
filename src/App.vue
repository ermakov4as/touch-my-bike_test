<template>
  <div id="app">
    <div v-if="$devMode">
      <div v-for="(role, i) of Object.keys(pages)" :key="i">
        {{role}}:
        <span class="m-1" v-for="(page, j) of pages[role]" :key="j">
          <router-link
            v-if="page!=='EditOffer'&&page!=='ShowOffer'&&page!='Chat'"
            :to="{name: page}"
          >{{page}}</router-link>
          <router-link v-else :to="{name: page, params: {id: 1}}">{{page}}</router-link>
        </span>
      </div>
    </div>
    <router-view></router-view>
    <notifications group="main" />
  </div>
</template>

<script>
import { pages } from '@/router'

export default {
  data() {
    return {
      pages: pages
    }
  }
}
</script>

<style lang="scss">
@import './style/base';
</style>