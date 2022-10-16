import IdConfig from "../IdConfig/IdConfig";
import {Timestamp} from "../IdConfig/Timestamp";
import {IdValue} from "../IdValue/IdValue";
import {StringUtil} from "../Util/StringUtil";
import {hexToDec} from "hex2dec";

export class IdWorker {
    private readonly BIT_12 = 4095
    private readonly config: IdConfig
    sequence: number
    lastTimestamp: Timestamp

    constructor(config: IdConfig) {
        this.config = config;
        this.sequence = 0;
        this.lastTimestamp = new Timestamp(0);
    }

    generate(): IdValue {
        const time = new Timestamp(Date.now())
        this.sequence = this.getSequence(this.sequence, time, this.lastTimestamp)
        this.lastTimestamp = time
        const bitSequence = StringUtil.padding(this.sequence.toString(2), '0', 12)
        const bitWorkerId = StringUtil.padding(this.config.workerId.toString(2), '0', 10)
        const bitTime = (time.value - this.config.offset).toString(2)
        const bitId = bitTime + bitWorkerId + bitSequence
        let id = ''
        for (let i = bitId.length; i > 0; i -= 4) {
            id = parseInt(bitId.substring(i - 4, i), 2).toString(16) + id
        }
        const decimalId = hexToDec(id)
        if (!decimalId) {
            throw new Error(`error hexToDec id:${id}`)
        }
        return new IdValue(decimalId)
    }

    private getSequence(sequence: number, time: Timestamp, lastTimestamp: Timestamp) {
        if (time.equals(lastTimestamp)) {
            sequence++
            if (sequence > this.BIT_12) {
                while (Date.now() <= time.value) {
                }
                return 0
            }
            return sequence
        }
        return 0
    }
}