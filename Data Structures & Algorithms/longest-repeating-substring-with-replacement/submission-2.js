class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0, right = 0, maxSeq = 0, charMap = {};

        charMap[s[right]] = charMap[s[right]] ? charMap[s[right]] + 1 : 1

        while (left <= right) {
            const currentMax = Math.max(...Object.values(charMap))
            const windowSize = right - left + 1
    
            if (windowSize - currentMax <= k) {
                maxSeq = Math.max(maxSeq, windowSize)
                right++;
                if (right > s.length - 1) break
                charMap[s[right]] = charMap[s[right]] ? charMap[s[right]] + 1 : 1; 
            } else {
                charMap[s[left]] -= 1
                left++;
            }
        }

        return maxSeq
    }
}
