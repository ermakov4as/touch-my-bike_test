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
      <div>{{user}}</div>
    </div>
    <div style="background-color: rgb(255, 200, 225);">
      <h4>Collections</h4>
      <div>
        <b>years:</b>
        {{collections.years[0]}} – {{collections.years[collections.years.length-1]}}
      </div>
      <div>
        <b>brands:</b>
        <span v-for="brand of collections.brands" :key="brand.id">{{brand.name}},</span>
      </div>
      <div>
        <b>bikes:</b>
        <span v-if="collections.bikes===null">null</span>
        <span v-else>
          <span v-for="bike of collections.bikes" :key="bike.id">{{bike.name}},</span>
        </span>
      </div>
      <div>
        <b>islands:</b>
        <span v-for="island of collections.islands" :key="island.id">{{island.name}},</span>
      </div>
      <div>
        <b>beaches:</b>
        <span v-if="collections.beaches===null">null</span>
        <span v-else>
          <span v-for="beach of collections.beaches" :key="beach.id">{{beach.name}},</span>
        </span>
      </div>
      <h3>Filter</h3>
      <b>Датапикер:</b>
      <Datepicker v-model="filter.date_to"></Datepicker>
      <Datepicker v-model="filter.date_from"></Datepicker>
      <b>Селекты:</b>
      <div>
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
          year_from:
          <select v-model="filter.year_from">
            <option :value="null"></option>
            <option v-for="year of collections.years" :key="year" :value="year">{{year}}</option>
          </select>
        </div>
        <div>
          year_to:
          <select v-model="filter.year_to">
            <option :value="null"></option>
            <option v-for="year of collections.years" :key="year" :value="year">{{year}}</option>
          </select>
        </div>
      </div>
      <div>
        <h4>
          <span>Дополнительные параметры</span>
          <button v-if="!display.filter" @click="display.filter=true">show</button>
          <button v-else @click="display.filter=false">hide</button>
        </h4>
        <div>
          <b>Чекбоксы:</b>
          <div>
            <span>
              akp :
              <input v-model="filter.akp" type="checkbox" />
            </span>
            <span>
              abs :
              <input v-model="filter.abs" type="checkbox" />
            </span>
            <span>
              esp :
              <input v-model="filter.esp" type="checkbox" />
            </span>
            <span>
              deposit :
              <input v-model="filter.deposit" type="checkbox" />
            </span>
            <span>
              shipping :
              <input v-model="filter.shipping" type="checkbox" />
            </span>
          </div>
        </div>
      </div>
      <b>Порядок:</b>
      <button v-if="filter.cheapFirst" @click="filter.cheapFirst=false">Сначала дешевые</button>
      <button v-if="!filter.cheapFirst" @click="filter.cheapFirst=true">Сначала дорогие</button>
    </div>
    <div v-if="shop.previewOffer" style="background-color: rgb(255, 221, 178);">
      <h3>Preview Book</h3>
      <div>
        <span>{{shop.previewOffer}}</span>
        <button @click="shop.book()">забронировать</button>
        <button @click="shop.closePreview()">
          <b>X</b>
        </button>
      </div>
    </div>
    <div style="background-color: #c9ffc8;">
      <h3>ShopOffers / всего: {{shop.total_offers}}</h3>
      <div v-for="offer of shop.offers" :key="offer.id">
        <div>
          <b>Offer:</b>
          <!-- <span v-for="atr of Object.keys(offer)" :key="atr">{{atr}}={{offer[atr]}}</span> -->
          <div>desc ={{shop.resultPrice(offer)}}</div>
          <!-- <VueJsonPretty :data="offer"></VueJsonPretty> -->
        </div>
        <div>
          <button @click="shop.preview(offer)">Забронировать</button>
          <button>Написать владельцу</button>
        </div>
      </div>
      <button @click="shop.getMore()">Показать еще +20</button>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import Burger from '@/components/Burger'

export default {
  components: { 
    Datepicker,
    Login,
    Registration,
    Burger
  },
  created() {
    this.collections.init()
    this.shop.updateOffers()
  }
}
</script>
