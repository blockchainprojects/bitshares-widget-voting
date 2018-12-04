<template>
</template>

<script>
    import AbstractBitSharesWidgetVoting from './AbstractBitSharesWidgetVoting'

    export default {
        name: 'BitSharesWorker',
        extends: AbstractBitSharesWidgetVoting,
        data () {
            return {
                votingObject: null,
                voted: false,
            }
        },
        methods: {
            onVotingObjectsUpdate() {
                this.voted = this.votingObject.voted;
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
            }
        }
    }
</script>

<style>
</style>
