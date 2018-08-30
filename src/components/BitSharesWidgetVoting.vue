<template>
    <div class="widget-voting">
        <div v-if="workerIdList">
            <div class="tooltip"><h2>BitShares Widget for Voting</h2><span class="tooltip-content"><!-- there can be no line break for this span !-->
          <table><tbody><tr><td colspan="2">{{ tooltipMessage }}</td></tr><tr><td align="right">
            <a href="https://github.com/blockchainprojects/bitshares-widget-voting">GPL-3.0</a> &copy; <a
              href="http://www.blockchainprojectsbv.com/" target="_blank">Blockchain BV</a>
          </td><td align="left"><a href="http://www.blockchainprojectsbv.com/" target="_blank"><img
              src="../assets/logo.png"></a></td></tr></tbody></table>
        </span></div>
            <br/>
            <div v-if="loadingMessage" class="loading-message">{{ loadingMessage }}</div>
            <div v-else class="content">
                <div class="content" v-for="(worker, index) in workerList">
                    <BitSharesWorker :worker="worker"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import chain from '../chain'
    import {ChainStore, FetchChainObjects} from 'bitsharesjs/es'
    import BitSharesWorker from './BitSharesWorker'
    import AbstractBitSharesWidget from './AbstractBitSharesWidget'

    export default {
        name: 'BitSharesWidgetVoting',
        props: ['workerid', 'witnessid', 'layout'],
        extends: AbstractBitSharesWidget,
        components: {
            BitSharesWorker
        },
        data() {
            return {
                loadingMessage: "Loading ...",

                errorMessage: null,

                // the time that will be displayed
                currentTime: this.getFormattedTime(),

                workerIdList: [],
                workerList: [],

                witnessIdList: [],

                // tooltip that is displayed on hover
                tooltipMessage: "",

                // BitShares specific connection
                chain: chain,

                store: ChainStore,
                FetchChainObjects: FetchChainObjects,
            }
        },
        methods: {
            connected: function() {
                console.log(this.layout);
                this.resolveWorker();

                // start continous updates
                setTimeout(this.update, 500);
                setInterval(this.update, 5000);
            },
            /**
             * Resolve all configured voters
             */
            resolveWitness: function () {
                if (typeof this.witnessid === 'string') {
                    this.witnessIdList = this.witnessid.split(";")
                }
                if (this.witnessIdList.length == 0) {
                    this.witnessIdList = ['1.2.711128']
                }
            },
            /**
             * expected syntax in markets props:
             *    asset1/asset2;asset3/asset4;....
             *
             * should only be called once
             */
            resolveWorker: function () {
                if (typeof this.workerid === 'string') {
                    this.workerIdList = this.workerid.split(";")
                }
                if (this.workerIdList.length == 0) {
                    this.workerIdList = ['1.14.103']
                }
            },
            /**
             * general information about the blockchain
             * @returns {*}
             */
            getHeadMessage: function () {
                try {
                    return 'Head/Timestamp=' +
                        this.store.getObject('2.1.0').get('head_block_number') + '/' +
                        this.store.getObject('2.1.0').get('time')
                } catch (err) {
                    return 'Initializing ...'
                }
            },
            /**
             * formats current time human readable
             */
            getFormattedTime: function () {
                let currentDate = new Date();
                return currentDate.getHours() + ':' + ('0' + currentDate.getMinutes()).slice(-2)
            },
            /**
             * Loads the next message and displays it, also updates the tooltip
             */
            update: function () {
                this.tooltipMessage = this.getHeadMessage();

                let workerList = [];

                this.chain.db_exec('get_objects', [this.workerIdList]).then((workers, index) => {
                    workers.forEach((worker) => {
                        workerList.push(worker);
                    });
                    this.loadingMessage = null;
                    this.workerList = workerList;
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .widget-voting {
    }

    .widget-voting h2 {
        display: inline-block;
        width: 250px;
        background-color: #33A3F1;
        font-size: 10px;
        font-color: #ffffff;
        border-radius: 50px 50px 50px 50px;
        margin-bottom: 0px;
        padding: 1px;
        color: #ffffff;
        border-bottom: 1px solid #323d54;
    }

    .widget-voting .time {
        color: #33A3F1;
        display: inline-block;
    }

    .widget-voting .content {
        display: inline-block;
    }

    .widget-voting .tooltip:hover {
        text-decoration: none;
    }

    .widget-voting .tooltip span {
        z-index: 5;
        display: none;
        padding: 3px 10px 0px 10px;
        margin-top: -15px;
        margin-left: -5px;
        width: auto;
        line-height: 0.6em;
    }

    .widget-voting .tooltip:hover span {
        display: inline;
        position: absolute;
        border: 1px solid #000;
        color: #000;
    }

    /*CSS3 extras*/
    .widget-voting .tooltip span {
        border-radius: 15px;
        opacity: 0.8;
    }

    .widget-voting .tooltip-content {
        font-size: 0.6em;
    }

    .widget-voting .tooltip-content img {
        height: 1.6em;
        width: 1.6em;
    }

    .widget-voting .tooltip-content a {
        color: #1E7EC8;
        text-decoration: none;
    }

    .widget-voting .tooltip-content a:hover {
        text-decoration: underline;
    }

</style>
