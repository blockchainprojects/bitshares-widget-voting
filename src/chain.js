import {Apis, GrapheneApi} from 'bitsharesjs-ws'
import {ChainStore, FetchChainObjects} from 'bitsharesjs/es'

export class Blockchain {

    constructor() {
        this._nodes = [
            "wss://eu.nodes.bitshares.ws",
            "wss://us.nodes.bitshares.ws",
            "wss://sg.nodes.bitshares.ws",
            "wss://japan.bitshares.apasia.tech/ws"
        ];
        this._apiInstance = null;
    }

    connect() {
        return new Promise((resolve, reject) => {
            this._connect(null, resolve, reject);
        });
    }

    _connect(idx = null, resolve, reject) {
        if (idx == null) {
            idx = 0;
        }
        // one is selected now, should probably be randomized
        this._apiInstance = Apis.instance(this._nodes[idx], true);
        this._apiInstance.init_promise.then(() => {
            ChainStore.init().then(() => {
                // fetch now for quicker cashing
                ChainStore.fetchObject('2.1.0');
                resolve();
            })
        }).catch((err) => {
            idx = idx + 1;
            if (idx > this._nodes.length - 1) {
                reject(err);
            }
            this._apiInstance.close().then(() => {
                this._apiInstance = null;
                this._connect(idx);
            });
        });
    }

    db_exec(callName, argumentsList) {
        return this._apiInstance._db.exec(callName, argumentsList);
    }
}
