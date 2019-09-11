<template>
  <div>
    <div class="desktop">
      <div class="big_head">
        <div class="background_img"></div>
        <div class="background_blur"></div>
        <div class="control_panel">
          <div class="block">
            <div class="row-label">
              <div class="empty"></div>
              <div>
                <a href="#" class="label">
                  <img src="@/assets/img/label.png" />
                </a>
              </div>
              <div class="text-right">
                <div v-if="!name" style="color: white">
                  я турист
                  <!-- <router-link class="href-yellow" :to="{ name: 'login' }">войти</router-link> -->
                  <br />я
                  владелец
                  <!-- <router-link class="href-yellow" :to="{ name: 'login' }">войти</router-link> -->
                  <br />
                </div>
                <div v-else style="color: white">
                  <template v-if="isOwner">
                    {{name}}
                    <span @click="logout" class="href-yellow" style="cursor: pointer;">выход</span>
                    <br />
                    <router-link class="href-yellow" :to="{ name: 'offers' }">мои предложения</router-link>
                  </template>
                  <template v-else>
                    <router-link class="href-yellow" :to="'#'">Мой профиль</router-link>
                    <br />
                    <span @click="logout" class="href-yellow" style="cursor: pointer;">выход</span>
                  </template>
                </div>
                <div>
                  <a href="#" class="href-yellow">как это работает?</a>
                  <br />
                  <a href="#" class="href-yellow">помощь</a>
                </div>
              </div>
            </div>

            <!-- DELETE START -->
            <!-- <button @click.prevent="test1">Order-list</button>
            <button @click.prevent="test2">ClientOffer-currentOffer</button>
            <button @click.prevent="test3">Order-create</button>
            <button @click.prevent="test4">Order-changeStatus</button>
            <button @click.prevent="test5">Order-example</button>-->
            <!-- DELETE STOP -->

            <div class="prostitute">
              <div class="drop-down-line">
                <select class="select-down" v-model="island">
                  <option>Остров</option>
                  <option>Пункт 2</option>
                  <option>Пункт 3</option>
                </select>
                <select class="select-down" v-model="beach">
                  <option>Пляж</option>
                  <option>Пункт 2</option>
                  <option>Пункт 3</option>
                </select>
              </div>
              <div class="input-group">
                <div class="data">Дата аренды</div>
                <div>
                  <input v-model="start_date" class="input" />
                </div>
                <div class="data">от &ndash; до</div>
                <div>
                  <input v-model="end_date" class="input" />
                </div>
              </div>
            </div>
            <div class="href-btn">
              <div>
                <a href="#" class="href-yellow">дополнительно</a>
              </div>
              <div></div>
              <div>
                <button
                  @click.prevent="showAll"
                  class="btn-pink"
                >показать {{total_count}} объявлений</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-dop">
        <div>
          <div class="sort-activ">
            <div>сортировать:</div>
            <div>
              <select @change="updateList" v-model="filter.ordering" class="slkt">
                <option v-for="(opt, i) of orderingList" :key="i" :value="opt">{{opt.name}}</option>
              </select>
            </div>
          </div>
          <div class="block"></div>
          <!-- <div class="switch">
            <div @click="modeMap=false" :class="{'white-cub': !modeMap}">список</div>
            <div @click="modeMap=true" :class="{'white-cub': modeMap}">на карте</div>
          </div>-->
        </div>
      </div>
      <div class="conteinr">
        <div v-for="(offer, i) of offers" :key="i">
          <div class="all-bike">
            <div class="img-bike">
              <img :src="offer.images[0]" />
            </div>
            <div class="all-info">
              <div class="info-right">
                <div class="h_1">{{offer.bike.name}}</div>
                <br />
                <div class="info-bike">
                  {{offer.volume}} см, {{offer.color}}, {{offer.production_year}}г,
                  <br />механика, ABC, ESP
                  <br />(АККПП, ABC,
                  ESP)
                </div>
              </div>
              <div class="info-middle1">
                <div class="thb">
                  <b>&nbsp;</b>
                </div>
                <br />
                <div class="price">
                  <div style="display: flex; align-items:center;">
                    <div>
                      <img
                        src="@/assets/img/pledge-icon.png"
                        style="width: 20px; margin-right: 7px;"
                      />
                    </div>
                    залог {{offer.deposit}} USD
                  </div>
                  <div style="display: flex; align-items:center;">
                    <div>
                      <img src="@/assets/img/map-icon.png" style="width: 20px; margin-right: 7px;" />
                    </div>
                    <!-- TODO: Убрать проверку offer.islands[0] &&, когда все офферы будут валидными -->
                    {{offer.islands[0] && offer.islands[0].name}}, {{offer.beaches[0] && offer.beaches[0].name}}
                  </div>
                  <div style="display: flex; align-items:center;">
                    <div>
                      <img src="@/assets/img/car-icon.png" style="width: 20px; margin-right: 8px;" />
                    </div>
                    {{shipping?'доставка есть':'нет доставки'}}
                  </div>
                </div>
              </div>
              <div class="info-left">
                <div class="price-btn">
                  <div>
                    <!-- TODO: когда будет запрос с фильтром, там будут эти поля -->
                    <div class="h_1">1 234 THB</div>
                    <div>567 THB/сутки</div>
                  </div>
                  <div>
                    <button style="width: 162px; margin-left: 30px" class="btn-pink">забронировать</button>
                  </div>
                </div>
                <div class="write-chat">
                  <span class="icon">
                    <img src="@/assets/img/chat2.png" />
                  </span>
                  <span>
                    <a href="#">написать владельцу в чат</a>
                  </span>
                </div>
              </div>
            </div>
            <div class="line-bike"></div>
          </div>
          <div class="line-bike"></div>
        </div>
      </div>
    </div>
    <div class="mobile">
      Мобильная версия
      <!-- <div class="all-block">
        <div class="head-top">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div class="burger">
              <img src="@/assets/img/burger.png" />
            </div>
            <div>
              <a class="logo" href="#">
                <img src="@/assets/img/label.png" />
              </a>
            </div>
            <div class="map">
              <a href="#" style="text-decoration: underline; font-size: 12px;">
                <b>карта</b>
              </a>
            </div>
          </div>
          <div class="drop-down-line">
            <div>
              <select class="select-down" v-model="island">
                <option>Остров</option>
                <option>Пункт 2</option>
                <option>Пункт 3</option>
              </select>
            </div>
            <div>
              <select class="select-down" v-model="beach">
                <option>Пляж</option>
                <option>Пункт 2</option>
                <option>Пункт 3</option>
              </select>
            </div>
          </div>
          <div class="dop-btn">
            <div class="dop">
              <a href="#" style="text-decoration: underline; font-size: 12px;">
                <b>дополнительно</b>
              </a>
            </div>
            <div class="pink">
              <button class="btn-pink" style="width: 190px;">показать {{total_count}} байков</button>
            </div>
          </div>
          <div class="all-row">
            <div class="sort-activ">
              <div>сортировать:</div>
              <div>
                <select class="slkt">
                  <option>сначала дешевые</option>
                  <option>сначала дорогие</option>
                </select>
              </div>
            </div>
            <div class="all-bike">
              <div class="h_1 flex_space" style="margin-top: 11px;">
                <div>{{name_bike}}</div>
                <div>{{all_price}} THB</div>
              </div>
              <div class="info">
                <div
                  style="font-size: 11px; color: rgb(177, 177, 177);"
                >{{volume}} см, {{color}}, {{year}}г, автомат, ABC, ESP</div>
                <div style="font-size: 11px; color: rgb(177, 177, 177);">{{day_price}} THB / сутки</div>
              </div>
              <div class="img-bike" style="overflow-x: scroll;">
                <img :src="image" />
                <img :src="image" />
                <img :src="image" />
                <img :src="image" />
                <img :src="image" />
              </div>
              <div class="pledge">
                <div>залог {{pledge}} USD</div>
                <div>доставка есть</div>
                <div>{{island}}, {{beach}}</div>
              </div>
              <div class="botton-row">
                <div>
                  <a href="#" style="text-decoration: underline; font-size: 12px;">
                    <b>написать владельцу</b>
                  </a>
                </div>
                <div>
                  <button class="btn-pink" style="width: 157px;">забронировать</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { ClientOffer, User, Filter, Sequence } from '@/models'
