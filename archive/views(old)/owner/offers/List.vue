<template>
  <div>
    <OwnersHeader></OwnersHeader>
    <div class="desktop">
      <div class="conteinr">
        <div class="top">
          <div class="foto-name">
            <div class="round-ava">
              <img :src="user.avatar" />
            </div>
            <div class="name">
              <b>
                {{user.name}}
                <br />
                {{user.surname}}
              </b>
            </div>
          </div>
          <div class="number-mail">
            <div>{{user.island}}, {{user.beach}}</div>
            <div>
              <u>{{user.number}}</u>
            </div>
            <div>
              <u>{{user.mail}}</u>
            </div>
          </div>
          <div class="edit-profile">
            <a href="#" class="href-editor" style="color: rgb(84, 84, 84)">редактировать профиль</a>
            <img src="@/assets/img/editor.png" />
          </div>
        </div>
        <div class="orders-garage">
          <div>
            <div class="empty-block"></div>
            <a href="#" class="orders">заказы</a>
            <span>/ гараж</span>
            <div class="empty-block"></div>
          </div>
        </div>
        <div class="line"></div>
        <div class="garage-btn">
          <div class="name-garag">
            <div class="name">
              <b>Гараж</b>
            </div>
            <div class="empty-block-garag"></div>
            <div>
              <router-link :to="{ name: 'offerNew'}">добавить объявление</router-link>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn-blue">успешно сдан</button>
            <button class="btn-white">отменен мной</button>
          </div>
          <div class="sort-date">
            <div class="empty-block-garag"></div>
            <div class="sort-activ">
              <div>сортировать:</div>
              <div>
                <select class="slkt">
                  <option>по дате</option>
                  <option>по времени</option>
                  <option>по цене</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(offer, i) in offers" :key="i">
          <div class="all-bike">
            <div
              @click="$router.push({ name: 'offer', params: { id: offer.id } })"
              class="img-bike"
            >
              <img :src="offer.images[0].url" />
            </div>
            <div class="all-info">
              <div class="info-right">
                <div
                  @click="$router.push({ name: 'offer', params: { id: offer.id } })"
                  class="h_1"
                >{{offer.bike.name}}</div>
                <br />
                <div class="info-bike">
                  {{offer.volume}}, {{offer.color}}, {{offer.year}}г,
                  <br />
                  {{offer.automatic_transmission ? 'АКП' : 'механика'}}, {{offer.abs ? 'ABS' : ''}}, {{offer.esp ? 'ESP' : ''}}
                </div>
              </div>
              <div class="info-middle">
                <div class="thb">
                  <b>от {{Math.min(...offer.prices)}} THB</b>
                </div>
                <br />
                <div class="price">
                  залог {{offer.deposit}} USD
                  <br />доставка есть
                  <br />
                  {{offer.islands[0].name}}, {{offer.beaches[0].name}}
                </div>
              </div>
              <div class="info-left">
                <div class="sort-activ">
                  <div>состояние:</div>
                  <div>
                    <select v-model="offer.is_active" class="slkt">
                      <option :value="true">активно</option>
                      <option :value="false">пассивно</option>
                    </select>
                  </div>
                </div>
                <div style="margin-top: 10px;">
                  <router-link
                    :to="{ name: 'offerEdit', params: { id: offer.id } }"
                    class="orders"
                  >редактировать объявление</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="line-bike"></div>
        </div>
      </div>
    </div>
    <!-- <div class="mobile">
      <div class="block">
        <div class="content">
          <div class="top-row">
            <span style="color: black;">
              Гараж
              <a href="#" class="pink">все</a>
            </span>
            <div style="text-decoration: underline;">
              <router-link :to="{ name: 'offerNew' }">добавить объявление</router-link>
            </div>
          </div>
          <div class="sort">
            сортировать:
            <a href="#" class="pink">сначала дешевые</a>
          </div>
          <div @click="$router.push({ name: 'offer', params: { id: 1 } })" class="h_1 flex_space">
            <div>{{name_bike}}</div>
            <div>{{all_price}} THB</div>
          </div>
          <div class="info">
            <div
              style="font-size: 11px; color: rgb(177, 177, 177);"
            >{{volume}} см, {{color}}, {{year}}г, автомат, ABC, ESP</div>
            <div>
              состояние:
              <a href="#">активно</a>
            </div>
          </div>
          <div
            @click="$router.push({ name: 'offer', params: { id: 1 } })"
            class="img-bike"
            style="overflow-x: scroll;"
          >
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
              <a href="#" style="color: darkgrey">создать</a>
            </div>
            <div>
              <router-link :to="{ name: 'offerEdit', params: { id: 1 } }">редактировать объявление</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import { User, OwnerOffer } from '@/models'
