<template>
  <div class="mobile">
    <div class="row-blue flex_space">
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
  </div>
</template>

<script>
export default {
  name: 'OwnersHeader'
}
</script>

<style lang="stylus" scoped>
@import '~@/app';

@media (max-width: $desktop) {
  .desktop {
    display: none !important;
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

  .basic-foto {
    font-size: 10px;
    margin-top: 3px;
    color: gray;
    text-align: center;
    width: 105px;
  }

  .volume-pledge {
    display: flex;
    margin-top: 30px;
  }

  .npt_day {
    margin-top: 30px;
  }

  .comment {
    width: 100%;
    margin-top: 35px;
    font-size: 13px;
    border-style: solid;
    border-width: 1px;
    border-color: #adadad;
    padding: 8px;
    border-radius: 5px;
  }

  .group {
    display: flex;
    justify-content: space-between;
    margin: 36px 0px;
  }
}

.foto-bike-xs {
  width: 104px;
  position: relative;
}

.foto-bike-xs > div {
  cursor: pointer;
  color: white;
  top: -1px;
  right: -2px;
  position: absolute;
  border: solid 1px white;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 5px;
}

.foto-bike-xs>img {
  width: 100px;
  height: 90px;
  border-radius: 5px;
  margin-left: 5px;
}

.foto-bike-xs {
  width: 104px;
  position: relative;
}

.else-foto {
  display: flex;
  margin-top: 6px;
  cursor: pointer;

  .remove {
    transition: all 150ms ease;
    opacity: 0;
  }

  :hover + .remove {
    opacity: 1;
  }
}

.plus>img {
  width: 20px;
}

.plus {
  text-align: center;
  width: 55px;
  margin-top: 38px;
}

.gray {
  color: #adadad;
  text-decoration: underline;
  border: none;
}

.slkt {
  border: none;
  color: rgb(66, 187, 247);
}

.sort-activ {
  display: flex;
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
  margin-top: 5px;
}

@media (min-width: $desktop) {
  .mobile {
    display: none !important;
  }

  .logo>img {
    width: 110px;
    box-shadow: 2px 2px 8px -4px #000;
    cursor: pointer;
  }

  .round-foto>img {
    width: 45px;
    height: 45px;
    border-radius: 50px;
    padding: 4px;
  }

  .edit-left-top {
    height: 135px;
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
    text-decoration: underline;
    color: #adadad;
    margin-bottom: 9px;
  }

  .foto-bike>img {
    border-radius: 8px;
    height: 300px;
    width: 370px;
  }

  .all-edit {
    margin-top: 5px;
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

  .container-great {
    margin-top: 15px;
    display: flex;
    margin-left: 5px;
  }

  .comment {
    width: 550px;
    font-size: 13px;
    border-style: solid;
    border-width: 1px;
    border-color: #adadad;
    padding: 8px;
    border-radius: 5px;
  }

  .group {
    display: flex;
    justify-content: space-between;
  }

  .choosen_photo {
    border: solid $yellow;
  }

  .remove_price {
    padding: 3px 9px;
    font-weight: bold;
    color: #1c00ff82;
    float: right;
    cursor: pointer;
  }
}
</style>
