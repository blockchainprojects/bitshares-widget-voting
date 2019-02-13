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

                resolveIdsFromPropsOnCreate: true,
                resolveIdsFromChainOnConnected: true
            }
        },
        methods: {
            onConnected: function() {
                if (this.resolveIdsFromChainOnConnected) {
                    this._resolveIdsFromProps();
                    this._resolveIdsOnChain();
                }
            },
            onResolvedIdFromChain: function() {
                // overwrite
            },
            onResolvedIdFromProps: function() {
                // overwrite
            },
            onVotingObjectsUpdate: function() {
                // overwrite
            },
            _resolveIdsFromProps: function () {
                if (typeof this.objectid === 'string' && this.objectid !== "" ) {
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
                } else {
                    throw "Widget needs objectid props"
                }
                this.onResolvedIdFromProps();
            },
            _getOnChainResolvePromise(type, ids) {
                let thiz = this;
                if (type == "6") {
                    // witness
                    return new Promise((resolve) => {
                        thiz.chain.db_exec('get_objects', [ids]).then((chainObjects) => {
                            let all_promises = [];
                            chainObjects.forEach((chainObject) => {
                                thiz.chain.db_exec('get_objects', [[chainObject.witness_account]]).then((accounts) => {
                                    thiz.objectIds[chainObject.id].voteId = chainObject.vote_id;
                                    thiz.objectIds[chainObject.id].object = chainObject;
                                    thiz.objectIds[chainObject.id].text = accounts[0].name;
                                    thiz.objectIds[chainObject.id].voted = null;
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
                this.objectIds.forEach((key,value) => {
                    if (!(value.type in idsPerType)) {
                        idsPerType[value.type] = []
                    }
                    idsPerType[value.type].push(key);
                });
                idsPerType.forEach((key,value) => {
                    resolve_all.push(thiz._getOnChainResolvePromise(key, value));
                });
                console.log("before fail?")
                Promise.all(resolve_all).then(() => {
                    console.log("before fail?")
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
</style>
