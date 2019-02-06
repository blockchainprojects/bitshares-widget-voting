import {Apis, GrapheneApi} from 'bitsharesjs-ws'
import {ChainStore, FetchChainObjects} from 'bitsharesjs/es'

class Blockchain {

    constructor() {
        this._nodes = [
            "wss://eu.nodes.bitshares.ws",
            "wss://us.nodes.bitshares.ws",
            "wss://sg.nodes.bitshares.ws",
            "wss://japan.bitshares.apasia.tech/ws"
        ];
        this._apiInstance = null;
        this._connected = false;
        this._connectingInProgress = false;

        this._resolves = [];
        this._rejects = [];
    }

    connect() {
        if (this._connected) {
            return new Promise((resolve, reject) => {
                resolve();
            });
        } else {
            if (this._connectingInProgress) {
                return new Promise((resolve, reject) => {
                    this._resolves.push(resolve);
                    this._rejects.push(reject);
                });
            } else {
                return new Promise((resolve, reject) => {
                    this._connect(null, resolve, reject);
                });
            }
        }
    }

    _onConnect() {
        this._resolves.forEach((resolve) => {
            resolve();
        });
    }

    _onError(err) {
        this._rejects.forEach((reject) => {
            reject();
        });
    }

    _connect(idx = null, resolve, reject) {
        this._connected = false;
        this._connectingInProgress = true;
        if (idx == null) {
            idx = 0;
        }
        // one is selected now, should probably be randomized
        this._apiInstance = Apis.instance(this._nodes[idx], true);
        this._apiInstance.init_promise.then(() => {
            ChainStore.init(false).then(() => {
                // fetch now for quicker cashing
                ChainStore.fetchObject('2.1.0');
                this._connectingInProgress = false;
                this._connected = true;
                resolve();
                this._onConnect();
            });
        }).catch((err) => {
            idx = idx + 1;
            if (idx > this._nodes.length - 1) {
                this._connectingInProgress = false;
                reject(err);
                this._onError();
            }
            this._apiInstance.close().then(() => {
                this._apiInstance = null;
                this._connect(idx, resolve, reject);
            });
        });
    }

    db_exec(callName, argumentsList) {
        return this._apiInstance._db.exec(callName, argumentsList);
    }
}

const chain = new Blockchain();
export default chain;
