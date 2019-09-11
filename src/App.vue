<template>
  <div id="app">
    <Login></Login>
    <div v-if="$devMode">
      <div v-for="(role, i) of Object.keys(pages)" :key="i">
        {{role}}:
        <span style="margin-left: 5px;" v-for="(page, j) of pages[role]" :key="j">
          <router-link v-if="page!=='EditOffer'&&page!=='ShowOffer'" :to="{name: page}">{{page}}</router-link>
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
import Login from '@/components/Login'

export default {
  components: { Login },
  data() {
    return {
      pages: pages
    }
  }
}
</script>

<style lang="stylus">
@import '~@/app';

// // ////////////////////////////////////////////////
// // ////////////         CLASSES        ////////////
// // ////////////////////////////////////////////////
.h_1 {
  font-size: 23px;
  font-weight: bold;

  @media (max-width: $desktop) {
    font-size: 15px;
  }
}

@media (max-width: $desktop) {
  .logo>img {
    width: 95px;
    box-shadow: 2px 2px 8px -4px #000;
  }

  .burger>img {
    width: 50px;
  }

  .chat>img {
    width: 50px;
  }

  .block {
    margin: auto;
    margin-top: 25px;
    background-color: white;
    border-radius: 4px;
    max-width: 425px;
    height: 420px;
    padding: 15px;
  }
}

.href-yellow {
  color: yellow;
  text-decoration: underline;
  font-weight: 550;
}

.row-blue {
  background-color: blue;
  height: 50px;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.79);
}

.flex_space {
  display: flex;
  justify-content: space-between;
}

.square-yellow {
  background-color: yellow;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5px;
}

.nav-right {
  float: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  align-items: center;
}

.btn-pink {
  height: 40px;
  color: white;
  background-color: #ff3179;
  border-radius: 5px;
  width: 270px;
  border: none;
  font-size: 13px;
  box-shadow: 2px 6px 10px #760b307a;
}
</style>
