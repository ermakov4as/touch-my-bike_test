<template>
  <div v-if="display.login">
    <h3>
      login form
      <button @click="display.login = false">X</button>
    </h3>
    <input v-model="user.email" placeholder="email (try «owner»)" />
    <input v-model="user.password" placeholder="password" />
    <button @click="user.login()">войти</button>
  </div>
  <div v-else></div>
</template>
