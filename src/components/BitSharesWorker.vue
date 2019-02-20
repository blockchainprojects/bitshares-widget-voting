<template>
  <div v-if="!loading" class="worker">
    <h3>Worker: {{votingObject.id}} - {{votingObject.title}}</h3>
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
      <div v-if="current_in_USD">
          Funds: <a :href="'https://workers.bitshares.foundation/' + votingObject.name" target="_blank">{{ Math.round(current_in_USD.float).toLocaleString() }} / {{ Math.round(asked_in_USD.float).toLocaleString() }} (USD)</a>
      </div>
      <div v-else>
          Funds: <a :href="'http://bitshares-explorer.io/#/accounts/' + votingObject.object.worker_account" target="_blank">{{ votingObject.object.worker_account }}</a>
      </div>
    </div>
    <div class="votes">
      Votes: {{ Math.round(votingObject.object.total_votes_for / 100000).toLocaleString() }} BTS
    </div>
    <div class="voting" v-if="votingObject != null">
      <div v-if="!!votingObject.failed" class="done">Voting failed</div>
      <div v-if="votingObject.voted" class="done">Voted &#10004;</div>
      <template v-else>
          <button v-if="beetFound" class="button" v-on:click="vote">Vote now</button>
          <template v-else>
              <div class="label">Beet was not found</div>
              <button @click="goToBeet()" class="button">Install now</button>
          </template>
      </template>
    </div>
  </div>
</template>

<script>
import {FetchChain} from 'bitsharesjs/es'
import AbstractWidgetResolvingVoting from './AbstractWidgetResolvingVoting'

export default {
    name: 'BitSharesWorker',
    extends: AbstractWidgetResolvingVoting,
    data () {
        return {
            starts_in: null,
            ends_in: null,
            current_in_USD: null,
            asked_in_USD: null,
            receives: null,

            loading: true,

            votingObject: null,

            FetchChain: FetchChain
    }
    },
    methods: {
        onVotingObjectsUpdate() {
            this.votingObject = Object.assign({}, this.objectIds[Object.keys(this.objectIds)[0]]);
        },
        onResolvedIdFromChain() {
            this.onVotingObjectsUpdate();
            this._loadDetails();
        },
        _loadDetails: function () {
            // enhance to allow committee and witness
            let worker = this.votingObject.object;

            let one_day = 1000 * 60 * 60 * 24;
            this.starts_in = Math.round((new Date(worker.work_begin_date + "Z") - new Date()) / one_day);

            this.ends_in = Math.round((new Date(worker.work_end_date + "Z") - new Date()) / one_day);

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
                        thiz.current_in_USD = json.amounts.currency.total_max;
                        thiz.asked_in_USD = json.amounts.currency.asked;
                        thiz.receives = json.worker.receives;
                        loadingDone();
                    }).catch((err) => {
                        // could not load escrow details
                        console.error(err);
                        loadingDone();
                    })
                }).catch((err) => {
                    // could not load escrow details
                    console.error(err);
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
<style>
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

  .worker .voting
  {
      font-size:0.7em;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      float: right;
  }

  .worker .voting .done
  {
      padding-top: 0.7em;
  }

  .worker .voting .button
  {
    border-radius: 15px;
    box-shadow: 0px 2px 5px rgba(25, 25, 25, 0.27);
    margin-top: 0em;
  }

  .worker .voting .label {
      font-size: 0.7em;
      color: gray;
      vertical-align: middle;
  }

</style>
