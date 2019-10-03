<template>
  <div class="d-md-none">
    <div class="overlay-box navbar-sm" :class="{'active': data[attr]}">
      <button @click="data[attr]=false;overlay.hide()" class="btn btn-close sm"></button>
      <div class="menu bold-18 text-u">
        <ul v-if="user.role !== 'unreg'">
          <li class="my-1">
            <router-link tag="span" :to="{name: 'Profile'}" class="pointer">Личный кабинет</router-link>
          </li>
          <li class="my-1">
            <router-link tag="span" :to="{name: 'Orders'}" class="pointer">Бронь</router-link>
          </li>
          <li class="my-1">
            <router-link tag="span" :to="{name: 'Favorites'}" class="pointer">избранное</router-link>
          </li>
          <li class="my-1">
            <router-link tag="span" :to="{name: 'Chat', params: {id: null}}" class="pointer">сообщения</router-link>
          </li>
        </ul>
        <ul v-else>
          <li class="my-1">
            <span class="pointer" @click="display.login = true">Вход</span>
          </li>
          <li class="my-1">
            <span class="pointer" @click="display.registration = true">Регистрация</span>
          </li>
        </ul>
      </div>
      <div class="exit bold-18 text-u d-flex align-items-center pointerer">
        <div v-if="user.role !== 'unreg'" @click="user.logout" class="mr-1">Выход</div>
        <div>
          <img src="@/assets/img/i-exit.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'attr']
}
</script>

<style lang="scss" scoped>
@import '@/style/var';

.navbar-sm {
  position: fixed;
  height: 100vh;
  width: 316px;
  top: 0;
  left: -316px;
  @include slow(left);
  &.active {
    left: -$_2;
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    margin: $_4;
  }
  .menu {
    margin-top: $_6;
    margin-left: $_8;
  }
  .exit {
    margin-left: $_8;
    margin-bottom: 78px;
    position: absolute;
    bottom: 0;
  }
}
</style>
