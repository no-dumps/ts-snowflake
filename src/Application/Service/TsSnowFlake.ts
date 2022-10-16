import IdConfig from "../../Domain/IdConfig/IdConfig";
import {IdValue} from "../../Domain/IdValue/IdValue";
import {Timestamp} from "../../Domain/IdConfig/Timestamp";
import {IdWorker} from "../../Domain/IdWorker/IdWorker";

class TsSnowFlake {
    private readonly config: IdConfig
    sequence: number
    lastTimestamp: Timestamp

    constructor(config: IdConfig) {
        this.config = config;
        this.sequence = 0;
        this.lastTimestamp = new Timestamp(0);
    }

    generate(): IdValue {
        return new IdWorker(this.config).generate()
    }
}