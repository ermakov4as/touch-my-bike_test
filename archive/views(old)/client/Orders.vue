<template>
  <div>
    <div class="desktop">
      <div class="row-blue">
        <div class="nav-right">
          <div class="square-yellow">
            <div></div>
            <div>
              <b>EN</b>
            </div>
            <div></div>
          </div>
          <div class="round-foto">
            <img :src="image" />
          </div>
          <div class="chat-icon clearfix">
            <img src="@/assets/img/chat.png" />
          </div>
          <div>
            <a href="#" class="href-yellow" style="padding: 0px 15px;">как это работает?</a>
            <a href="#" class="href-yellow" style="padding: 0px 15px;">помощь</a>
          </div>
        </div>
        <div class="logo">
          <img src="@/assets/img/label.png" />
        </div>
      </div>
      <div class="conteinr">
        <div class="top">
          <div class="foto-name">
            <div class="round-ava">
              <img :src="image" />
            </div>
            <div class="name" style="margin-left: 30px;">
              <b>
                {{name}}
                <br />
                {{surname}}
              </b>
            </div>
          </div>
          <div class="edit-profile">
            <a href="#" class="href-editor" style="color: rgb(84, 84, 84)">
              <router-link
                :to="{ name: 'offerEdit', params: { id: 1 } }"
                style="margin-right: 5px;"
              >редактировать профиль</router-link>
            </a>
            <img src="@/assets/img/editor.png" />
          </div>
        </div>
        <div class="line"></div>
        <div class="garage-btn">
          <div class="name-garag">
            <div class="name">
              <b>Бронь</b>
            </div>
            <div class="expect">/ ожидаем подтверждение от владельца</div>
          </div>
        </div>
        <div class="reservation">
          <div class="foto-owner">
            <div class="foto-bike">
              <img :src="image" />
            </div>
            <div class="else-foto">
              <img :src="image" />
              <img :src="image" />
              <img :src="image" />
            </div>
            <div style="margin-top: 50px;">{{island}}, {{beach}}</div>
            <div style="margin: 10px 0px;">
              Владелец:
              <a href="#" style="text-decoration: underline;">{{owner_name}}</a>
            </div>
            <span>
              <a href="#" style="text-decoration: underline;">написать владельцу в чат</a>
            </span>
          </div>
          <div class="info-bike">
            <div>Объем: {{volume}}см3</div>
            <div>
              Цвет:
              <span style="color: #5b46ff;">{{color}}</span>
            </div>
            <div>Год: {{year}}</div>
            <div>механическая, ABC, ESP</div>
          </div>
          <div class="chek-list">
            <div style="font-weight: bold;">Даты аренды</div>
            <div class="input-group">
              <div class="data">{{start_date}}</div>
              <div style="margin: 0px 70px;">до</div>
              <div class="data">{{end_date}}</div>
            </div>
            <div style="font-weight: bold; margin-top: 20px;">Адрес доставки</div>
            <div class="adress">{{address}}</div>
            <div style="height: 50px"></div>
            <div class="price-row">
              <div>Аренда {{day_price}} THB x {{days}} дней</div>
              <div>{{all_price}} THB</div>
            </div>
            <div class="price-row">
              <div>Доставка</div>
              <div>{{delivery}} THB</div>
            </div>
            <div class="line" style="margin: 20px 0px 24px; width: 100%;"></div>
            <div class="price-row" style="font-weight: bold;">
              <div>Итого</div>
              <div>1300 THB</div>
            </div>
            <div class="passiv-btn">
              <div class="btn-grey">изменить</div>
              <div class="btn-withe">отменить</div>
            </div>
            <div style="height: 50px"></div>
            <div style="color: rgba(255, 24, 33, 0.83);font-size: 12px">Ожидаем подтверждение</div>
          </div>
        </div>
        <div class="question" style="margin-top: 45px;">Остались вопросы? нужна помощь с выбором?</div>
        <div style="display: flex; justify-content: space-between;">
          <div></div>
          <div>
            <button class="btn-yellow" style="width: 235px; margin: 9px 0px 20px 0px;">
              <img src="@/assets/img/chat3.png" />
              <span style="margin-left: 10px;">Написать нам в чат</span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="blue">
        <div class="burger">
          <img src="@/assets/img/burger-white.png" />
        </div>
        <div>
          <a class="logo" href="#">
            <img src="@/assets/img/label.png" />
          </a>
        </div>
        <div class="chat">
          <img src="@/assets/img/chat.png" />
        </div>
      </div>
      <div class="block">
        <div class="name">Бронь</div>
        <div class="line"></div>
        <div class="img-bike" style="overflow-x: scroll;">
          <img :src="image" />
          <img :src="image" />
          <img :src="image" />
          <img :src="image" />
          <img :src="image" />
        </div>
        <div class="info" style="display flex ">
          <div>
            <div style="margin: 25px 0px;">
              <div>Объем: {{volume}} см3</div>
              <div>Цвет: {{color}}</div>
            </div>
            <div>
              <div>
                Владелец:
                <a href="#" style="text-decoration: underline;">{{owner_name}}</a>
              </div>
              <div>{{island}}, {{beach}}</div>
            </div>
          </div>
          <div>
            <div style="margin: 25px 0px;">
              <div>Год: {{year}}г</div>
              <div>механическая, ABC, ESP</div>
            </div>
            <div>
              <button class="btn-yellow">Написать в чат</button>
            </div>
          </div>
        </div>
        <div style="font-weight: bold; margin-top: 35px;">Дата аренды</div>
        <div class="input-group data">
          <div>{{start_date}}</div>
          <div style="margin: 0px 57px;">до</div>
          <div>{{end_date}}</div>
        </div>
        <div style="font-weight: bold; margin-top: 10px;">Адрес доставки</div>
        <div class="input-group data">
          <div style="margin: 0px 57px;">{{address}}</div>
        </div>
        <div class="check">
          <div class="rent">
            <div>Аренда {{day_price}} THB x {{days}} дней</div>
            <div>{{all_price}} THB</div>
          </div>
          <div class="rent">
            <div>Доставка</div>
            <div>150 THB</div>
          </div>
          <div class="line" style="background-color: #b7b7b7; width: 100%; margin-top: 8px;"></div>
          <div class="rent" style="font-weight: bold;">
            <div>Итого</div>
            <div>1300 THB</div>
          </div>
          <div class="passiv-btn">
            <div class="btn-grey">изменить</div>
            <div class="btn-withe">отменить</div>
          </div>
        </div>
        <div style="color: #129de2; font-weight: bold; font-size: 13px;">Бронь подтверждена</div>
        <div class="question">Остались вопросы? нужна помощь с выбором?</div>
        <div style="display: flex; justify-content: space-between;">
          <div></div>
          <div>
            <button class="btn-yellow" style="width: 235px; margin: 9px 0px 20px 0px;">
              <img src="@/assets/img/chat3.png" />
              <span style="margin-left: 10px;">Написать нам в чат</span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { OwnerOffer } from '@/models'
