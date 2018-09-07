<template>
</template>

<script>
    import {FetchChain} from 'bitsharesjs/es'
    import AbstractBitSharesWidget from './AbstractBitSharesWidget'

    export default {
        name: 'AbstractBitSharesWidgetVoting',
        props: ['workerid', 'witnessid', 'committeeid', 'innerHTML'],
        extends: AbstractBitSharesWidget,
        components: {
        },
        data() {
            return {
                workerIds: null,
                witnessIds: null,
                committeeIds: null
            }
        },
        beforeMount: function() {
            this._resolveIdsFromProps();
        },
        methods: {
            onConnected: function() {
                this._resolveIdsOnChain();
            },
            onResolvedVotingId: function() {
                // overwrite
            },
            onResolvedVotingInput: function() {
                // overwrite
            },
            _resolveIdsFromProps: function () {
                if (typeof this.witnessid === 'string' && this.witnessid !== "" ) {
                    this.witnessIds = {};
                    this.witnessid.split(";").forEach((item) => {
                        this.witnessIds[item] = {
                            "id": item,
                            "type": "Witness"
                        }
                    });
                }
                if (typeof this.workerid === 'string' && this.workerid !== "") {
                    this.workerIds = {};
                    this.workerid.split(";").forEach((item) => {
                        this.workerIds[item] = {
                            "id": item,
                            "type": "Worker"
                        }
                    });
                }
                if (typeof this.committeeid === 'string' && this.committeeid !== "") {
                    this.committeeIds = {};
                    this.committeeid.split(";").forEach((item) => {
                        this.committeeIds[item] = {
                            "id": item,
                            "type": "Committee"
                        }
                    });
                }
                this.onResolvedVotingInput();
            },
            _resolveIdsOnChain: function () {
                if (!!this.witnessIds && Object.keys(this.witnessIds).length > 0) {
                    this.chain.db_exec('get_objects', [Object.keys(this.witnessIds)]).then((chainObjects) => {
                        chainObjects.forEach((chainObject) => {
                            this.chain.db_exec('get_objects', [[chainObject.witness_account]]).then((accounts) => {
                                this.witnessIds[chainObject.id].voteId = chainObject.vote_id;
                                this.witnessIds[chainObject.id].object = chainObject;
                                this.witnessIds[chainObject.id].text = accounts[0].name;
                                this.witnessIds[chainObject.id].voted = null;
                                console.log("votable chain object found", this.witnessIds[chainObject.id]);
                                this.onResolvedVotingId();
                            });
                        });
                    });
                }
                if (!!this.workerIds && Object.keys(this.workerIds).length > 0) {
                    this.chain.db_exec('get_objects', [Object.keys(this.workerIds)]).then((chainObjects) => {
                        chainObjects.forEach((chainObject) => {
                            this.workerIds[chainObject.id].voteId = chainObject.vote_for;
                            this.workerIds[chainObject.id].object = chainObject;
                            this.workerIds[chainObject.id].text = chainObject.name;
                            this.workerIds[chainObject.id].voted = null;
                            console.log("votable chain object found", this.workerIds[chainObject.id]);
                        });
                        this.onResolvedVotingId();
                    });
                }
                if (!!this.committeeIds && Object.keys(this.committeeIds).length > 0) {
                    this.chain.db_exec('get_objects', [Object.keys(this.committeeIds)]).then((chainObjects) => {
                        chainObjects.forEach((chainObject) => {
                            this.chain.db_exec('get_objects', [[chainObject.committee_account]]).then((accounts) => {
                                this.committeeIds[chainObject.id].voteId = chainObject.vote_for;
                                this.committeeIds[chainObject.id].object = chainObject;
                                this.committeeIds[chainObject.id].text = accounts[0].name;
                                this.committeeIds[chainObject.id].voted = null;
                                console.log("votable chain object found", this.committeeIds[chainObjects.id]);
                                this.onResolvedVotingId();
                            });
                        });
                    });
                }
            },
            onBeetFound: function (status) {
                if (status) {
                    // check voting status
                    let thiz = this;
                    this.holder.btscompanion.connect('BitShares Voting Widget - Display voting status').then(connected => {
                        if (connected) {
                            thiz._checkIfVoted(window.btscompanion.identity.id);
                        }
                    });
                }
            },
            _checkIfVoted: function(accountId, voteId = null) {
                console.log("Checking votes");
                return new Promise((resolve, reject) =>
                {
                    let thiz = this;
                    FetchChain("getAccount", accountId, undefined, {
                        [accountId]: true
                    }).then((account) => {
                        account = account.toJS();
                        if (voteId == null) {
                            thiz._checkIfVotedObjects(account, thiz.witnessIds);
                            thiz._checkIfVotedObjects(account, thiz.workerIds);
                            thiz._checkIfVotedObjects(account, thiz.committeeIds);
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
            },
            vote: function (votingObject) {
                let thiz = this;
                this.holder.btscompanion.connect('BitShares Voting Widget - Cast vote').then(connected => {
                    if (connected) {
                        thiz._checkIfVoted(window.btscompanion.identity.id, votingObject.voteId).then((voted) => {
                            if (!voted) {
                                window.btscompanion.voteFor(
                                    {
                                        id: thiz.beetVoteId
                                    }
                                ).then((result) => {
                                    votingObject.voted = true;
                                    console.log(result);
                                }).catch((err) => {
                                    thiz.errored(err);
                                });
                            }
                        }).catch((err) => {
                            thiz.errored(err);
                        });
                    }
                }).catch((err) => {
                    this.errored(err);
                });
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
