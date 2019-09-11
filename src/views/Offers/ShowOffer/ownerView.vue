<template>
  <div>
    <h1>Доступна обоим, но вид Владельца</h1>

    <div v-if="garage.currentOffer" style="background-color: lightcyan;">
      <div>{{ garage.currentOffer.brand.name }} {{ garage.currentOffer.bike.name }}</div>
      <span v-for="image of garage.currentOffer.images" :key="image.id">
        <img :src="image.url" alt="..." style="height: 70px; width: auto">
      </span>
      <div>{{ garage.currentOffer.description }}</div>
      <div>{{ garage.currentOffer.volume }}куб.см, {{ garage.currentOffer.color.name }}, {{ garage.currentOffer.year }}года</div>
      <div>
        <span v-if='garage.currentOffer.abs'>ABS</span>
        <span v-if='garage.currentOffer.abs&&garage.currentOffer.esp||garage.currentOffer.abs&&garage.currentOffer.akp'>, </span>
        <span v-if='garage.currentOffer.esp'>ESP</span>
        <span v-if='garage.currentOffer.esp&&garage.currentOffer.akp'>, </span>
        <span v-if='garage.currentOffer.akp'>АКПП</span>
      </div>
      <div v-if="garage.currentOffer.deposit">Залог: {{ garage.currentOffer.deposit }} ТНВ</div>
      <div v-else>Залога нет</div>
      <div>Остров: {{ garage.currentOffer.island.name }}</div>
      <div>Пляж: {{ garage.currentOffer.beach.name }}</div>
      <div v-if="garage.currentOffer.shipping">Доставка есть</div>
      <div v-else>Доставки нет</div>
      <div>Стоимость: от {{ garage.currentOffer.prices[garage.currentOffer.prices.length - 1].price }} ТНВ/сутки</div>
      <div v-for="(price, index) of garage.currentOffer.prices" :key="price.days * (-1)" style="margin-left: 10px;">
        <span>От {{ price.days }}</span>
        <span v-if="garage.currentOffer.prices[index + 1]"> - {{ garage.currentOffer.prices[index + 1].days - 1 }}</span>
        <span> дней: {{ price.price }} ТНВ/сутки</span>
      </div>
      <div>Состояние: <span v-if="garage.currentOffer.is_active">активно</span><span v-else>неактивно</span></div>
      <router-link :to="{name: 'EditOffer', params: {id: garage.currentOffer.id}}">Редактировать объявление</router-link>
    </div>

  </div>
</template>

<script>
export default {
  created() {
    this.garage.showOffer({
      id: this.$route.params.id,
      showMode: true
    })
  }
}
</script>