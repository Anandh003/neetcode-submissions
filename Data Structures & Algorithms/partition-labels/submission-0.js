class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const charMap = {}
        const subStrings = []
        let subStringPointer = 0;
        let subString = ""
        
        for (let i = 0; i < S.length; i++) {
            charMap[S[i]] = i
        }

        for (let i = 0; i < S.length; i++) {
            const char = S[i];
            const lastPos = charMap[char]
            subString += char

            if (lastPos > subStringPointer) {
                subStringPointer = lastPos
            }

            if (subStringPointer === i) {
                subStrings.push(subString)
                subString = ""
            }
        }

        return subStrings.map(str => str.length)

    }
}
