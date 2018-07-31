<template>
  <div v-if="!loading" class="worker">
    <h3>Worker: {{ worker.id }} - {{worker.name}}</h3>
    <div v-if="receives" class="status">
      <div v-if="receives.daily.float > 0">Status: Active</div>
      <div v-else>Status: Inactive</div>
    </div>
    <div v-else class="status">
      <div>Status: Unknown</div>
    </div>
    <div class="time">
      <div v-if="starts_in >= 0">Starts in: {{starts_in}} days</div>
      <div v-if="starts_in < 0">Ends in: {{ends_in}} days</div>
    </div>
    <div class="funding">
      <div v-if="current_in_USD">Funds: {{ Math.round(current_in_USD.float).toLocaleString() }} / {{ Math.round(asked_in_USD.float).toLocaleString() }} (USD)</div>
      <div v-else>Funds: Worker account <a :href="'http://bitshares-explorer.io/#/accounts/' + worker.worker_account">{{ worker.worker_account }}</a></div>
    </div>
    <div class="votes">
      Votes: {{ Math.round(worker.total_votes_for / 100000).toLocaleString() }} BTS
    </div>
    <div class="vote-button">
      <button>Vote now</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BitSharesWorker',
    props: ['worker'],
    data () {
      return {
        starts_in: null,
        ends_in: null,
        current_in_USD: null,
        asked_in_USD: null,
        receives: null,
        loading: true
    }
    },
    created: function () {
      this.initialize()
    },
    methods: {
      /**
       * connection to bitshares via bitsharesjs
       */
      initialize: function () {
        let worker = this.worker;

        let one_day = 1000*60*60*24;
        this.starts_in = Math.round((new Date(this.worker.work_begin_date + "Z") - new Date()) / one_day);

        this.ends_in = Math.round((new Date(this.worker.work_end_date + "Z") - new Date()) / one_day);

        let loadingDone = this.loadingDone.bind(this);

        let thiz = this;
        if (worker.worker_account == "1.2.364315") {
          fetch("https://api.workers.bitshares.foundation/v1/escrow/" + worker.id, {
            method: "GET",
            headers: new Headers({
              Accept: "application/json",
              "content-type": "application/x-www-form-urlencoded"
            })
          }).then(response => {
            response.json().then((json) => {
              thiz.current_in_USD = json[0].amounts.currency.total_max;
              thiz.asked_in_USD = json[0].amounts.currency.asked;
              thiz.receives = json[0].worker.receives;
              loadingDone();
            }).catch((err) => {
              // could not load escrow details
              console.log(err);
              loadingDone();
            })
          }).catch((err) => {
            // could not load escrow details
            console.log(err);
            loadingDone();
          })
        } else {
          loadingDone();
        }

      },
      loadingDone: function() {
        this.loading = false;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .worker
  {
    display:inline-block;
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    padding: 7px 5px 2px 0px;
    margin-right: 5px;
    margin-left: 5px;
  }

  .worker h3
  {
    font-size:0.7em;
    padding-left: 0.5em;
    padding-right: 0.5em;
  }

  .worker .time
  {
    font-size:0.7em;
  }

  .worker .funding
  {
    font-size:0.7em;
  }

  .worker .votes
  {
    font-size:0.7em;
  }

  .worker .status
  {
    font-size:0.7em;
  }

  .worker .vote-button
  {
    float: right;
  }

  .worker .vote-button button
  {
    border-radius: 15px;
    font-size:0.7em;
    box-shadow: 0px 2px 5px rgba(25, 25, 25, 0.27);
    margin-bottom: 0.5em;
  }
</style>
