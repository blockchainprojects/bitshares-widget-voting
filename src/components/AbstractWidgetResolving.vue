<template>
</template>

<script>
    import {FetchChain} from 'bitsharesjs/es'
    import AbstractWidget from './AbstractWidget'

    export default {
        name: 'AbstractWidgetResolving',
        props: ['objectid'],
        extends: AbstractWidget,
        components: {
        },
        data() {
            return {
                objectIds: null,
                isPopupVisible: false,

                resolveIdsFromPropsOnCreate: true,
                resolveIdsFromChainOnConnected: true
            }
        },
        beforeMount: function() {
            if (this.resolveIdsFromPropsOnCreate) {
                this._resolveIdsFromProps();
            }
        },
        methods: {
            onConnected: function() {
                if (this.resolveIdsFromChainOnConnected) {
                    this._resolveIdsOnChain();
                }
            },
            onResolvedIdFromChain: function() {
                // overwrite
            },
            onResolvedIdFromProps: function() {
                // overwrite
            },
            onObjectsUpdate: function() {
                // overwrite
            },
            showPopup: function() {
                this.isPopupVisible = !this.isPopupVisible;
            },
            _resolveIdsFromProps: function () {
                if (typeof this.objectid === 'string' && this.witnessid !== "" ) {
                    this.objectIds = {};

                    this.objectid.split(";").forEach((item) => {
                        this.objectIds[item] = {
                            "id": item,
                            "type": item.split(".")[1]
                        }
                    });
                } else if (typeof this.objectid === 'object') {
                    // already resolved

                    // convert to dict that has the ids as struct
                    if ("id" in this.objectid) {
                        this.objectIds = {};
                        this.objectIds[this.objectid.id] = this.objectid;
                    } else {
                        this.objectIds = this.objectid;
                    }
                }
                this.onResolvedIdFromProps();
            },
            _getOnChainResolvePromise(type, ids) {
                let thiz = this;
                if (type == "6") {
                    // witness
                    return new Promise((resolve) => {
                        thiz.chain.db_exec('get_objects', [ids]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.chain.db_exec('get_objects', [[chainObject.witness_account]]).then((accounts) => {
                                    thiz.objectIds[chainObject.id].voteId = chainObject.vote_id;
                                    thiz.objectIds[chainObject.id].object = chainObject;
                                    thiz.objectIds[chainObject.id].text = accounts[0].name;
                                    thiz.objectIds[chainObject.id].voted = null;
                                    console.log("votable chain object found", thiz.objectIds[chainObject.id]);
                                    resolve();
                                });
                            });
                        });
                    })
                } else if (type == "14") {
                    return new Promise((resolve) => {
                        this.chain.db_exec('get_objects', [ids]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.objectIds[chainObject.id].voteId = chainObject.vote_for;
                                thiz.objectIds[chainObject.id].object = chainObject;
                                thiz.objectIds[chainObject.id].text = chainObject.name;
                                thiz.objectIds[chainObject.id].voted = null;
                                console.log("votable chain object found", thiz.objectIds[chainObject.id]);
                            });
                            resolve();
                        });
                    })
                } else if (type == "14") {
                    return new Promise((resolve) => {
                        this.chain.db_exec('get_objects', [ids]).then((chainObjects) => {
                            chainObjects.forEach((chainObject) => {
                                thiz.chain.db_exec('get_objects', [[chainObject.committee_account]]).then((accounts) => {
                                    thiz.objectIds[chainObject.id].voteId = chainObject.vote_for;
                                    thiz.objectIds[chainObject.id].object = chainObject;
                                    thiz.objectIds[chainObject.id].text = accounts[0].name;
                                    thiz.objectIds[chainObject.id].voted = null;
                                    console.log("votable chain object found", thiz.objectIds[chainObjects.id]);
                                    resolve();
                                });
                            });
                        });
                    })
                } else {
                    throw "Unsupported object id";
                }
            },
            _resolveIdsOnChain: function () {
                let resolve_all = [];
                let thiz = this;

                // sort same types together
                let idsPerType = {};
                this.witnessIds.forEach((key,value) => {
                    if (!(value.type in idsPerType)) {
                        idsPerType[value.type] = []
                    }
                    idsPerType[value.type].push(key);
                });
                idsPerType.forEach((key,value) => {
                    resolve_all.push(this._getOnChainResolvePromise(key, value));
                });
                Promise.all(resolve_all).then(() => {
                    thiz.onResolvedIdFromChain();
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
