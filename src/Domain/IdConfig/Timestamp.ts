export class Timestamp {
    private readonly _value: number

    constructor(timestamp: number) {
        this._value = timestamp;
    }

    get value(): number {
        return this._value;
    }

    equals(timestamp: Timestamp): boolean {
        return this._value === timestamp.value
    }
}