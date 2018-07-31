// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 * This renders the Vue app in the HTML element bitshares-widget-voting.
 *
 * The App.vue serves as middleware that can enable routing if required.
 * The pricesfromdiv property is filled with the markets property from
 * the div tag in index.html and passed forward, see App.vue
 *
 */
/* eslint-disable no-new */
new Vue({
  el: '#bitshares-widget-voting',
  template: '<App :workeridfromdiv="workeridfromdiv" />',
  components: { App },
  beforeMount: function () {
    this.workeridfromdiv = this.$el.attributes['workerid'].value;
  },

})
