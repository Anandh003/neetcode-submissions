class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const uniqueChars = new Set()
        let subString = ''
        let subStringLength = 0
        let l = 0
        for (let indx = 0; indx < s.length; indx++) {
            const char = s[indx]
            if (uniqueChars.has(char)) {
                while (uniqueChars.has(char)) {
                    uniqueChars.delete(s[l])
                    subString = subString.replace(s[l], '')
                    l++;
                }
            }
            subString += char
            uniqueChars.add(char)
            subStringLength = Math.max(subString.length, subStringLength)
        }
        return subStringLength
    }
}
