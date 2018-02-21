<template>
  <div class="container">
    <h3>Enlace de datos con v-bind</h3>
    <div>
      v-bind:src="imagen"
      <img v-bind:src="imagen" alt="">
      <!-- La forma corta es con dos puntos únicamente -->
      Short mode
      :src="imagen"
      <img :src="imagen" alt="">

    </div>
  </div>
</template>

<script>
export default {
  name: 'bind',
  data() {
    return {
        imagen: '../src/assets/logo.png'
    }
  }
}
</script>

<style lang="css">
</style>
