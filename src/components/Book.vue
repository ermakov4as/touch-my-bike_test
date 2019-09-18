<template>
  <div v-if="shop.new_order" style="background-color: rgb(255, 221, 178);">

    <h3>
      Бронирование
      <button @click="shop.closePreview()">X</button>
    </h3>

    <div>{{ shop.new_order.offer.brand.name }}</div>
    <div>{{ shop.new_order.offer.bike.name }}</div>
    <img :src="shop.new_order.offer.images[0].url" alt="..." style="height: 70px; width: auto">
    
    <div>
      Начало аренды: 
      <Datepicker v-model="shop.new_order.date_from"></Datepicker>
    </div>
    <div>
      Окончание аренды:
      <Datepicker v-model="shop.new_order.date_to"></Datepicker> 
    </div>
    <div v-if="shop.new_order.date_from && shop.new_order.date_to"> (дней: {{ shop.days() }})</div>
    <div v-if="shop.new_order.date_from && shop.new_order.date_to">{{ shop.pricePerDay() }} THB/сутки</div>
   
    <div v-if="shop.new_order.offer.shipping">
      Вам нужна доставка? 
      <input v-model="shop.new_order.need_shipping" type="checkbox" />
    </div>
    <div v-if="shop.new_order.need_shipping">
      <textarea
        v-model="shop.new_order.adress"
        placeholder="Введите адрес доставки"
      ></textarea>
    </div>
    <div>Вы всегда можете обсудить доставку байка в чате с владельцкм</div>

    <template v-if="shop.new_order.date_from && shop.new_order.date_to">
      <div>Аренда: {{ shop.pricePerDay() }} THB x {{ shop.days() }} дней => {{ shop.totalPrice() }} THB</div>
      <div>Доставка: обсудите стоимость с владельцем</div>

      <br>
      <div>Владелец: {{ shop.new_order.offer.owner.name }}, {{ shop.new_order.offer.owner.phone }}</div>
      <router-link :to="{name: 'Chat', params: {id: shop.new_order.offer.owner.id}}">Написать в чат</router-link>

      <hr>
      <div>Итого: {{ shop.totalPrice() }} THB</div>

      <br>
      <button @click="shop.book()">Забронировать</button>

    </template>   

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: { Datepicker }
}
</script>

