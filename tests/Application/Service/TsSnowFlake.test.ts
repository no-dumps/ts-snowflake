import IdConfig from "../../../src/Domain/IdConfig/IdConfig";
import {TsSnowFlake} from "../../../src";

describe('integration scenario', () => {
    test('generate', () => {
        const idConfig = new IdConfig()
        const actual = new TsSnowFlake(idConfig).generate()
        expect(actual.value.length).toBe(19)
    })
})