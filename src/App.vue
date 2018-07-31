<template>
  <div id="app">
    <BitSharesWidgetVoting :workerid=workeridfromdiv />
  </div>
</template>

<script>
import BitSharesWidgetVoting from './components/BitSharesWidgetVoting'

export default {
  name: 'bitshares-widget-voting',
  props: ['workeridfromdiv'],
  components: {
    BitSharesWidgetVoting
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
