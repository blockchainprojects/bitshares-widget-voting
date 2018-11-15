<template>
    <span class="widget-voting--inline">
        <div class="widget-voting--inline--text" v-on:click="showPopup">{{ text }}</div>
        <div class="widget-voting--popup" v-show="isPopupVisible">
            <div class="widget-voting--popup--content">
                <div>{{ popUpText }}</div><br />
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
                </div><br /><br /><br />
                <BCPCopyright></BCPCopyright>
            </div>
        </div>
    </span>
</template>

<script>
    import AbstractBitSharesWidgetVoting from './AbstractBitSharesWidgetVoting'
    import BCPCopyright from './BCPCopyright'

    export default {
        name: 'BitSharesWidgetInlineVoting',
        extends: AbstractBitSharesWidgetVoting,
        components: {
            BCPCopyright
        },
        data() {
            return {
                text: this.innerHTML, // initialize with given text
                popUpText: "Loading ...",

                votingObject: null
            }
        },
        methods: {
            showVotingObject() {
                this.text = this.votingObject.text;
                this.popUpText = this.votingObject.type + " " + this.votingObject.text;
            },
            onResolvedVotingProps: function() {
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
            }
        }
    }
</script>

<style>
    .widget-voting--inline
    {
        color: #2c3e50;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }

    .widget-voting--inline .widget-voting--popup--content
    {
        font-size:0.9em;
    }


    .widget-voting--inline--text {
        display: inline;
        position: relative;
    }

    .widget-voting--inline--text:hover {
        cursor: pointer;
    }

    .widget-voting--popup--content .voting {
        float: right;
    }

    .widget-voting--popup--content .voting .label {
        font-size: 0.7em;
        color: gray;
        vertical-align: middle;
    }


    .widget-voting--popup--content .button
    {
        border-radius: 15px;
        margin-top: 0.3em;
        margin-bottom: 0.3em;
    }


</style>
