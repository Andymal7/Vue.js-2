<template>
  <div class="container">
    La directiva v-on escucha un evento de un elemento
    <div>
      {{ counter }}
    </div>
    <button type="button" class="btn btn-default" v-on:click="increase">
      Increase
    </button>
    <button type="button" class="btn btn-default" v-on:click="decrease">
      Decrease
    </button>
    <p>En este caso utilizamos v-on:click, al clicar sobre cualquiera de los botones estos llaman a una función</p>

    <p>Al pasar el ratón por <span v-on:mouseover="showMessage">AQUÍ</span> encima nos saldrá un mensaje en pantalla gracias a v-on:mouseover</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
      message: ''
    }
  },
  methods: {
    increase () {
      this.counter ++
    },
    decrease () {
      this.counter --
    },
    showMessage () {
      this.message = "Este es el mensaje mostrado gracias a v-on"
      alert(this.message)
    }
  }
}
</script>

<style>
span {
  font-weight: bold;
}
</style>
