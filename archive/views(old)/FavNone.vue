<template>
  <div>
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
        <div class="none">
          <div class="name">Избранное</div>
          <div style="color: #f9127b;">&nbsp; /у вас еще нет избранного</div>
        </div>
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

export default {
  name: 'FavNone',
  data() {
    return {
      offers: null
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

  .question {
    margin-top: 35px;
    text-align: center;
    font-weight: bold;
  }

  .btn-yellow>img {
    width: 22px;
  }

  .btn-yellow {
    border: none;
    background-color: yellow;
    color: black;
    height: 43px;
    width: 165px;
    margin: 0px 13px;
    border-radius: 6px;
    box-shadow: 2px 2px 6px #9e9e9e3b;
  }

  .none {
    widows: 100%;
    border: 1px solid #afafaf;
    height: 60px;
    border-radius: 6px;
    outline: none;
    display: flex;
    align-items: center;
    padding-left: 15px;
  }

  .name {
    font-size: 20px;
    line-height: 1.3;
    font-weight: bold;
  }
}

@media (min-width: $desktop) {
  .mobile {
    display: none !important;
  }
}
</style>
