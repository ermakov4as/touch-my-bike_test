<template>
  <div v-if="display.login" style="background-color: lightyellow;">
    <h3>
      login form
      <button @click="display.login = false">X</button>
    </h3>
    <button @click.prevent="user.loginF()">Войти с помощью Facebook</button>
    <button @click.prevent="user.loginG()">Войти с помощью Google</button>
    <br>
    <input v-model="user.email" placeholder="email (try «owner»)" />
    <input v-model="user.tmp.password" placeholder="password" />
    <br>
    <input v-model="user.tmp.remember" type="checkbox" />
    <label> Запомнить пароль </label>
    <button @click.prevent="user.login()">Войти</button>
    <br>
    <button @click.prevent="display.registration = true">Нет аккаунта?</button>
  </div>
</template>
