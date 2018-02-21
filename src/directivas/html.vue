<template>
  <div class="container">
    Cargamos el html desde el javascript con la directiva v-html
    <div v-html="texto">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      texto: "<strong>Bienvenido a Vue.js 2</strong>"
    }
  }
}
</script>

<style lang="css">
</style>
