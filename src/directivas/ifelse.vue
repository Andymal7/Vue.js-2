<template>
  <div class="container">
    <h4>Directiva v-if y v-else</h4>
    <p>Escoge un número entre 0 y 3, si aciertas se mostrará un mensaje sino se mostrará otro.</p>
    <input type="text" name="" v-model="answer">
    Según la respuesta obtenida aparecerá un mensaje u otro en pantalla gracias a la directiva v-if
    <div v-if="correct">
      Correct Number!
    </div>
    <div v-else>
      Try again
    </div>
    Otro ejemplo, si haces click se mostrará el mensaje
    <button type="button" name="button" @click="showme">Show message</button>
    <div v-if="show">
      Has hecho click en mostrar mensaje
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: null,
      show: false
    }
  },
  computed: {
    correct: function () {
      if (this.answer === '3') {
        return true
      }else{
        return false
      }
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
