<template>
</template>

<script>
    import {FetchChain} from 'bitsharesjs/es'
    import AbstractWidgetResolving from './AbstractWidgetResolving'

    export default {
        name: 'AbstractWidgetResolvingVoting',
        extends: AbstractWidgetResolving,
        components: {
        },
        methods: {
            onBeetConnected: function (account) {
                this._checkIfVoted(account);
            },
            onResolvedIdFromChain: function () {
                this.onVotingObjectsUpdate();
            },
            _checkIfVoted: function(accountId, voteId = null) {
                return new Promise((resolve, reject) =>
                {
                    let thiz = this;
                    FetchChain("getAccount", accountId, undefined, {
                        [accountId]: true
                    }).then((account) => {
                        account = account.toJS();
                        if (voteId == null) {
                            thiz._checkIfVotedObjects(account, thiz.objectIds);
                            resolve();
                        } else {
                            let voted = !(account.options.votes.indexOf(voteId) == -1);
                            resolve(voted);
                        }
                    }).catch((err) => {
                        reject(err);
                    })
                });
            },
            _checkIfVotedObjects: function(account, objectIds) {
                // iterate all voting objects
                for (let key in objectIds) {
                    if (account.options.votes.indexOf(objectIds[key].voteId) == -1) {
                        objectIds[key].voted = false;
                    } else {
                        objectIds[key].voted = true;
                    }
                }
                this.onVotingObjectsUpdate();
            },
            vote: function (votingObject) {
                let thiz = this;

                this.beet.connect().then(connected => {
                    thiz._checkIfVoted(connected.getAccount().id, votingObject.voteId).then((voted) => {
                        if (!voted) {
                            connected.voteFor(
                                {
                                    id: thiz.votingObject.id
                                }
                            ).then((result) => {
                                votingObject.voted = true;
                                this.onVotingObjectsUpdate();
                            }).catch((err) => {
                                votingObject.failed = true;
                                thiz.errored(err);
                            });
                        }
                    }).catch((err) => {
                        thiz.errored(err);
                    });
                }).catch((err) => {
                    this.errored(err);
                    this.setBeetInstallationStatus(false);
                });
            },
            onVotingObjectsUpdate: function() {
                // may be overriden
            }
        }
    }
</script>

<style>
</style>
