// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;

/**
 * This renders the Vue app in the HTML element bitshares-widget-voting.
 *
 * The App.vue serves as middleware that can enable routing if required.
 * The pricesfromdiv property is filled with the markets property from
 * the div tag in index.html and passed forward, see App.vue
 *
 */
/* eslint-disable no-new */
let i = 0;
for (i = 0; i < 11; i++) {
    let idName = null;
    if (i == 10) {
        idName = "bitshares-widget-voting"
    } else {
        idName = "bitshares-widget-voting-" + i;
    }
    let element = document.getElementById(idName);
    if (!!element) {
        new Vue({
            el: element,
            template: '<App :workeridfromdiv="workeridfromdiv" :witnessidfromdiv="witnessidfromdiv" :committeefromdiv="committeefromdiv" :layoutfromdiv="layoutfromdiv" :innerHTML="innerHTML" />',
            components: {App},
            beforeMount: function () {
                try {
                    this.workeridfromdiv = this.$el.attributes["workerid"].value;
                } catch (err) {
                    this.workeridfromdiv = ""
                }
                try {
                    this.witnessidfromdiv = this.$el.attributes["witnessid"].value;
                } catch (err) {
                    this.witnessidfromdiv = ""
                }
                try {
                    this.committeefromdiv = this.$el.attributes["committeeid"].value;
                } catch (err) {
                    this.committeefromdiv = ""
                }
                try {
                    this.layoutfromdiv = this.$el.attributes["layout"].value;
                } catch (err) {
                    this.layoutfromdiv = "tiles";
                }
                this.idName = idName;
                this.innerHTML = this.$el.innerHTML;
            },

        });
    }
}
