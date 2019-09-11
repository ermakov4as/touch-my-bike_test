<template>
  <div>
    <h1>Доступна только владельцу</h1>

    <div v-if="user.email" style="background-color: rgb(200, 200, 225);">
      <h4>OwnerData</h4>
      <img :src="user.avatar" alt="...">
      <div>{{ user.firstName }} {{ user.lastName }}</div>
      <div>{{ user.phone }}</div>
      <div>{{ user.email }}</div>
    </div>

    <div v-if="garage.offers" style="background-color: lightgreen;">
      <h4>Гараж</h4>
      <router-link :to="{name: 'NewOffer'}" style="font-weight:bold;">добавить объявление</router-link>
      <br>
      <b>Сортировать:</b>
      <button v-if="!filter.oldFirst" @click="garage.changeOrder()">Сначала новые</button>
      <button v-if="filter.oldFirst" @click="garage.changeOrder()">Сначала старые</button>

      <div v-for="offer of garage.offers" :key="offer.id" style="border: 1px solid brown; margin: 2px;">
        <img :src="offer.images[0].url" alt="..." style="height: 70px; width: auto">
        <div>{{ offer.brand.name }} {{ offer.bike.name }}</div>
        <div>{{ offer.volume }}куб.см, {{ offer.color.name }}, {{ offer.year }}года</div>
        <div>
          <span v-if='offer.abs'>ABS</span>
          <span v-if='offer.abs&&offer.esp||offer.abs&&offer.akp'>, </span>
          <span v-if='offer.esp'>ESP</span>
          <span v-if='offer.esp&&offer.akp'>, </span>
          <span v-if='offer.akp'>АКПП</span>
        </div>
        <div>От {{ offer.prices[offer.prices.length - 1].price }} ТНВ/сутки</div>
        <div v-if="offer.deposit">Залог: {{ offer.deposit }} ТНВ</div>
        <div v-else>Залога нет</div>
        <div v-if="offer.shipping">Доставка есть</div>
        <div v-else>Доставки нет</div>
        <div>Остров: {{ offer.island.name }}</div>
        <div>Пляж: {{ offer.beach.name }}</div>
        <div>Состояние: <span v-if="offer.is_active">активно</span><span v-else>неактивно</span></div>
        <router-link :to="{name: 'EditOffer', params: {id: offer.id}}">Редактировать объявление</router-link>
        <br>
        <router-link :to="{name: 'ShowOffer', params: {id: offer.id}}">Подробнее</router-link>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  created() {
    this.garage.updateOffers()
  }
}
</script>
