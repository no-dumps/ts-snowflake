export class StringUtil {
    static padding(target: string, paddingChar: string, length: number) {
        if (paddingChar.length !== 1) {
            throw new Error(`${paddingChar} is not a single char.`)
        }
        return (Array(length).join(paddingChar) + target).slice(-length)
    }
}