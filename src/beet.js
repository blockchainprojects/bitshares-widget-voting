require('./lib/beet-js/dist/beet-js')

class Beet {

    constructor() {
        this._beet = beet;

        this._connected = false;
        this._connectingInProgress = false;

        this._buffer = {};
    }

    isInstalled() {
        if (!this._buffer.isInstalled) {
            let _tmp = new BufferedExecution(this._beet.isInstalled.bind(this._beet))
            this._buffer.isInstalled = _tmp;
        }
        let buffer = this._buffer.isInstalled;
        return buffer.execute();
    }

    noBuffer() {
        return this._beet;
    }

    connect() {
        let _connect = () => {
            let thiz = this;
            return new Promise((resolve, reject) => {
                thiz._beet.init("BitShares Voting Widget").then(identities => {
                    if (identities.length == 0) {
                        thiz._beet.connect().then(res => {
                            thiz._beet.link('BTS').then(res => {
                                res.beet = thiz._beet;
                                resolve(res);
                            });
                        }).catch(reject);
                    } else {
                        thiz._beet.connect(identities[0]).then(res => {
                            res.beet = thiz._beet;
                            resolve(res);
                        }).catch(reject);
                    }
                }).catch(reject);
            });
        };

        if (!this._buffer.connect) {
            let _tmp = new BufferedExecution(_connect.bind(this));
            this._buffer.connect = _tmp;
        }
        let buffer = this._buffer.connect;
        return buffer.execute();
    }

}

class BufferedExecution {

    constructor(actualCall) {
        this._executionInProgress = false;

        this._resolves = [];
        this._rejects = [];

        this._actualCall = actualCall;
    }

    execute() {
        if (this._executionInProgress) {
            return new Promise((resolve, reject) => {
                this._resolves.push(resolve);
                this._rejects.push(reject);
            });
        } else {
            return new Promise((resolve, reject) => {
                this._resolves.push(resolve);
                this._rejects.push(reject);
                this._actuallyExecute();
            });
        }
    }

    _onResolve(argument) {
        this._resolves.forEach((resolve) => {
            resolve(argument);
        });
        this._resolves = [];
    }

    _onError(err) {
        this._rejects.forEach((reject) => {
            reject(err);
        });
        this._rejects = [];
    }

    _actuallyExecute() {
        this._actualCall().then(this._onResolve.bind(this)).catch(this._onError.bind(this));
    }



}

const beeet = new Beet();
export default beeet;

