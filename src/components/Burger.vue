<template>
  <div v-if="display.burger" style="background-color: lightcoral;">
    <h3>
      Menu
      <button @click="display.burger = false">X</button>
    </h3>
    <div v-if="user.role === 'unreg'">
      <button @click="display.login = true">Вход</button>
    </div>
    <div v-else>
      <div v-if="user.role === 'owner'">
        <div v-for="(page, index) of ownerPages" :key="index">
          <router-link :to="{name: page}">{{ page }}</router-link>
        </div>
      </div>
      <div v-else-if="user.role === 'tourist'">
        <div v-for="(page, index) of touristPages" :key="index">
          <router-link :to="{name: page}">{{ page }}</router-link>
        </div>
      </div>
      <button @click="user.logout">Выход</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ownerPages: [
        'Offers',
        'Orders',
        'Profile'
      ],
      touristPages: [
        'Orders',
        'Favorites',
        'Profile'
      ]
    }
  }
}
</script>