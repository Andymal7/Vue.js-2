<template>
  <div class="container">
    <h4>Podemos utilizar la directiva v-text o la interpolación</h4>
    Con v-text
    <div v-text="texto">
    </div>
    Con interpolación
    <div>
      {{ texto }}
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      texto: "Bienvenido a Vuejs 2"
    }
  }
}
</script>

<style lang="css">
</style>
