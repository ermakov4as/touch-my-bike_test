<template>
  <div class="form">
      <div class="block">
        <div class="activ-dagger">
            <img :src="image">
        </div>
        <!--<div class="dagger">
            <img src="./img/dagger.png"> 
        </div>-->
        <div class="name">{{name}}</div>
        <div class="round-foto">
            <img :src="image">
        </div>
        <div class="price-row">
            <div class="line"></div>
            <div class="price">{{day_price}} THB/сутки</div>
            <div class="line"></div>
        </div>
        <div class="input-group">
            <div class="data">{{start_date}}</div>
            <div style="margin: 0px 57px;"> &ndash; </div>
            <div class="data">{{end_date}}</div>
        </div>
        <div class="delivery-chkbx">Вам нужна доставка??
            <Checkbox @click="test1=!test1" :value="test1"></Checkbox>
        </div>
        <textarea class="comment"></textarea>
        <div class="delivery">Вы всегда можете обсудиться доставку байка в чате с владельцем</div>
        <div class="line" style="margin: 28px 0px; width: 100%;"></div>
        <div class="check">
            <div class="rent">
                <div>Аренда {{day_price}} THB x {{days}} дней</div>
                <div>{{all_price}} THB</div>
            </div>
            <div class="rent">
                <div>Доставка</div>
                <div>{{delivery}} THB</div>
            </div>
            <div class="line" style="background-color: #484848; width: 100%;"></div>
            <div class="all">
                <div>Всего</div>
                <div>1300 THB</div>
            </div>
            <button class="btn-pink" style="width: 155px; margin-top: 15px;">Забронировать</button>
        </div>
      </div>  
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import {bikeBuild} from '@/services/factories'

export default {
  name: 'ReservationForm',
  components: { Checkbox },
  data () {
      return {
        ...bikeBuild(),
        test1: false, 
        delivery : '150',
        days : '5',
      }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

.form {
    position absolute
    background-color #0000008c
    width 100%
    height 950px
    top: 0
    left: 0
}

.block {
    margin: auto;
    margin-top: 70px;
    background-color: #F7F8F7;
    border-radius: 25px;
    max-width: 430px;
    height: 650px;
    padding: 15px;
}
.activ-dagger>img  {
    width: 30px;
}
.dagger>img {
    width: 20px;
} 

.name {
    text-align:center;
    font-size: 25px;
    font-weight: bold;
    color: black;
}
.round-foto>img {
    width: 100px;
    height: 100px;
    border-radius: 100px;
}
.round-foto {
    text-align: center;
    margin-top: 15px;
}
.line {
    height: 1px;
    width: 125px;
    background-color: #c2c2c2;
}
.price-row {
    display flex
    justify-content space-between
    align-items center
    margin-top: 15px;
}
.price {
    font-weight bold
    font-size: 16px
}
.input-group {
    width: 100%
    display: flex;
    justify-content center
    align-items: center
    background-color: white
    box-shadow: 1px 4px 4px rgba(140, 140, 140, 0.08);
    border-radius: 5px;
    margin-top: 25px;
    height: 44px;
}
.data {
    font-weight: 600;
    font-size: 13px;
}
.delivery-chkbx {
    margin: 15px 0px
    font-weight: bold;
    font-size: 13px;
}
.comment {
    width: 100%;
    font-size: 13px;
    border-style: solid;
    border-width: 1px;
    border-color: #adadad;
    padding: 8px;
    border-radius: 5px;
    border none 
    box-shadow: 1px 4px 4px rgba(140, 140, 140, 0.08);
}
.delivery {
    font-size: 11px;
    font-weight: bold;
    color: #bdbdbd;
}
.check {
    width: 300px;
    text-align: center;
    margin auto
}
.rent {
    display flex
    justify-content space-between
    margin-bottom 5px
}
.all {
    display flex
    justify-content space-between
    margin-bottom 5px
    font-weight  bold  
}
</style>