import { ClientOrder } from '@/models'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Main',
  data: () => {
    return {
      modeMap: false,
      offers: null,
      total_count: null,
      filter: Filter.empty(),
      orderingList: Sequence.list()
    }
  },
  computed: mapGetters('User', ['isOwner', 'name']),
  methods: {
    logout() {
      User.logout()
      this.clearData()
    },
    async updateList() {
      this.offers = await ClientOffer.list(this.filter)
      console.log(this.offers)
      this.total_count = ClientOffer.total()
    },
    showAll() {
      this.filter.size = this.total_count
      this.updateList()
    },
    ...mapActions('user', ['clearData']),
    async test1() {
      // TODO: delete
      let ordersList = await ClientOrder.list()
      console.log(ordersList)
      return ordersList
      //      console.log(await ClientOrder.list())
    },
    async test2() {
      // TODO: delete
      console.log(await ClientOffer.currentOffer(41))
    },
    async test3() {
      // TODO: delete
      console.log(await ClientOrder.create(ClientOrder.example()))
    },
    async test4() {
      // TODO: delete
      let orders = await this.test1()
      let currentOrder = orders[0]
      console.log(currentOrder.status)
      currentOrder.status = 'booked'
      console.log(currentOrder.status)
      console.log(await ClientOrder.changeStatus(currentOrder))
    },
    async test5() {
      // TODO: delete
      console.log(await ClientOrder.example())
    }
  },
  async created() {
    this.updateList()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

@media (max-width: $desktop) {
  .desktop {
    display: none !important;
  }

  .head-top {
    margin: auto;
    background-color: white;
    border-radius: 4px;
    max-width: 425px;
    height: 600px;
    padding: 8px 15px;
  }

  .logo>img {
    width: 100px;
  }

  .burger>img {
    width: 50px;
    margin-left: -7px;
  }

  .drop-down-line {
    margin-top: 20px;
  }

  .select-down {
    width: 100%;
    height: 40px;
    outline: none;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
    box-shadow: 0px 3px 6px #c5c5c57d;
    color: #a8a8a8;
    font-size: 13px;
  }

  .dop-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 25px;
  }

  .all-row {
    width: 107%;
    height: 360px;
    border-radius: 5px;
    margin: 25px -14px;
    box-shadow: 0px 0px 7px #6f6f6f63;
    padding: 12px;
  }

  .slkt {
    border: none;
    color: #ff3179;
  }

  .sort-activ {
    display: flex;
    flex-flow: nowrap;
    justify-content: center;
    padding-top: 10px;
  }

  .sort {
    margin: 20px 0px;
    text-align: center;
  }

  .info {
    display: flex;
    justify-content: space-between;
    margin: 8px 0px;
    align-items: center;
  }

  .img-bike {
    display: flex;
  }

  .img-bike>img {
    width: 155px;
    border-radius: 5px;
    margin-right: 3px;
  }

  .pledge {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: rgb(177, 177, 177);
    margin: 8px 0px;
  }

  .botton-row {
    text-decoration: underline;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .all-bike {
    padding: 5px;
  }

  .botton-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

@media (min-width: $desktop) {
  .mobile {
    display: none !important;
  }

  button, input, select {
    outline: none !important;
  }

  input {
    outline: none !important;
  }

  .big_head {
    height: 400px;
    position: relative;
  }

  .big_head > div {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .background_img {
    background: url('~@/assets/img/background.jpg') no-repeat fixed center;
  }

  .background_blur {
    background-color: #2371b36b;
  }

  .top {
    background-color: aquamarine;
    width: 100%;
    height: 350px;
    position: relative;
  }

  .block {
    position: absolute;
    top: 20%;
    text-align: center;
  }

  .row-label {
    display: flex;
    justify-content: space-between;
    margin: 0px 12px;
  }

  .label > img {
    width: 140px;
    box-shadow: 2px 6px 10px #00000078;
  }

  .text-right {
    width: 200px;
    box-align: right;
  }

  .empty {
    width: 200px;
  }

  .prostitute {
    width: 98%;
    height: 44px;
    background-color: white;
    margin: auto;
    display: flex;
    margin-top: 40px;
    border-radius: 5px;
    box-shadow: 2px 6px 10px #00000078;
  }

  .drop-down-line {
    width: 555px;
    display: flex;
  }

  .input-group {
    width: 585px;
    display: flex;
    align-items: center;
  }

  .select-down {
    width: 277.5px;
    border: none;
    border-radius: 5px;
  }

  .input {
    height: 44px;
    margin-left: 10px;
    border: none;
  }

  .data {
    color: rgb(81, 81, 81);
    margin-left: 28px;
  }

  .href-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 12px 0px;
  }

  .row-dop {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .row-dop > div {
    width: 100%;
    max-width: 1090px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 33px 0px;
  }

  .slkt {
    border: none;
    color: #ff3179;
  }

  .sort-activ {
    display: flex;
  }

  .switch {
    background-color: yellow;
    border-radius: 5px;
    height: 33px;
    width: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0px 4px;

    div {
      cursor: pointer;
    }
  }

  .white-cub {
    background-color: white;
    border-radius: 5px;
    width: 55px;
    height: 25px;
    padding: 2px 5px;
  }

  .conteinr {
    margin: auto;
    margin-top: 45px;
    max-width: 950px;
  }

  .all-bike {
    display: flex;
    margin: 30px 5px 15px;
  }

  .img-bike > img {
    border-radius: 5px;
    width: 225px;
    height: 170px;
  }

  .img-bike {
    height: 190px;
    width: 230px;
  }

  .all-info {
    width: 670px;
    height: 190px;
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
  }

  .price {
    line-height: 1.8;
    color: #676666;
  }

  .copiy {
    text-decoration: underline;
    color: #868686;
    margin-bottom: 10px;
  }

  .line-bike {
    width: auto;
    height: 0.8px;
    background-color: #d0d0d0;
  }

  .info-bike {
    font-size: 13px;
  }

  .price-btn {
    display: flex;
    justify-content: space-between;
    text-align: right;
    height: 85px;
  }

  .write-chat {
    text-decoration: underline;
    height: 85px;
    text-align: right;
  }

  .icon > img {
    width: 27px;
    margin-right: 9px;
  }
}
</style>
