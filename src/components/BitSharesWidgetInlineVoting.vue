<template>
    <span class="widget-inline-voting">
        <div class="voting-text" v-on:click="show">{{ text }}</div>
        <div class="voting-popup" v-show="showPopup">
            <div class="voting-popup-content">
                <div>{{ popUpText }}</div><br />
                <div class="voting" v-if="votingObject != null">
                    <div v-if="votingObject.voted" class="done">Voted &#10004;</div>
                    <template v-else>
                        <button v-if="beetFound" class="button" v-on:click="vote">Vote now</button>
                        <template v-else>
                            <div class="label">Beet was not found</div>
                            <button @click="goToBeet()" class="button">Install now</button>
                        </template>
                    </template>
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
    import AbstractBitSharesWidgetVoting from './AbstractBitSharesWidgetVoting'

    export default {
        name: 'BitSharesWidgetInlineVoting',
        extends: AbstractBitSharesWidgetVoting,
        data() {
            return {
                showPopup: false,

                text: this.innerHTML, // initialize with given text
                popUpText: "Loading ...",

                votingObject: null,

                store: ChainStore,
                FetchChainObjects: FetchChainObjects,
            }
        },
        methods: {
            goToBeet() {
                window.open('https://github.com/bitshares/beet','_blank');
            },
            showVotingObject() {
                this.text = this.votingObject.text;
                this.popUpText = this.votingObject.type + " " + this.votingObject.text;
            },
            onResolvedVotingInput: function() {
                let uniqueIdList = null;
                if (!!this.witnessIds && Object.keys(this.witnessIds).length == 1) {
                    uniqueIdList = this.witnessIds;
                }
                if (!!this.workerIds && Object.keys(this.workerIds).length == 1) {
                    if (uniqueIdList != null) {
                        this.text = "Please do only provide one object type for voting"
                    } else {
                        uniqueIdList = this.workerIds;
                    }
                }
                if (!!this.committeeIds && Object.keys(this.committeeIds).length == 1) {
                    if (uniqueIdList != null) {
                        this.text = "Please do only provide one object type for voting"
                    } else {
                        uniqueIdList = this.committeeIds;
                    }
                }
                if (uniqueIdList == null) {
                    this.text = "Please provide exactly one object type for voting";
                    this.errored("Initializing failed");
                }
                this.votingObject = uniqueIdList[Object.keys(uniqueIdList)[0]];
            },
            onResolvedVotingId: function() {
                this.showVotingObject();
            },
            show: function() {
                this.showPopup = !this.showPopup;
            }
        }
    }
</script>

<style>
    .widget-inline-voting
    {
        color: #2c3e50;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

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

    .widget-inline-voting .voting-popup-content .voting {
        float: right;
    }

    .widget-inline-voting .voting-popup-content .voting .label {
        font-size: 0.7em;
        color: gray;
        vertical-align: middle;
    }


    .widget-inline-voting .voting-popup-content .button
    {
        border-radius: 15px;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
    }


</style>
