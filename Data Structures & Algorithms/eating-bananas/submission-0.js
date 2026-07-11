class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1, right = Math.max(...piles) ?? 0;
        let result = 0;

        while (left <= right) {
            let mid = Math.floor(left + ((right - left) / 2));
            let hours = 0;

            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }

            if (hours <= h) {
                result = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return result;
    }
}
