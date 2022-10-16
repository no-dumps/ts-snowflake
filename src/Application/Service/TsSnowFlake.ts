import IdConfig from "../../Domain/IdConfig/IdConfig";
import {IdValue} from "../../Domain/IdValue/IdValue";
import {IdWorker} from "../../Domain/IdWorker/IdWorker";

export class TsSnowFlake {
    private readonly config: IdConfig

    constructor(config: IdConfig) {
        this.config = config;
    }

    generate(): IdValue {
        return new IdWorker(this.config).generate()
    }
}