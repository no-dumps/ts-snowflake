import {StringUtil} from "../../../src/Domain/Util/StringUtil";

describe('normal scenarios', () => {
    test('zero padding', () => {
            const target = '1'
            const paddingChar = '0'
            const actual = StringUtil.padding(target, paddingChar, 5)
            expect(actual).toBe('00001')
        }
    )
})

describe('exception scenarios', () => {
    test('paddingChar not single char', () => {
            const target = '1'
            const paddingChar = '00'
            const actual = () => StringUtil.padding(target, paddingChar, 5);
            expect(actual)
                .toThrow()
        }
    )
})
