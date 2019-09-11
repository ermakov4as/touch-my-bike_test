<template>
  <div v-if="offer">
    <OwnersHeader></OwnersHeader>
    <div class="desktop">
      <div class="conteinr">
        <div class="h_1">{{offer.bike.name}}</div>
        <div class="all-edit">
          <div class="foto-bike">
            <img :src="offer.images[0].url" />
          </div>
          <div class="edit">
            <div class="edit-left">
              <div class="edit-left-top">
                <div>
                  Объем:
                  <span>{{offer.volume}}</span> см3
                </div>
                <div>
                  Цвет:
                  <span style="color: #5b46ff;">{{offer.color.name}}</span>
                </div>
                <div>
                  Год:
                  <span>
                    {{offer.year}}
                    <br />
                    {{offer.akp?'АКП':''}} {{offer.esp?'ESP':''}} {{offer.abs?'ABS':''}}
                  </span>
                </div>
              </div>
              <div class="edit-left-top" style="line-height: 2;">
                <div style="display: flex; align-items:center;">
                  <div>
                    <img src="@/assets/img/pledge-icon.png" style="width: 20px; margin-right: 7px;" />
                  </div>
                  <div>залог:&nbsp;</div>
                  {{offer.deposit}} USD
                </div>
                <div style="display: flex; align-items:center;">
                  <div>
                    <img src="@/assets/img/map-icon.png" style="width: 20px; margin-right: 7px;" />
                  </div>
                  <span>{{offer.island.name}}, {{offer.beach.name}}</span>
                </div>
                <div style="display: flex; align-items:center;">
                  <div>
                    <img src="@/assets/img/car-icon.png" style="width: 20px; margin-right: 8px;" />
                  </div>
                  <span
                    style="display: flex; align-items:center;"
                  >{{offer.shipping ? 'доставка' : 'нет доставки'}}</span>
                </div>
              </div>
            </div>
            <div></div>
            <div class="edit-right">
              <div class="edit-left-top">
                <div style="font-size: 18px;">
                  гос номер:
                  <b>{{offer.number}}</b>
                </div>
                <div>
                  состояние:
                  <a href="#" style="color: rgb(66, 187, 247);">активно</a>
                </div>
              </div>
              <div class="edit-left-boutton">
                <div class="date">
                  <div v-for="(p, i) in offer.prices" :key="i">
                    от {{p.days}} дней
                    <span
                      v-if="offer.prices[i+1]"
                    >до {{offer.prices[i+1].days - 1}} дней</span>
                  </div>
                </div>
                <div class="price">
                  <div v-for="(p, i) in offer.prices" :key="i">{{p.price}} TMB / сутки</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="else-foto">
          <img v-for="(img, i) of offer.images" :key="i" :src="img.url" />
        </div>
        <div class="container-great">
          <div class="comment">
            <span>тут был бы комментарий</span>
          </div>
          <div class="group">
            <div style="width: 120px;"></div>
            <button
              @click="$router.push({ name: 'offerEdit', params: { id: offer.id }})"
              class="btn-save"
            >Редактировать</button>
            <router-link class="btn btn-link" :to="{name: 'offers'}">Вернуться в гараж</router-link>
            <div style="width: 120px;"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="mobile">
      <div class="block">
        <div class="content">
          <div class="top-row">
            <div class="name">
              <b>
                {{name_bike}}
                <br />
                от {{day_price}} THB/сутки
              </b>
            </div>
            <div class="condition">
              состояние:
              <a href="#" style="color: rgb(32, 118, 238)">активно</a>
            </div>
          </div>
          <div class="img-bike">
            <img :src="image" />
            <img :src="image" />
          </div>
          <div class="comment">{{comment}}</div>
          <div>
            <b>Гос.номер:</b>
            <span class="grey">{{state_number}}</span>
          </div>
          <div class="info">
            <div>
              <b>Объем:</b>
              <span class="grey">{{volume}} см3</span>
            </div>
            <div>
              <b>Цвет:</b>
              <span class="grey">{{color}}</span>
            </div>
            <div>
              <b>Год:</b>
              <span class="grey">{{year}}г</span>
            </div>
            <div>{{akp?'АКП':''}} {{esp?'ESP':''}} {{abs?'ABS':''}}</div>
          </div>
          <br />
          <div style="display: flex; align-items:center;">
            <div>
              <img src="@/assets/img/pledge-icon.png" style="width: 20px; margin-right: 7px;" />
            </div>Залог:&nbsp;
            <span class="grey">{{pledge}}USD</span>
          </div>
          <div style="display: flex; align-items:center;">
            <div>
              <img src="@/assets/img/map-icon.png" style="width: 20px; margin-right: 7px;" />
            </div>
            <span class="grey">{{island}}, {{beach}}</span>
          </div>
          <div style="display: flex; align-items:center;">
            <div>
              <img src="@/assets/img/car-icon.png" style="width: 20px; margin-right: 8px;" />
            </div>доставка
          </div>
          <br />
          <div class="day-price">
            <div class="day">
              1 - 3 дней
              <br />4 - 7 дней
              <br />8 - 10 дней
              <br />11 - 14 дней
              <br />15 - 30 дней
              <br />
            </div>
            <div class="price">
              <span class="grey">250 THB</span> / сутки
              <br />
              <span class="grey">230 THB</span> / сутки
              <br />
              <span class="grey">200 THB</span> / сутки
              <br />
              <span class="grey">190 THB</span> / сутки
              <br />
              <span class="grey">160 THB</span> / сутки
              <br />
            </div>
          </div>
          <div class="btn">
            <div></div>
            <div>
              <button
                @click="$router.push({ name: 'offerEdit', params: { id: 1 }})"
                class="btn-blue"
              >редактировать</button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
  <div v-else>Spinner...</div>
