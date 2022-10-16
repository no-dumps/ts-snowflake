import {Timestamp} from "../../../src/Domain/IdConfig/Timestamp";

describe('normal scenarios', () => {
    test('init instance', () => {
            const actual = new Timestamp(0)
            expect(actual.value).toBe(0)
        }
    )
    describe.each([
        [(2019 - 1970) * 31536000 * 1000, 1545264000000, true],
        [(202 - 1970) * 31536000 * 1000, 1545264000000, false],
    ])(`equals :(timestamp1: %s, timestamp2: %i)`, (timestamp1: number, timestamp2: number, actual: boolean) => {
        test(`return value : ${actual}`, () => {
            const actualTimestamp1 = new Timestamp(timestamp1)
            const actualTimestamp2 = new Timestamp(timestamp2)
            expect(actualTimestamp1.equals(actualTimestamp2)).toBe(actual)
        })
    })
})
