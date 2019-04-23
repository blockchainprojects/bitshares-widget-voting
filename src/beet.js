import beetjs from '@beetapp/beet-js/src'

class Beet {

    constructor() {
        this._beet = beetjs.beet;
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
        if (!this._buffer.connect) {
            let _connect = () => {
                let thiz = this;
                return new Promise((resolve, reject) => {
                    thiz._beet.get("BitShares Voting Widget", "BTS").then(beetApp => {
                        resolve(beetApp.BTS);
                    }).catch(reject);
                });
            };
            let _tmp = new BufferedExecution(_connect.bind(this));
            this._buffer.connect = _tmp;
        }
        return this._buffer.connect.execute();
    }

}

class BufferedExecution {

    constructor(actualCall) {
        this._executionInProgress = false;

        this._resolves = [];
        this._rejects = [];

        this._actualCall = actualCall;

        this._result = null;
    }

    execute() {
        if (this._executionInProgress) {
            return new Promise((resolve, reject) => {
                this._resolves.push(resolve);
                this._rejects.push(reject);
            });
        } else {
            this._executionInProgress = true;
            if (this._result != null) {
                return new Promise((resolve, reject) => {
                    this._resolves.push(resolve);
                    this._rejects.push(reject);
                    this._onResolve(this._result);
                });
            } else {
                return new Promise((resolve, reject) => {
                    this._resolves.push(resolve);
                    this._rejects.push(reject);
                    this._actuallyExecute();
                });
            }
        }
    }

    _onResolve(argument) {
        this._executionInProgress = false;
        this._result = argument;
        this._resolves.forEach((resolve) => {
            resolve(argument);
        });
        this._resolves = [];
    }

    _onError(err) {
        this._executionInProgress = false;
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

