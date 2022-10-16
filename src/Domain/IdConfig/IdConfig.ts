export default class IdConfig {
    private readonly _workerId: number
    private readonly _offset: number

    /**
     * @param workerId machine id or random number(default 1).
     * @param offset  Service start time offset(unix timestamp).
     */
    constructor(workerId?: number, offset?: number) {
        this._workerId = (workerId || 1) % 1023;
        this._offset = offset || 0;
    }

    get workerId(): number {
        return this._workerId;
    }

    get offset(): number {
        return this._offset;
    }
}