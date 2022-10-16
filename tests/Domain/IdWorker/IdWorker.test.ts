import IdConfig from "../../../src/Domain/IdConfig/IdConfig";
import {IdWorker} from "../../../src/Domain/IdWorker/IdWorker";

describe('normal scenario', () => {
    test('generate 19 digit unique id', () => {
        const actual = new IdWorker(new IdConfig()).generate()
        expect(actual.value.length).toBe(19)
    })
    test('generate unique id on different time', () => {
        const idWorker = new IdWorker(new IdConfig());
        const actual1 = idWorker.generate()
        const actual2 = idWorker.generate()
        expect(actual1.value).not.toBe(actual2.value)
    })
    test('generate unique id on same time', () => {
        jest.spyOn(Date, "now")
            .mockImplementation(() => 1641030371000)
        const idWorker = new IdWorker(new IdConfig());
        const actual1 = idWorker.generate()
        const actual2 = idWorker.generate()
        expect(actual1.value).not.toBe(actual2.value)
    })
})