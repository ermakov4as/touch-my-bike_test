<template>
    <div class="test-menu" :class="{'test-menu-hide': !burger}">
        <div @click="burger=false"  class="cancel">X</div>
        <div class="block-burger">
            <div><a href="#" style="color: white;">Главная</a></div>
            <div><a href="#" style="color: white;">Избранное</a></div>
            <div><a href="#" style="color: white;">Бронь</a></div>
            <div><a href="#" style="color: white;">Личный кабинет</a></div>
            <div><a href="#" style="color: white; position:absolute; bottom:0; padding-bottom: 60px">Выход</a></div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'Burger',
  props : [ 'burger' ]
}
</script>

<style lang="stylus" scoped>
  .test-menu {
  position: absolute;
  height: 100%;
  transition: 1s all ease;
  background-color: blue;
  height: 100%;
  width: 300px; 
  top: 0;
  left: 0;
  border-radius: 0px 30px 30px 0px;
  box-shadow: 5px 0px 22px #000000ad;
}
.block-burger {
  margin: 60px;
  font-weight: bold;
  font-size: 15px;
  line-height: 2;
}
.cancel {
  color: white;
  right: 20px;
  top: 15px;
  position: absolute;
  font-size: 18px;
  cursor: pointer;
}

.test-menu-hide {
  width: 0px;
  opacity: 0;
}
</style>

