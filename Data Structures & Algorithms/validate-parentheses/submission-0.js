class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const mapping = {
            '{': '}',
            '[': ']',
            '(': ')'
        }
        for (let indx = 0; indx < s.length; indx++) {
            const char = s[indx]

            if (mapping[char]) {
                stack.push(char)
                continue
            }

            const stacked = stack.pop()
            const mapped = mapping[stacked]

            if (mapped !== char) {
                return false
            }
        }

        return stack.length === 0
    }
}
