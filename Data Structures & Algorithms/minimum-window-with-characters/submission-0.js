class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s == '' || s.length < t.length) return ""

        const subStringMap = {}, windowMap = {}, result = [-1, -1];
        let resultLen = Infinity

        for (let ch of t.split('')) {
            subStringMap[ch] = 1 + (subStringMap[ch] ?? 0)
        }

        let have = 0, need = Object.keys(subStringMap).length

        let left = 0, right = 0

        for (let index = 0; index <= s.length; index++) {
            if (subStringMap[s[index]]) {
                left = index
                break;
            }
        }

        right = left

        while (right < s.length) {
            const ch = s[right]

            if (ch in subStringMap) {
                windowMap[ch] = 1 + (windowMap[ch] ?? 0)
                if (windowMap[ch] == subStringMap[ch]) {
                    have += 1
                }
            }

            while (have === need) {
                if (right - left + 1 < resultLen) {
                    result[0] = left, result[1] = right
                    resultLen = right - left + 1
                }

                const leftCh = s[left]

                if (leftCh in windowMap) {
                    windowMap[leftCh] = windowMap[leftCh] - 1
                }

                if (windowMap[leftCh] < subStringMap[leftCh]) {
                    have -= 1
                }
                left += 1
            }

            right += 1
        }

        if (resultLen < Infinity)
            return s.substring(result[0], result[1] + 1)
        else
            return ''
    }
}