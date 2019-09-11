<template>
  <div v-if="garage.currentOffer" style="background-color: lightcoral">
    <div>
      Марка:
      <select v-model="garage.currentOffer.brand" @change="garage.changeBrand()">
        <option :value="null">Марка</option>
        <option v-for="brand of collections.brands" :key="brand.id" :value="brand">{{brand.name}}</option>
      </select>
    </div>
    <div v-if="collections.bikes && garage.currentOffer.brand">
      Модель:
      <select v-model="garage.currentOffer.bike">
        <option :value="null">Модель</option>
        <option v-for="bike of collections.bikes" :key="bike.id" :value="bike">{{bike.name}}</option>
      </select>
    </div>
    <br />
    <span v-for="image of garage.currentOffer.images" :key="image.id">
      <img :src="image.url" alt="..." style="height: 70px; width: auto" />
      <button @click.prevent="garage.removeImage(image.id)">x</button>
    </span>
    <label style="margin-left: 5px; background-color: lightgrey;">
      Добавить фото
      <input
        type="file"
        style="display: none;"
        @change="garage.addImage($event.target.files[0])"
      />
    </label>
    <br />
    <br />
    <textarea
      v-model="garage.currentOffer.description"
      placeholder="Введите комментарий для вашего лота"
    ></textarea>
    <div>
      Объём:
      <input v-model="garage.currentOffer.volume" type="number" /> см3
    </div>
    <div>
      Цвет:
      <select v-model="garage.currentOffer.color">
        <option :value="null">Цвет</option>
        <option v-for="color of collections.colors" :key="color.id" :value="color">{{color.name}}</option>
      </select>
    </div>
    <div>
      Год:
      <select v-model="garage.currentOffer.year">
        <option :value="null"></option>
        <option v-for="year of collections.years" :key="year" :value="year">{{year}}</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="abs" v-model="garage.currentOffer.abs" />
      <label for="abs">ABS</label>
      <input type="checkbox" id="esp" v-model="garage.currentOffer.esp" />
      <label for="esp">ESP</label>
      <input type="checkbox" id="akpp" v-model="garage.currentOffer.akp" />
      <label for="akpp">АКПП</label>
    </div>
    <div>
      Залог:
      <input v-model="garage.currentOffer.deposit" type="number" /> ТНВ
    </div>
    <div>
      Остров:
      <select v-model="garage.currentOffer.island" @change="garage.changeIsland()">
        <option :value="null">Остров</option>
        <option
          v-for="island of collections.islands"
          :key="island.id"
          :value="island"
        >{{island.name}}</option>
      </select>
    </div>
    <div v-if="collections.beaches && garage.currentOffer.island">
      Пляж:
      <select v-model="garage.currentOffer.beach">
        <option :value="null">Пляж</option>
        <option v-for="beach of collections.beaches" :key="beach.id" :value="beach">{{beach.name}}</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="shipping" v-model="garage.currentOffer.shipping" />
      <label for="shipping">Доставка</label>
    </div>
    <div>
      <input type="text" id="number" v-model="garage.currentOffer.number" />
      <label for="number">Номерной знак</label>
    </div>
    <b>Состояние:</b>
    <button
      v-if="!garage.currentOffer.is_active"
      @click.prevent="garage.currentOffer.is_active=true"
    >активно</button>
    <button
      v-if="garage.currentOffer.is_active"
      @click.prevent="garage.currentOffer.is_active=false"
    >неактивно</button>
    <div v-for="(price, index) in garage.currentOffer.prices" :key="price.days * (-1)">
      <span>От <input v-model="price.days" type="number" /></span>
      <span v-if="garage.currentOffer.prices[index + 1]"> до <input v-model="garage.currentOffer.prices[index + 1].days" type="number" /></span>
      <span> дней: <input v-model="price.price" type="number" /> ТНВ/сутки</span>
      <button
        v-if="garage.currentOffer.prices.length > 1"
        @click.prevent="garage.removePrice(index)"
      >Удалить цену</button>
    </div>
    <button @click.prevent="garage.addPrice()">Добавить цену</button>
    <br />
    <br />
    <button @click.prevent="garage.saveOffer(isNew)">Сохранить</button>
  </div>
</template>

<script>
export default {
  props: ['isNew'],
  created() {
    if (!this.isNew) {
      this.garage.showOffer({
        id: this.$route.params.id,
        showMode: false
      })
    } else {
      this.garage.createOffer()
    }
    this.collections.init('fullInit')
  }
}
</script>