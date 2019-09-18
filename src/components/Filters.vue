<template>
  <!-- TODO: как на фигме, вопрос: нужна ли возможность полностью скрыть фильтр? -->
  <!-- TODO: не должно ли быть "сначала дешёвые / дорогие ПЕРЕД "показать ххх байков"? -->
  <!-- TODO: "Показыть ххх байков" - скрывается ли при скрытии ВСЕГО фильтра? -->
  <div v-if="display.filters" style="background-color: lightgray">
    
    <h3>
      Фильтры
      <button @click="display.filters = false">X</button>
    </h3>

    <template>

      <div>
        island:
        <select v-model="filter.island">
          <option :value="null">Остров</option>
          <option
            v-for="island of collections.islands"
            :key="island.id"
            :value="island"
          >{{island.name}}</option>
        </select>
      </div>
      <div v-if="collections.beaches">
        beaches:
        <select v-model="filter.beach">
          <option :value="null">Пляж</option>
          <option
            v-for="beach of collections.beaches"
            :key="beach.id"
            :value="beach"
          >{{beach.name}}</option>
        </select>
      </div>

      <div>
        Начало аренды: 
        <Datepicker v-model="filter.date_from"></Datepicker>
      </div>
      <div>
        Окончание аренды:
        <Datepicker v-model="filter.date_to"></Datepicker> 
      </div>
      <div v-if="filter.date_from && filter.date_to">Продолжительность аренды, дней: {{ shop.days() }}</div>

    </template>

    <button v-if="!showBikeParams" @click="showBikeParams = true">Показать параметры байка</button>
    <button v-else @click="showBikeParams = false">Скрыть параметры байка</button>

    <template v-if="showBikeParams">
      
      <div>
        brand:
        <select v-model="filter.brand">
          <option :value="null">Марка</option>
          <option
            v-for="brand of collections.brands"
            :key="brand.id"
            :value="brand"
          >{{brand.name}}</option>
        </select>
      </div>
      <div v-if="collections.bikes">
        bikes:
        <select v-model="filter.bike">
          <option :value="null">Модель</option>
          <option v-for="bike of collections.bikes" :key="bike.id" :value="bike">{{bike.name}}</option>
        </select>
      </div>

      <div>
        Год выпуска:
        <div>
          c: 
          <select v-model="filter.year_from">
            <option :value="null"></option>
            <option v-for="year of collections.years" :key="year" :value="year">{{year}}</option>
          </select>
        </div>
        <div>
          до: 
          <select v-model="filter.year_to">
            <option :value="null"></option>
            <option v-for="year of collections.years" :key="year" :value="year">{{year}}</option>
          </select>
        </div>
      </div>

      <div>
        <span>
           АКПП: 
          <input v-model="filter.akp" type="checkbox" />
        </span>
        <span>
           ABS: 
          <input v-model="filter.abs" type="checkbox" />
        </span>
        <span>
           ESP: 
          <input v-model="filter.esp" type="checkbox" />
        </span>
        <span>
           Без залога: 
          <input v-model="filter.no_deposit" type="checkbox" />
        </span>
        <span>
           Доставка: 
          <input v-model="filter.shipping" type="checkbox" />
        </span>
      </div>

    </template>

    <br>
    <b>Порядок:</b>
    <button v-if="filter.cheapFirst" @click="filter.cheapFirst=false">Сначала дешевые</button>
    <button v-if="!filter.cheapFirst" @click="filter.cheapFirst=true">Сначала дорогие</button>

    <br>
    <button @click="shop.updateOffers()">Обновить предложения</button>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  data() {
    return {
      showBikeParams: false
    }
  },
  components: { Datepicker },
  created() {
    this.collections.init()
  }
}
</script>