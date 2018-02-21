<template>
  <div class="container">
    Si haces click se mostrará el mensaje
    <button type="button" name="button" @click="showme">Show message</button>
    <div v-show="show">
      Este es el div v-show
    </div>
    <div v-if="show">
      Este es el div v-if
    </div>
    <div>
      La diferencia entre v-show y v-if principalmente es que con v-show no eliminamos el elemento del DOM, simplemente lo ocultamos con CSS "display: none".
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  methods: {
    showme: function () {
      if (!this.show) {
        this.show = true
      }else{
        this.show = false
      }
    }
  }
}
</script>

<style lang="css">
</style>