import { bikeBuild } from '@/services/factories'

export default {
  name: 'Orders',
  data() {
    return {
      ...bikeBuild(),
      offers: null,
      surname: 'Орлов',
      name: 'Владимир',
      owner_name: 'Сергей',
      days: '5',
      address: 'Отель семь пальм и три кокоса',
      delivery: '150'
    }
  },
  created() {
    OwnerOffer.offers().then(offers => (this.offers = offers.results))
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

@media (max-width: $desktop) {
  .desktop {
    display: none !important;
  }

  .blue {
    background-color: rgb(32, 118, 238);
    height: 50px;
    box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.79);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo>img {
    margin-top: 5px;
    width: 86px;
    box-shadow: 2px 2px 8px -4px #000;
  }

  .burger>img {
    width: 50px;
  }

  .chat>img {
    width: 50px;
  }

  .block {
    margin: auto;
    margin-top: 25px;
    max-width: 425px;
    height: 420px;
    padding: 15px;
  }

  .line {
    margin: 5px 0px 16px 0px;
    width: 100%;
    height: 0.8px;
    background-color: #d0d0d0;
  }

  .name {
    font-size: 25px;
    line-height: 1.3;
    color: black;
    font-weight: bold;
  }

  .img-bike {
    display: flex;
    cursor: pointer;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }

  .img-bike>img {
    width: 155px;
    border-radius: 5px;
    margin-right: 3px;
  }

  .input-group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid #cecece;
    border-radius: 5px;
    margin-top: 3px;
    color: #b5b5b5;
    height: 44px;
  }

  .data {
    font-weight: 600;
    font-size: 13px;
  }

  .check {
    width: 100%;
    text-align: center;
    margin: 25px 0px 10px;
  }

  .rent {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .passiv-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .btn-grey {
    background-color: #b3b3b3;
    height: 40px;
    width: 193px;
    border-radius: 4px;
    color: white;
    text-align: center;
    padding-top: 9px;
  }

  .btn-withe {
    border: solid #dadada 1px;
    height: 40px;
    width: 193px;
    border-radius: 4px;
    color: #b3b3b3;
    text-align: center;
    padding-top: 9px;
  }
}

.btn-yellow {
  border: none;
  background-color: yellow;
  color: black;
  height: 43px;
  width: 165px;
  margin: 0px 4px;
  border-radius: 6px;
  box-shadow: 2px 2px 6px #9e9e9e3b;
}

.question {
  margin-top: 35px;
  text-align: center;
  font-weight: bold;
}

.btn-yellow>img {
  width: 22px;
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
    width: 100px;
    height: 100px;
    border-radius: 80px;
  }

  .name {
    font-size: 25px;
    line-height: 1.3;
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
    text-decoration: underline;
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

  .reservation {
    margin-top: 13px;
    display: flex;
    justify-content: space-between;
  }

  .foto-bike>img {
    border-radius: 4px;
    margin: 7px 7px 7px 0px;
    height: 270px;
    width: 370px;
  }

  .else-foto>img {
    width: 100px;
    border-radius: 4px;
    margin-right: 9px;
  }

  .else-foto {
    margin-top: 6px;
  }

  .chat-btn>img {
    width: 20px;
    margin: 0px 14px;
  }

  .chat-btn {
    display: flex;
    align-items: center;
    height: 40px;
    width: 280px;
    border: none;
    border-radius: 3px;
    background-color: yellow;
    font-weight: bold;
    font-size: 13px;
    box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.79);
  }

  .info-bike {
    line-height: 1.8;
    font-size: 13px;
    margin: 20px 0px 0px -27px;
  }

  .chek-list {
    width: 320px;
    margin-top: -24px;
  }

  .input-group {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    border: solid #dadada 1px;
    margin-top: 5px;
  }

  .data {
    font-size: 13px;
  }

  .adress {
    width: 100%;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    border: solid #dadada 1px;
    margin-top: 5px;
    padding: 9px 20px;
    font-size: 13px;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    margin: 15px 0px;
    font-size: 13px;
  }

  .passiv-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .btn-grey {
    background-color: #b3b3b3;
    height: 40px;
    width: 155px;
    border-radius: 4px;
    color: white;
    text-align: center;
    padding-top: 9px;
  }

  .btn-withe {
    border: solid #dadada 1px;
    height: 40px;
    width: 155px;
    border-radius: 4px;
    color: #b3b3b3;
    text-align: center;
    padding-top: 9px;
  }

  .expect {
    margin-left: 7px;
    color: #ff0047d4;
    padding-top: 5px;
    padding-top: 5px;
  }

  .favourites {
    padding: 38px 20px;
    display: flex;
    justify-content: space-between;
  }

  .fav-foto-bike>img {
    width: 183px;
    height: 150px;
    border-radius: 4px;
  }

  .usd100 {
    margin-top: 27px;
    line-height: 2;
  }

  .btn-price {
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

  .heart>img {
    width: 20px;
    margin: 11px 6px;
  }

  .row-info {
    width: 100%;
    margin-left: 25px;
  }
}
</style>
