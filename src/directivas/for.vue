<template>
  <div class="container">
    Listando el array de coches marca por marca utilizando la directiva v-for
    <ul>
      <li v-for="brand in cars">
        {{ brand }}
      </li>
    </ul>
    Con v-for también podemos listar objetos
    <ul>
      <li v-for="(value, key) in company">
        {{ key }} => {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //Array de coches que listaremos con el v-for
      cars: ['Mercedes', 'Audi', 'BMW', 'Volvo', 'Volksagen', 'Toyota', 'Honda'],
      company: {
        companyName: 'Daimler AG',
        ubication: 'Stuttgart, Alemania',
        employers: '271.370'
      }
    }
  }
}
</script>