import OwnersHeader from '@/components/owner/OwnersHeader'

export default {
  name: 'OffersMain',
  components: { OwnersHeader },
  data() {
    return {
      offers: null,
      user: User.example()
    }
  },
  async created() {
    this.offers = await OwnerOffer.list()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

@media (max-width: $desktop) {
  .desktop {
    display: none !important;
  }

  .pink {
    color: #FF3179;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
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
    cursor: pointer;
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
}

@media (min-width: $desktop) {
  .mobile {
    display: none !important;
  }

  .logo>img {
    width: 110px;
    box-shadow: 2px 2px 8px -4px #000;
  }

  .round-foto>img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    padding: 4px;
  }

  .chat-icon>img {
    width: 53px;
    height: 40px;
  }

  .conteinr {
    margin: auto;
    margin-top: 45px;
    max-width: 900px;
  }

  .grey {
    background-color: rgba(73, 73, 73, 0.1);
  }

  .top {
    display: flex;
    justify-content: space-between;
    margin: 0px 5px;
  }

  .foto-name {
    display: flex;
    align-items: center;
    margin-right: -40px;
  }

  .round-ava>img {
    width: 120px;
    height: 120px;
    border-radius: 80px;
  }

  .name {
    font-size: 25px;
    line-height: 1.3;
    margin-left: 30px;
    color: black;
  }

  .edit-profile>img {
    width: 20px;
  }

  .number-mail {
    line-height: 1.8;
    font-size: 13px;
    letter-spacing: 0.4px;
    margin-top: 28px;
    color: #868686;
  }

  .edit-profile {
    margin-top: 28px;
  }

  .orders-garage {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .empty-block {
    width: 50px;
  }

  .orders {
    text-decoration: underline;
    color: #4ac2ed;
    letter-spacing: 0.4px;
  }

  .line {
    margin: 20px 5px 0px 5px;
    width: auto;
    height: 0.8px;
    background-color: #d0d0d0;
  }

  .name-garag {
    display: flex;
    align-items: center;
    margin-top: 25px;
  }

  .empty-block-garag {
    width: 35px;
    height: 1px;
  }

  .btn-group {
    margin-left: 30px;
    margin-top: 25px;
  }

  .btn-blue {
    background-color: #2eabf8;
    color: white;
    border: none;
    width: 140px;
    height: 40px;
    border-radius: 20px;
    outline: none;
  }

  .btn-white {
    background-color: #ffffff;
    color: grey;
    width: 140px;
    height: 40px;
    border-radius: 20px;
    outline: none;
  }

  .sort-date {
    display: flex;
    justify-content: space-between;
    margin-right: 5px;
    margin-top: 30px;
  }

  .all-bike {
    display: flex;
    margin: 30px 5px 15px;
  }

  .img-bike>img {
    width: 230px;
    height: 190px;
  }

  .img-bike {
    height: 190px;
    width: 230px;
    cursor: pointer;
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

  .slkt {
    border: none;
    color: rgb(66, 187, 247);
  }

  .sort-activ {
    display: flex;
  }
}
</style>
