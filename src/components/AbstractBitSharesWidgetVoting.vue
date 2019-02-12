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
                committeeIds: null,

                isPopupVisible: false,
                resolveIds: true
            }
        },
        beforeMount: function() {
            this._resolveIdsFromProps();
        },
        methods: {
            onConnected: function() {
                if (this.resolveIds) {
                    this._resolveIdsOnChain();
                }
            },
            onResolvedVotingId: function() {
                // overwrite
            },
            onResolvedVotingProps: function() {
                // overwrite
            },
            onVotingObjectsUpdate: function() {
                // overwrite
            },
            showPopup: function() {
                this.isPopupVisible = !this.isPopupVisible;
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
                } else if (typeof this.witnessid === 'object') {
                    // already resolved

                    // convert to dict that has the ids as struct
                    if ("id" in this.witnessid) {
                        this.witnessIds = {};
                        this.witnessIds[this.witnessid.id] = this.witnessid;
                    } else {
                        this.witnessIds = this.witnessid;
                    }
                }
                if (typeof this.workerid === 'string' && this.workerid !== "") {
                    this.workerIds = {};
                    this.workerid.split(";").forEach((item) => {
                        this.workerIds[item] = {
                            "id": item,
                            "type": "Worker"
                        }
                    });
                } else if (typeof this.workerid === 'object') {
                    // already resolved

                    // convert to dict that has the ids as struct
                    if ("id" in this.workerid) {
                        this.workerIds = {};
                        this.workerIds[this.workerid.id] = this.workerid;
                    } else {
                        this.workerIds = this.workerid;
                    }
                }
                if (typeof this.committeeid === 'string' && this.committeeid !== "") {
                    this.committeeIds = {};
                    this.committeeid.split(";").forEach((item) => {
                        this.committeeIds[item] = {
                            "id": item,
                            "type": "Committee"
                        }
                    });
                } else if (typeof this.committeeid === 'object') {
                    // already resolved

                    // convert to dict that has the ids as struct
                    if ("id" in this.committeeid) {
                        this.committeeIds = {};
                        this.committeeIds[this.committeeid.id] = this.committeeid;
                    } else {
                        this.committeeIds = this.committeeid;
                    }
                }
                this.onResolvedVotingProps();
            },
            _resolveIdsOnChain: function () {
                let resolve_all = [];
                let thiz = this;
                if (!!this.witnessIds && Object.keys(this.witnessIds).length > 0) {
                    resolve_all.push(new Promise((resolve) => {
                        thiz.chain.db_exec('get_objects', [Object.keys(thiz.witnessIds)]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.chain.db_exec('get_objects', [[chainObject.witness_account]]).then((accounts) => {
                                    thiz.witnessIds[chainObject.id].voteId = chainObject.vote_id;
                                    thiz.witnessIds[chainObject.id].object = chainObject;
                                    thiz.witnessIds[chainObject.id].text = accounts[0].name;
                                    thiz.witnessIds[chainObject.id].voted = null;
                                    resolve();
                                });
                            });
                        });
                    }));

                }
                if (!!this.workerIds && Object.keys(this.workerIds).length > 0) {
                    resolve_all.push(new Promise((resolve) => {
                        this.chain.db_exec('get_objects', [Object.keys(thiz.workerIds)]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.workerIds[chainObject.id].voteId = chainObject.vote_for;
                                thiz.workerIds[chainObject.id].object = chainObject;
                                thiz.workerIds[chainObject.id].text = chainObject.name;
                                thiz.workerIds[chainObject.id].voted = null;
                            });
                            resolve();
                        });
                    }));
                }
                if (!!this.committeeIds && Object.keys(this.committeeIds).length > 0) {
                    resolve_all.push(new Promise((resolve) => {
                        this.chain.db_exec('get_objects', [Object.keys(thiz.committeeIds)]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.chain.db_exec('get_objects', [[chainObject.committee_account]]).then((accounts) => {
                                    thiz.committeeIds[chainObject.id].voteId = chainObject.vote_for;
                                    thiz.committeeIds[chainObject.id].object = chainObject;
                                    thiz.committeeIds[chainObject.id].text = accounts[0].name;
                                    thiz.committeeIds[chainObject.id].voted = null;
                                    resolve();
                                });
                            });
                        });
                    }));
                }
                Promise.all(resolve_all).then(() => {
                    thiz.onResolvedVotingId();
                });
            },
            onBeetFound: function (status) {
                if (status) {
                    // check voting status
                    let thiz = this;
                    this.beet.connect().then(connected => {
                        if (connected) {
                            thiz._checkIfVoted(connected.account_id);
                        } else {
                            this.errored("Connection to Beet could not be established");
                            this.setBeetInstallationStatus(false);
                        }
                    });
                }
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
                    this.onVotingObjectsUpdate();
                }
            },
            vote: function (votingObject) {
                let thiz = this;

                this.beet.connect().then(connected => {
                    if (!!connected) {
                        thiz._checkIfVoted(connected.account_id, votingObject.voteId).then((voted) => {
                            if (!voted) {
                                connected.beet.voteFor(
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
                    } else {
                        this.errored("Connection to Beet could not be established");
                        this.setBeetInstallationStatus(false);
                    }
                }).catch((err) => {
                    this.errored(err);
                });
            }
        }
    }
</script>

<style>
    .widget-voting--popup {
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
</style>
