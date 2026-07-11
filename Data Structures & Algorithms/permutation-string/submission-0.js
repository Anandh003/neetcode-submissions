class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const charCountMap = this.findCharacterCount(s1)
        let left = 0, right = 0;
        let char = s2[left]
        let targetCountMap = {}

        while (left < s2.length && right < s2.length) {
            if (
                charCountMap[char] &&
                (!targetCountMap[char] || targetCountMap[char] + 1 <= charCountMap[char])
            ) {
                targetCountMap[char] = targetCountMap[char] ? targetCountMap[char] + 1 : 1
                right = right + 1
                char = s2[right]
                continue;
            }

            if (Object.keys(targetCountMap).length && this.checkSubString(charCountMap, targetCountMap)) {
                return true
            }
            targetCountMap = {}
            left++;
            right = left
            char = s2[left]
        }

        return this.checkSubString(charCountMap, targetCountMap)
    }

    checkSubString(strMap1, strMap2) {
        const lengthCond = Object.keys(strMap1).length === Object.keys(strMap2).length
        const charSet = new Set([...Object.keys(strMap1), ...Object.keys(strMap2)])

        if (!lengthCond) {
            return false
        }

        for (const [key, value] of Object.entries(strMap2)) {
            if (strMap1[key] !== value) return false
            charSet.delete(key)
        }

        return charSet.size === 0;
    }

    findCharacterCount(string) {
        const charMap = {}
        string.split('').map(ch => charMap[ch] = charMap[ch] ? charMap[ch] + 1 : 1)
        return charMap;
    }
}