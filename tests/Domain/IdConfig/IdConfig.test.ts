import IdConfig from "../../../src/Domain/IdConfig/IdConfig";

describe('init instance', () => {
    test('all null', () => {
            const actual = new IdConfig()
            expect(actual.workerId).toBe(1)
            expect(actual.offset).toBe(0)
        }
    )
    describe.each([
        [1, undefined, 1, 0],
        [2, (2019 - 1970) * 31536000 * 1000, 2, 1545264000000]
    ])(`normal scenarios:(workerId: %i, timestamp: %i)`, (workerId: number | undefined, offset: number | undefined, actualWorkerId: number, actualOffset: number) => {
        test(`return value : ${actualWorkerId},${actualOffset}`, () => {
            const actual = new IdConfig(workerId, offset)
            expect(actual.workerId).toBe(actualWorkerId)
            expect(actual.offset).toBe(actualOffset)
        })
    })
})
