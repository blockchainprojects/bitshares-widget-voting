<template>
    <div class="widget-voting">
    </div>
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
                holder: holder,
                chain: chain,
            }
        },
        created: function () {
            this.connectToChainAndStart()
        },
        methods: {
            /**
             * connection to bitshares via bitsharesjs
             */
            connectToChainAndStart: function () {
                // connection and then the ChainStore is initialized
                this.chain.connect().then(() => {
                    console.log("Connected and synced");
                    // resolve the markets props (call will start fetching, unsure how the fetching can be resolved exactly)
                    this.connected();
                }).catch((err) => {
                    console.log("Connection attempt failed", err);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
