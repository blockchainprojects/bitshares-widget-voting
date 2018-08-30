<template>
    <span class="widget-inline-voting">
        <!--<span class="voting-text" v-popover="{ name: 'voting-popup-' + this.popoverIdentifier }">{{ text }}</span>
        <popover :name="'voting-popup-' + this.popoverIdentifier">
            <table class="voting-popup-content">
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
        </popover>-->
        <div class="voting-text" v-on:click="show">{{ text }}</div>
        <div class="voting-popup" v-show="showPopup">
            <div class="voting-popup-content">
                <div>{{ tooltipText }}</div><br />
                <div class="voting">
                    <div v-if="voted">
                        <div class="done">{{votingMessage}} &#10004;</div>
                    </div>
                    <div v-else>
                        <button class="button" v-on:click="vote">Vote now</button>
                    </div>
                </div><br /><br /><br />
                <div class="copyright">
                    <a href="https://github.com/blockchainprojects/bitshares-widget-voting">GitHub</a> &copy;
                    <a href="http://www.blockchainprojectsbv.com/" target="_blank">Blockchain Projects BV</a>
                    <a href="http://www.blockchainprojectsbv.com/" target="_blank">
                        <img src="../assets/logo.png">
                    </a>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
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
                showPopup: false,

                workerIdList: [],
                witnessIdList: [],

                text: "Loading ...",

                tooltipText: "Loading ...",

                voteId: null,
                beetVoteId: null,

                votingMessage: null,
                voted: false,

                popoverIdentifier: null,

                store: ChainStore,
                FetchChainObjects: FetchChainObjects,
            }
        },
        beforeMount: function() {
            this.popoverIdentifier = this.resolveIds();
        },
        methods: {
            connected: function() {
                // initialize
                setTimeout(this.initialize, 100);
            },
            show: function() {
                console.log("show", this.showPopup);
                this.showPopup = !this.showPopup;
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
                if (this.witnessIdList.length > 0 && this.workerIdList.length > 0) {
                    this.text = "Please do only provide either one witness or worker"
                }
                if (this.witnessIdList.length > 1) {
                    this.text = "Please do only provide one witness"
                }
                if (this.workerIdList.length > 1) {
                    this.text = "Please do only provide one worker"
                }
                if (this.witnessIdList.length == 1) {
                    return this.witnessIdList[0];
                }
                if (this.workerIdList.length == 1) {
                    return this.workerIdList[0];
                }
            },
            /**
             * Loads the next message and displays it, also updates the tooltip
             */
            initialize: function () {
                if (this.witnessIdList.length == 1) {
                    this.chain.db_exec('get_objects', [this.witnessIdList]).then((witness) => {
                        this.chain.db_exec('get_objects', [[witness[0].witness_account]]).then((accounts) => {
                            this.text = accounts[0].name;
                            this.voteId = witness[0].vote_id;
                            this.beetVoteId = witness[0].id;
                            this.tooltipText = "BitShares Witness: " + accounts[0].name;
                            console.log("witness found, vote id is ", this.voteId);
                        });
                    });
                }
                if (this.workerIdList.length == 1) {
                    this.chain.db_exec('get_objects', [this.workerIdList]).then((workers, index) => {
                        this.text = workers[0].name;
                        this.voteId = workers[0].vote_for;
                        this.beetVoteId = workers[0].id;
                        this.tooltipText = "BitShares Worker: " + workers[0].name;
                        console.log("worker found, vote id is ", this.voteId);
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
                            console.log("Ensuring vote for ", thiz.voteId);
                            if (account.options.votes.indexOf(thiz.voteId) == -1) {
                                window.btscompanion.voteFor(
                                    {
                                        id: thiz.beetVoteId
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

<style>
    .widget-inline-voting .voting-popup-content
    {
        font-size:0.9em;
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

    .widget-inline-voting .voting-text {
        display: inline;
        position: relative;
    }

    .widget-inline-voting .voting-text:hover {
        cursor: pointer;
    }

    .widget-inline-voting .voting-popup {
        display: inline;
        position: absolute;
        min-width: 13em;
        border-bottom: 6px solid #000;
        border-width: thin;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.23);
        background: white;
        color: black;
        border-radius: 16px;
        padding: 5px 10px 4px;
        box-shadow: 5px 10px 18px rgba(25, 25, 25, 0.27);
        font-size:0.9em;
    }

    .widget-inline-voting .voting-popup-content .button
    {
        border-radius: 15px;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        float: right;
    }


</style>
