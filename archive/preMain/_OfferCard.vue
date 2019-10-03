<template>
  <div style="border: 1px solid darkblue; margin: 2px;">
    <div>{{ offer.brand.name }} {{ offer.bike.name }}</div>
    <div v-if="offer.is_favourite">
      You like it! 
      <button @click.prevent="shop.like(offer)">Dislike</button>
    </div>
    <div v-else>
      Not in favourites 
      <button @click.prevent="shop.like(offer)">Like!</button>
    </div>
    <span v-for="image of offer.images" :key="image.id">
      <img :src="image.url" alt="..." style="height: 70px; width: auto">
    </span>
    <div>{{ offer.description }}</div>
    <div>{{ offer.volume }}куб.см, {{ offer.color.name }}, {{ offer.year }}года</div>
    <div>
      <span v-if='offer.abs'>ABS</span>
      <span v-if='offer.abs&&offer.esp||offer.abs&&offer.akp'>, </span>
      <span v-if='offer.esp'>ESP</span>
      <span v-if='offer.esp&&offer.akp'>, </span>
      <span v-if='offer.akp'>АКПП</span>
    </div>
    <div v-if="offer.deposit">Залог: {{ offer.deposit }} ТНВ</div>
    <div v-else>Залога нет</div>
    <div>Остров: {{ offer.island.name }}</div>
    <div>Пляж: {{ offer.beach.name }}</div>
    <div v-if="offer.shipping">Доставка есть</div>
    <div v-else>Доставки нет</div>
    <div>Номерной знак: {{ offer.number }}</div>
    <div>Стоимость: от {{ offer.prices[offer.prices.length - 1].price }} ТНВ/сутки</div>
    <div v-for="(price, index) of offer.prices" :key="price.days * (-1)" style="margin-left: 10px;">
      <span>От {{ price.days }}</span>
      <span v-if="offer.prices[index + 1]"> - {{ offer.prices[index + 1].days - 1 }}</span>
      <span> дней: {{ price.price }} ТНВ/сутки</span>
    </div>
    <div>Владелец: {{ offer.owner.name }}</div>
    <router-link :to="{name: 'Chat', params: {id: offer.owner.id}}">Написать в чат</router-link>
    <button @click="shop.preview(offer)">Перейти к бронированию</button>

  </div>
</template>

<script>
export default {
  props: ['offer']
}
</script>