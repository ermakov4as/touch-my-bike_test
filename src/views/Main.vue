<template>
  <div>
    <header>
      <BurgerNavbar :data="display" attr="burger"></BurgerNavbar>
      <Login></Login>
      <Registration></Registration>
      <div class="container" style="height: 420px;">
        <div class="row">
          <div class="col">
            <figure
                @click="display.burger=true;overlay.show(() => {display.burger=false})"
                class="burger m-1 d-md-none pointer"
            >
              <img src="@/assets/img/burger.png" />
            </figure>
          </div>

          <div class="col">
            <figure class="brand mx-auto mb-10">
              <img src="@/assets/img/brand.png" />
            </figure>
          </div>

          <div class="col text-right bold-14 text-u text-white">
            <ul v-if="user.role !== 'unreg'" class="d-none d-md-block">
              <li class="my-2">
                <router-link tag="span" :to="{name: 'Profile'}" class="pointer">личный кабинет</router-link>
              </li>
              <li class="my-2">
                <router-link tag="span" :to="{name: 'Orders'}" class="pointer">бронь</router-link>
              </li>
              <li class="my-2">
                <router-link tag="span" :to="{name: 'Favorites'}" class="pointer">избранное</router-link>
              </li>
              <li class="my-2">
                <router-link tag="span" :to="{name: 'Chat', params: {id: null}}" class="pointer">сообщения</router-link>
              </li>
            </ul>
            <ul v-else class="d-none d-md-block">
              <li class="my-2">
                <span class="pointer" @click="display.login = true">вход</span>
                <span> / </span>
                <span class="pointer" @click="display.registration = true">регистрация</span>
              </li>
            </ul>
          </div>
        </div>

        <section id="filter">
          <div id="main" class="input-box mb-1">
            <Select disabled :target="filter" attr="island" :options="collections.islands"
                width="50 25 23" separator>Остров</Select>
            <Select disabled :target="filter" attr="beach" :options="collections.beaches"
                width="50 25 22" separator="md">Пляж</Select>
            <Select disabled :target="filter" attr="date_from" :options="collections.dates_from" 
                width="0 25 23" separator>C</Select>
            <Select disabled :target="filter" attr="date_to" :options="collections.dates_to"
                width="0 25 22" separator="xl">по</Select>
            <Static v-if="filter.date_from && filter.date_to" sun width="0 0 10">{{ shop.days() }} дней</Static>
          </div>
          
          <div id="mobile-date">
            <div class="d-md-none input-box mb-1">
              <Select disabled :target="filter" attr="date_from" :options="collections.dates_from"
                  width="50 0 0" separator>С</Select>
              <Select disabled :target="filter" attr="date_to" :options="collections.dates_to" 
                  width="50 0 0">по</Select>
            </div>
          </div>

          <div id="mobile-filter" class="overlay-box d-md-none" :class="{'active': showFilter.state}">
            <div class="mx-2 mt-6 input-box">
              <Select disabled :target="filter" attr="brand" :options="collections.brands" width="100 0 0">Марка</Select>
            </div>
            <div class="mx-2 mt-1 input-box">
              <Select disabled :target="filter" attr="bike" :options="collections.bikes" width="100 0 0">Модель</Select>
            </div>
            <div class="mx-2 mt-1 input-box">
              <Select disabled :target="filter" attr="year_from" :options="collections.years"
                  width="50 0 0" separator>выпуск с</Select>
              <Select disabled :target="filter" attr="year_to" :options="collections.years"
                  width="50 0 0">выпуск до</Select>
            </div>
            <div class="mx-2 mt-1 input-box">
              <Select :target="filter" attr="akp" :options="collections.akp_options" width="100 0 0">коробка</Select>
            </div>
            <div class="mx-2 mt-1 input-box">
              <Checkbox :target="filter" attr="abs" width="50 0 0" separator>ABS</Checkbox>
              <Checkbox :target="filter" attr="esp" width="50 0 0">ESP</Checkbox>
            </div>
            <div class="mx-2 mt-1 input-box">
              <Checkbox :target="filter" attr="shipping" width="50 0 0" separator>Доставка</Checkbox>
              <Checkbox :target="filter" attr="deposit" width="50 0 0">Залог</Checkbox>
            </div>
            <button @click="shop.updateOffers()" class="btn btn-danger btn-long">Показать {{ shop.total_offers }}шт</button>
          </div>

          <div id="desktop-filter" class="d-none d-none" :class="{'d-md-block': showFilter.state}">
            <div class="position-relative input-box mt-3">
              <button @click="showFilter.hide()" class="btn btn-close md"></button>
              <Select disabled :target="filter" attr="brand" :options="collections.brands"
                  width="0 20 15" separator>Марка</Select>
              <Select disabled :target="filter" attr="bike" :options="collections.bikes"
                  width="0 40 15" separator="md">Модель</Select>
              <Select disabled :target="filter" attr="year_from" :options="collections.years"
                  width="0 20 11" separator="md">выпуск с</Select>
              <Select disabled :target="filter" attr="year_to" :options="collections.years"
                  width="0 20 11" separator="xl">выпуск до</Select>
              <Select disabled :target="filter" attr="akp" :options="collections.akp_options"
                  width="0 0 10" separator="md">коробка</Select>
              <Checkbox :target="filter" attr="abs" width="0 0 8" separator>ABS</Checkbox>
              <Checkbox :target="filter" attr="esp" width="0 0 8" separator>ESP</Checkbox>
              <Checkbox :target="filter" attr="shipping" width="0 0 10" separator>Доставка</Checkbox>
              <Checkbox :target="filter" attr="no_deposit" width="0 0 10">Без залога</Checkbox>
            </div>
          </div>

          <div
            v-if="!showFilter.state || windowWidth < $md"
            @click="showFilter.show()"
            class="text-white pointer text-u"
          >
            <h2>дополнительно</h2>
          </div>
        </section>
        <div class="text-center text-md-right">
          <button @click="shop.updateOffers()" class="btn btn-danger btn-long mt-4">показать {{ shop.total_offers }} шт</button>
        </div>
      </div>
    </header>
    <section id="offers-list" class="container bg-white px-2">
      <p class="sort mt-6 text-right">
        <span>сортировать:</span>
        <span v-if="filter.cheapFirst" @click="filter.cheapFirst=false" class="text-primary ml-1 pointer text-u">дешевые</span>
        <span v-else @click="filter.cheapFirst=true" class="text-primary ml-1 pointer text-u">дорогие</span>
      </p>
      <div v-for="offer of shop.offers" :key="offer.id">
        <OfferCard :offer="offer"></OfferCard>
      </div>
    </section>
  </div>
