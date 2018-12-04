<template>
</template>

<script>
    import chain from '../chain'
    import beeet from '../beet'
    import {ChainStore, FetchChainObjects, FetchChain} from 'bitsharesjs/es'
    import BitSharesWorker from './BitSharesWorker'


    export default {
        name: 'AbstractWidget',
        props: [],
        data() {
            return {
                // state of this widget (connecting etc.)
                stateName: "Initializing",

                // if any error occured
                error: null,

                // installation status
                beetFound: null,
                chainConnected: null,

                // access to beet
                beet: beeet,

                // access to blockchain
                chain: chain,

                ChainStore: ChainStore,
                FetchChainObjects: FetchChainObjects,

                connectOnCreate: true,
                checkBeetOnCreate: true
            }
        },
        created: function () {
            setTimeout(()=>{
                if (this.connectOnCreate) {
                    this._connectToChainAndStart();
                }
                if (this.checkBeetOnCreate) {
                    this._checkBeetInstallation();
                }
            }, 1);
        },
        methods: {
            goToBeet() {
                window.open('https://github.com/bitshares/beet','_blank');
                this.beetFound = true;
            },
            errored: function(error, message = "") {
                console.log(error);
                this.stateName = "Errored";
                this.error = error;
            },
            _checkBeetInstallation: function() {
                this.beetFound = false;

                this.beet.isInstalled().then(status => {
                    this.beetFound = status;
                    this.onBeetFound(status);
                    this.stateName = "Done";
                }).catch((err) => {
                    this.errored(err);
                    this.beetFound = false;
                    this.onBeetFound(false);
                    setTimeout(()=>{
                        console.log("retrying to find beet")
                        this._checkBeetInstallation();
                    }, 5000);
                });
            },
            setBeetInstallationStatus: function(status) {
                this.beetFound = status;
                this.onBeetFound(status);
                this.stateName = "WaitingForBeet";
            },
            _fetch(args) {
                FetchChain: FetchChain
            },
            /**
             * connection to bitshares via bitsharesjs
             */
            _connectToChainAndStart: function () {
                this.stateName = "ConnectingToChain";
                // connection and then the ChainStore is initialized
                this.chain.connect().then(() => {
                    this.chainConnected = true;
                    this.onConnected();

                    this.stateName = "CheckingBeetInstallation";
                }).catch((err) => {
                    this.errored(err);
                    console.log("Connection attempt failed", err);
                    this.chainConnected = false;
                });
            },
            onBeetFound: function(status) {
                // may be overwritten
            },
            onConnected: function(status) {
                // may be overwritten
            }

        }
    }
</script>

<style>
    a {
        color: #1E7EC8;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
