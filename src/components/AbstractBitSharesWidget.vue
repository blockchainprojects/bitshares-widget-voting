<template>
</template>

<script>
    import chain from '../chain'
    import {ChainStore, FetchChainObjects} from 'bitsharesjs/es'
    import BitSharesWorker from './BitSharesWorker'
    import holder from '../lib/beet-js/main'

    export default {
        name: 'AbstractBitSharesWidget',
        props: [],
        data() {
            return {
                // state of this widget (connecting etc.)
                stateName: "Initializing",

                // if any error occured
                errorName: null,

                // installation status
                beetFound: null,
                chainConnected: null,

                // chain connectivity

                // access to beet
                holder: holder,

                // access to blockchain
                chain: chain,
            }
        },
        created: function () {
            console.log("creatd")
            setTimeout(()=>{
                console.log("timed")
                this.stateName = "ConnectingToChain";
                this._connectToChainAndStart();
            }, 1);
        },
        methods: {
            errored: function(error, message = "") {
                this.stateName = "Errored";
                this.errorName = error;
            },
            _checkBeetInstallation: function() {
                this.holder.btscompanion.isInstalled().then(status => {
                    console.log(status);
                    this.beetFound = status;
                    this.onBeetFound(status);
                    this.stateName = "Done";
                }).catch((err) => {
                    this.errored(err);
                    this.beetFound = false;
                    this.onBeetFound(false);
                });
            },
            /**
             * connection to bitshares via bitsharesjs
             */
            _connectToChainAndStart: function () {
                // connection and then the ChainStore is initialized
                this.chain.connect().then(() => {
                    this.chainConnected = true;
                    this.onConnected();

                    this.stateName = "CheckingBeetInstallation";
                    this._checkBeetInstallation();
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
