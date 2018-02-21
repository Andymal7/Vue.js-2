<template>
  <div id="app">
    <div class="container">
      <h1>{{ msg }}</h1>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Directives
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li class="dropdown-item"><router-link to='/bind'>v-bind</router-link></li>
          <li class="dropdown-item"><router-link to='/on'>v-on</router-link></li>
          <li class="dropdown-item"><router-link to='/for'>v-for</router-link></li>
          <li class="dropdown-item"><router-link to='/html'>v-html</router-link></li>
          <li class="dropdown-item"><router-link to='/show'>v-show</router-link></li>
          <li class="dropdown-item"><router-link to='/ifelse'>v-ifelse</router-link></li>
          <li class="dropdown-item"><router-link to='/text'>v-text</router-link></li>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue 2'
    }
  }
}
</script>
