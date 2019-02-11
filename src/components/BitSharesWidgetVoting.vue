<template>
    <div class="widget-voting--tiles">
        <div v-if="workerIds">
            <div v-if="layout == 'tiles'" class="widget-voting--tiles--title" v-on:click="showPopup"><h2>BitShares Widget for Voting</h2></div>
            <div class="widget-voting--popup" v-show="isPopupVisible">
                <div class="widget-voting--popup--content">
                    <div class="widget-voting--tiles--popup-message">{{ popupMessage }}</div>
                    <BCPCopyright></BCPCopyright>
                </div></div>
            <br/>
            <div v-if="loadingMessage" class="widget-voting--tiles--loading-message">{{ loadingMessage }}</div>
            <div v-else>
                <div class="widget-voting--tiles--tile" v-for="worker in objectIds">
                    <BitSharesWorker :workerid="worker"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {FetchChain} from 'bitsharesjs/es'

    import BitSharesWorker from './BitSharesWorker'
    import AbstractWidgetResolving from './AbstractWidgetResolving'
    import BCPCopyright from './BCPCopyright'

    export default {
        name: 'BitSharesWidgetVoting',
        props: ['layout'],
        extends: AbstractWidgetResolving,
        components: {
            BitSharesWorker,
            BCPCopyright
        },
        data() {
            return {
                loadingMessage: "Loading ...",

                // the time that will be displayed
                currentTime: this.getFormattedTime(),

                // tooltip that is displayed on hover
                popupMessage: ""
            }
        },
        methods: {
            /**
             * general information about the blockchain
             * @returns {*}
             */
            getHeadMessage: function () {
                return new Promise(resolve => {
                    FetchChain("getObject", '2.1.0').then(object => {
                        try {
                            resolve('Head/Timestamp=' +
                                this.ChainStore.getObject('2.1.0').get('head_block_number') + '/' +
                                this.ChainStore.getObject('2.1.0').get('time'));
                        } catch (err) {
                            resolve('Initializing ...');
                        }
                    });
                });
            },
            /**
             * formats current time human readable
             */
            getFormattedTime: function () {
                let currentDate = new Date();
                return currentDate.getHours() + ':' + ('0' + currentDate.getMinutes()).slice(-2)
            },
            onResolvedIdFromChain: function() {
                this.getHeadMessage().then(message => {
                    this.popupMessage = message;
                });
            },
            /**
             * Loads the next message and displays it, also updates the tooltip
             */
            onResolvedIdFromProps: function () {
                this.loadingMessage = null;
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .widget-voting--tiles {
        text-align: center;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .widget-voting--tiles--title {
        cursor: pointer;
    }

    .widget-voting--tiles--title h2 {
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

    .widget-voting--tiles--popup-message {
        color: #000000;
    }

    .widget-voting--tiles--tile {
        display: inline-block;
    }

    .widget-voting--tiles .widget-voting--popup--content {
        font-size: 0.9em;
    }

</style>
