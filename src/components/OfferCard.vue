<template>
  <div>
    <div id="sm" class="d-md-none mt-3">
      <div class="d-flex justify-content-between align-items-start pb-2">
        <div>
          <h2>{{ offer.brand.name }}</h2>
          <h2>{{ offer.bike.name }}</h2>
        </div>
        <Heart :offer="offer" attr="is_favorite"></Heart>
      </div>
      <div>
        <p class="mb-1 text-secondary">
          <span>{{ offer.volume }} см³, {{ offer.color.name }}, {{ offer.year }}, </span>
          <span v-if='offer.abs'>ABS, </span>
          <span v-if='offer.esp'>ESP, </span>
          <span>{{ offer.akp.name }}</span>
        </p>
        <div>
          <div class="number">{{ offer.number }}</div>
          <div class="photos">
            <figure v-for="image of offer.images" :key="image.id" class="img-bike">
              <img :src="image.url" alt="..." class="img-bike d-flex" />
            </figure>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-start mt-5">
          <div class="text-secondary">
            <p>{{ offer.island.name }}, {{ offer.beach.name }}</p>
            <p v-if="offer.shipping">есть доставка до отеля</p>
            <p v-if="offer.deposit">залог {{ offer.deposit }} USD</p>
            <p v-else>залога нет</p>
          </div>
          <div class="text-right">
            <h2>от {{ offer.prices[offer.prices.length - 1].price }} ТНВ/сутки</h2>
            <p> всего: {{ shop.totalPrice(offer) }} ТНВ</p>
            <!-- <p class="text-secondary" v-for="(price, index) of offer.prices" :key="price.days * (-1)">
              <span>от {{ price.days }}</span>
              <span v-if="offer.prices[index + 1]"> - {{ offer.prices[index + 1].days - 1 }}</span>
              <span> дней: {{ price.price }} ТНВ/сутки</span>
            </p> -->
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-between align-items-center mt-2">
        <div>
          <div class="d-flex align-items-center">
            <figure class="foto-owner">
              <img src="@/assets/img/foto-owner.png" />
            </figure>
            <p class="ml-1">{{ offer.owner.name }}</p>
          </div>
          <router-link tag="p" class="text-primary pointer text-u" 
              :to="{name: 'Chat', params: {id: offer.owner.id}}">написать в чат</router-link>
        </div>
        <button class="btn btn-danger btn-short" @click="shop.preview(offer)">к бронированию</button>
      </div>
      <div class="separator mt-3"></div>
    </div>

    <div id="md" class="d-none d-md-block d-xl-none mt-5">
      <div class="d-flex justify-content-between align-items-start mb-3">
        <div class="d-flex">
          <h2 class="mr-1">{{ offer.brand.name }}</h2>
          <h2>{{ offer.bike.name }}</h2>
        </div>
        <Heart :offer="offer" attr="is_favorite"></Heart>
      </div>
      <div class="d-flex">
        <div>
          <div class="number">{{ offer.number }}</div>
          <figure class="img-bike pointer mr-3">
            <img :src="offer.images[0].url" alt="..." />
          </figure>
        </div>
        <div>
          <div>
            <p>{{ offer.volume }} см³, {{ offer.color.name }}, {{ offer.year }}</p>
            <p>
              <span v-if='offer.abs'>ABS, </span>
              <span v-if='offer.esp'>ESP, </span>
              <span>{{ offer.akp.name }}</span>
            </p>
          </div>
          <div class="bold-14 mt-5 mb-2">
            <div v-if="offer.deposit">залог {{ offer.deposit }} USD</div>
            <div v-else>залога нет</div>
          </div>
          <div>
            <div class="d-flex align-items-center">
              <figure class="foto-owner">
                <img src="@/assets/img/foto-owner.png" />
              </figure>
              <p class="ml-1">{{ offer.owner.name }}</p>
            </div>
            <router-link tag="p" class="text-primary pointer text-u" 
                :to="{name: 'Chat', params: {id: offer.owner.id}}">написать в чат</router-link>
          </div>
        </div>
        <div>
          <div class="ml-6">
            <p>{{ offer.island.name }}, {{ offer.beach.name }}</p>
            <p v-if="offer.shipping">есть доставка до отеля</p>
          </div>
          <div class="d-flex mt-6 pt-3 ml-5">
            <div class="text-right mr-3">
              <h2>от {{ offer.prices[offer.prices.length - 1].price }} ТНВ/сутки</h2>
              <p> всего: {{ shop.totalPrice(offer) }} ТНВ</p>
            </div>
            <div>
              <button class="btn btn-danger btn-short" @click="shop.preview(offer)">к бронированию</button>
            </div>
          </div>
        </div>
      </div>
      <div class="separator mt-4"></div>
    </div>

    <div id="xl" class="d-none d-xl-block mt-5">
      <div class="d-flex">
        <div class="number">{{ offer.number }}</div>
        <div class="img-bike pointer">
          <img :src="offer.images[0].url" alt="..." />
        </div>
        <div>
          <div class="d-flex justify-content-between align-items-center ml-5">
            <div>
              <h2>{{ offer.brand.name }}</h2>
              <h2>{{ offer.bike.name }}a</h2>
            </div>
            <div class="d-flex ml-45">
              <div class="text-right mr-3">
                <h2>от {{ offer.prices[offer.prices.length - 1].price }} ТНВ / сутки</h2>
                <p> всего: {{ shop.totalPrice(offer) }} ТНВ</p>
              </div>
              <div>
                <button class="btn btn-danger btn-short" @click="shop.preview(offer)">к бронированию</button>
              </div>
            </div>
            <Heart :offer="offer" attr="is_favorite" style="position: absolute; margin-left: 885px;"></Heart>
          </div>
          <div class="d-flex mt-4">
            <div class="ml-5">
              <p>{{ offer.volume }} см³, {{ offer.color.name }}, {{ offer.year }}</p>
              <p>
                <span v-if='offer.abs'>ABS, </span>
                <span v-if='offer.esp'>ESP, </span>
                <span>{{ offer.akp.name }}</span>
              </p>
            </div>
            <div class="ml-10">
              <p>{{ offer.island.name }}, {{ offer.beach.name }}</p>
              <p v-if="offer.shipping">есть доставка до отеля</p>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-end mt-3">
            <div class="bold-14 ml-5" v-if="offer.deposit">залог {{ offer.deposit }} USD</div>
            <div class="bold-14 ml-5" v-else>залога нет</div>
            <div>
              <div class="d-flex align-items-center justify-content-end">
                <figure class="foto-owner">
                  <img src="@/assets/img/foto-owner.png" />
                </figure>
                <p class="ml-1">{{ offer.owner.name }}</p>
              </div>
              <div>
                <router-link tag="p" class="text-primary pointer text-u" 
                    :to="{name: 'Chat', params: {id: offer.owner.id}}">написать в чат</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="separator mt-4"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Heart from './Heart'

export default {
  components: { Heart },
  props: ['offer'],
  created() {
    let tmp = $('#qwe')
    return tmp
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/var';

.number {
  position: absolute;
  width: 62px;
  height: 18px;
  background: #ffffff;
  border-radius: 5px;
  font-size: 9px;
  font-weight: bold;
  float: left;
  text-align: center;
  padding-top: 3px;
  margin: 6px;
}

.photos {
  white-space: nowrap;
  overflow-x: scroll;
}

.img-bike {
  display: inline-block;
  overflow: hidden;
  width: 144px;
  cursor: pointer;
  border-radius: $_1;
  margin-right: $_1;
  @media screen and (min-width: $md) {
    width: 217px;
  }
}

.foto-owner {
  width: 13px;
  height: 13px;
}

.separator {
  width: 100%;
  height: 1px;
  background: $gray-dark;
}
</style>
