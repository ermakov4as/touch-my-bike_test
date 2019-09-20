<template>
  <div v-if="display.licenseAgreement" style="background-color: orange;">
    <h3>
      Лицензионное соглашение
      <button @click="display.licenseAgreement = false">X</button>
    </h3>
    <h6>Которое конечно же все прочитали</h6>
  </div>
</template>