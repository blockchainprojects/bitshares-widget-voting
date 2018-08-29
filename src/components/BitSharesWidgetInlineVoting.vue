<template>
    <span class="widget-voting" v-on:click="vote">
        <v-popover>
            <span class="tooltip-target b3">{{ text }}</span>
            <template slot="popover">
                <table>
                    <tbody>
                        <tr>
                            <td colspan="2">{{ tooltipText }}</td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <div class="voting">
                                    <div v-if="voted">
                                    <div class="done">{{votingMessage}} &#10004;</div>
                                </div>
                                <div v-else>
                                    <button class="button" v-on:click="vote">Vote now</button>
                                </div>
                            </div>
                        </td>
                        </tr>
                        <tr class="copyright">
                            <td align="right">
                                <a href="https://github.com/blockchainprojects/bitshares-widget-voting">GitHub</a> &copy;
                                <a href="http://www.blockchainprojectsbv.com/" target="_blank">Blockchain Projects BV</a>
                            </td>
                            <td align="left">
                                <a href="http://www.blockchainprojectsbv.com/" target="_blank">
                                    <img src="../assets/logo.png">
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </v-popover>
    </span>
</template>

<script>
    import {Blockchain} from '../chain'
    import {ChainStore, FetchChainObjects, FetchChain} from 'bitsharesjs/es'
    import AbstractBitSharesWidget from './AbstractBitSharesWidget'

    export default {
        name: 'BitSharesWidgetInlineVoting',
        props: ['workerid', 'witnessid'],
        extends: AbstractBitSharesWidget,
        components: {
        },
        data() {
            return {
                workerIdList: [],
                witnessIdList: [],

                text: "Loading ...",

                tooltipText: "Loading ...",

                votingMessage: null,
                voted: false,

                store: ChainStore,
                FetchChainObjects: FetchChainObjects,
            }
        },
        methods: {
            connected: function() {
                this.resolveIds();
                // initialize
                setTimeout(this.initialize, 500);
            },
            /**
             * Resolve all configured voters
             */
            resolveIds: function () {
                if (typeof this.witnessid === 'string' && this.witnessid !== "" ) {
                    this.witnessIdList = this.witnessid.split(";")
                }
                if (typeof this.workerid === 'string' && this.workerid !== "") {
                    this.workerIdList = this.workerid.split(";")
                }
                console.log("witness", this.witnessIdList, this.witnessid, "worker", this.workerIdList, this.workerid)
                if (this.witnessIdList.length > 0 && this.workerIdList.length > 0) {
                    this.text = "Please do only provide either one witness or worker"
                }
                if (this.witnessIdList.length > 1) {
                    this.text = "Please do only provide one witness"
                }
                if (this.workerIdList.length > 1) {
                    this.text = "Please do only provide one worker"
                }
            },
            /**
             * Loads the next message and displays it, also updates the tooltip
             */
            initialize: function () {
                if (this.witnessIdList.length) {
                    this.chain.db_exec('get_objects', [this.witnessIdList]).then((witness) => {
                        this.chain.db_exec('get_objects', [[witness[0].witness_account]]).then((accounts) => {
                            this.text = accounts[0].name;
                            this.voteId = witness[0].vote_id;
                            this.tooltipText = "BitShares Witness: " + accounts[0].name;
                        });
                    });
                }
                if (this.workerIdList.length == 1) {
                    this.chain.db_exec('get_objects', [this.workerIdList]).then((workers, index) => {
                        this.text = workers[0];
                    });
                }
            },
            vote: function (event) {
                let thiz = this;
                this.holder.btscompanion.connect('BitShares Voting Widget').then(connected => {
                    if (connected) {
                        FetchChain("getAccount", window.btscompanion.identity.id, undefined, {
                            [window.btscompanion.identity.id]: true
                        }).then((account) => {
                            account = account.toJS();

                            if (account.options.votes.indexOf(thiz.voteId) == -1) {
                                window.btscompanion.voteFor(
                                    {
                                        id: thiz.voteId
                                    }
                                ).then((result) => {
                                    thiz.votingMessage = "Voted";
                                    thiz.voted = true;
                                    console.log(result);
                                }).catch((err) => {
                                    thiz.votingMessage = "Voting failed";
                                    thiz.voted = false;
                                    console.log(err);
                                });
                            } else {
                                // already voted on
                                thiz.votingMessage = "Already voted";
                                thiz.voted = true;
                            }
                        }).catch((err) => {
                            console.log(err);
                        })
                    }
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .widget-voting {
    }

    .widget-voting .voting
    {
        font-size:0.7em;
        margin-bottom: 0.5em;
        float: right;
    }

    .widget-voting .voting .done
    {
        padding-top: 0.7em;
    }

    .copyright
    {
        font-size:0.8em;
    }

    .copyright a {
        color: #1E7EC8;
        text-decoration: none;
    }

    .copyright a:hover {
        text-decoration: underline;
    }

    .copyright img {
        height: 1.6em;
        width: 1.6em;
    }

    .button
    {
        border-radius: 15px;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        float: right;
    }


</style>
