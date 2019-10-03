<template>
  <div>
    <button @click="display.burger = !display.burger">Меню</button>
    <Burger></Burger>

    <div style="background-color: #c9ffc8;">
      <h3>
        User
        <button v-if="user.role !== 'unreg'" @click="user.logout">Выход</button>
      </h3>
      <template v-if="user.role === 'unreg'">
        <button @click="display.login = true">Вход</button>
        <button @click="display.registration = true">Регистрация</button>
      </template>
      <Login></Login>
      <Registration></Registration>
    </div>
    <button v-if="!display.filters" @click="display.filters = true">Показать фильтры</button>
    <Filters></Filters>

    <Book></Book>

    <div style="background-color: rgb(255, 200, 225);">
      <b>Порядок:</b>
      <button v-if="filter.cheapFirst" @click="filter.cheapFirst=false">Сначала дешевые</button>
      <button v-if="!filter.cheapFirst" @click="filter.cheapFirst=true">Сначала дорогие</button>

      <div v-for="offer of shop.offers" :key="offer.id">
        <OfferCard :offer="offer"></OfferCard>
      </div>
    </div>

    <button @click.prevent="shop.getMore()">Показать еще +20</button>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Burger from '@/components/Burger'
import Filters from '@/components/Filters'
import OfferCard from '@/components/OfferCard'
import Book from '@/components/Book'

export default {
  components: {
    Login,
    Registration,
    Burger,
    Filters,
    OfferCard,
    Book
  },
  created() {
    this.shop.updateOffers()
  }
}
</script>