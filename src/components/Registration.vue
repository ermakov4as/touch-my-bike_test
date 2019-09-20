<template>
  <div v-if="display.registration" style="background-color: azure;">

    <h3>
      login form registration
      <button @click="display.registration = false">X</button>
    </h3>

    <!-- <input name="owner" type="radio" :value=false v-model="user.tmp.is_owner" checked />
    <label> Я турист </label>
    <input name="owner" type="radio" :value=true v-model="user.tmp.is_owner"/>
    <label> Я владелец </label> -->

    <br>
    <button @click.prevent="user.loginF()">Войти с помощью Facebook</button>
    <button @click.prevent="user.loginG()">Войти с помощью Google</button>

    <br>
    <input v-model="user.email" placeholder="email (try «owner»)" />
    <br>
    <input v-model="user.tmp.agree" type="checkbox" />
    <label> Я прочитал пользовательское соглашение и согласен с условиями</label>
    <button v-if="!display.licenseAgreement" @click="display.licenseAgreement = true">Показать соглашение</button>
    <LicenseAgreement></LicenseAgreement>

    <br>
    <button @click="user.registration()">Зарегистрироваться</button>

    <br>
    <button @click.prevent="display.login = true">Уже есть аккаунт?</button>

  </div>
</template>

<script>
import LicenseAgreement from './LicenseArgeement'

export default {
  components: { LicenseAgreement }
}
</script>