</template>

<script>
import OwnersHeader from '@/components/owner/OwnersHeader'
import { OwnerOffer } from '@/models'

export default {
  name: 'Offer',
  components: { OwnersHeader },
  data() {
    return { offer: null }
  },
  async created() {
    this.offer = await OwnerOffer.get(this.$route.params.id)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

@media (max-width: $desktop) {
  .desktop {
    display: none !important;
  }

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
  }

  .name {
    text-decoration: underline;
    color: gray;
  }

  .img-bike>img {
    width: 155px;
    border-radius: 5px;
    box-shadow: 4px 4px 15px -4px #00000080;
    margin-right: 5px;
  }

  .img-bike {
    margin: 10px 0px;
  }

  .comment {
    color: gray;
    line-height: 1.2;
    margin: 20px 0px;
  }

  .grey {
    color: gray;
  }

  .info {
    margin-top: 20px;
  }

  .day-price {
    display: flex;
  }

  .day {
    margin-right: 70px;
  }

  .btn {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
  }

  .btn-blue {
    border-radius: 5px;
    background-color: rgb(35, 115, 255);
    color: white;
    font-size: 15px;
    box-shadow: 0px 5px 10px #2373ff7d;
    border: none;
    height: 40px;
    width: 210px;
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

  .bike-name {
    margin-left: 5px;
    font-size: 25px;
    color: black;
    margin-bottom: 9px;
  }

  .foto-bike>img {
    border-radius: 8px;
    height: 270px;
    width: 370px;
  }

  .all-edit {
    display: flex;
    margin-left: 5px;
  }

  .edit {
    display: flex;
    justify-content: space-between;
    width: 530px;
  }

  .edit-left {
    margin-left: 20px;
  }

  .edit-right {
    width: 280px;
  }

  .edit-left-top {
    height: 135px;
  }

  .else-foto>img {
    width: 100px;
    border-radius: 5px;
    margin-right: 4px;
  }

  .else-foto {
    margin-left: 5px;
    margin-top: 6px;
  }

  .container-great {
    margin-top: 15px;
    display: flex;
    margin-left: 5px;
  }

  .comment {
    width: 550px;
    font-size: 13px;
  }

  .group {
    display: flex;
    justify-content: space-between;
  }

  .btn-save {
    background-color: rgb(66, 187, 247);
    color: white;
    border-radius: 8px;
    border: none;
    height: 37px;
    width: 145px;
    box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.79);
    outline: none;
  }

  .edit-left-boutton {
    display: flex;
  }

  .date {
    width: 120px;
    line-height: 1.7;
  }

  .price {
    width: 160px;
    line-height: 1.7;
  }
}
</style>