</template>

<script>
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import OfferCard from '@/components/OfferCard'
import Select from '@/components/Select'
import Checkbox from '@/components/Checkbox'
import Static from '@/components/Static'
import BurgerNavbar from '@/components/BurgerNavbar'

export default {
  components: {
    Login,
    Registration,
    OfferCard,
    Select,
    Checkbox,
    Static,
    BurgerNavbar
  },
  data() {
    return {
      showFilter: {
        state: false,
        show: function() {
          this.showFilter.state = true
          if (this.windowWidth < this.$md) {
            this.overlay.show(() => (this.showFilter.state = false))
          }
        }.bind(this),
        hide() {
          this.state = false
        }
      }
    }
  },
  created() {
    this.collections.init()
    this.shop.updateOffers()
  }
}
</script>

<style lang="scss" scoped>
@import '~@/style/var';
header {
  padding: $_1;
  background: linear-gradient(
      180deg,
      rgba(153, 52, 153, 0.7) 0%,
      rgba(251, 139, 58, 0.7) 70.31%,
      rgba(253, 199, 62, 0.7) 100%
    ),
    url('~@/assets/img/backround-image.png') no-repeat center/cover;
  .burger {
    width: 30px;
  }
  .brand {
    width: 120px;
    margin-top: $_9;
  }
  @media (min-width: $md) {
    height: 384px;
    .brand {
      width: 144px;
      margin-top: $_5;
    }
  }
  section#filter {
    .btn-close {
      position: absolute;
      top: 0;
      left: 0;
      margin-left: -15px;
      margin-top: -15px;
      z-index: 2;
    }
    .govno_heigh {
      position: absolute;
      height: 100vh;
      top: 0;
    }
    #mobile-filter {
      $h: 426px;
      $w: 306px;
      position: fixed;
      z-index: 11;
      width: $w;
      height: $h;
      top: 200vh;
      left: 50%;
      margin-top: -$h / 2;
      margin-left: -$w / 2;
      @include slow(top);
      &.active {
        top: 50%;
      }
      .btn-long {
        margin: $_5 $_8;
      }
    }
  }
}

section#offers-list {
  border-radius: $_2;
  margin-top: 0px - $_2;
  @media (min-width: $md) {
    border-radius: 0;
    margin-top: 0;
  }
}

#offers-list {
  border-radius: 30px;
}
</style>
