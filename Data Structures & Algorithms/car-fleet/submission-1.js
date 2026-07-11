class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const positionSpeedMap = {}

        for (let indx = 0; indx < position.length; indx++) {
            positionSpeedMap[position[indx]] = speed[indx]
        }

        position = position.sort((a, b) => b - a)
        const stack = []

        if (position.length <= 1) return position.length

        for (const carPosition of position) {
            const destReachTime = (target - carPosition) / positionSpeedMap[carPosition]
            stack.push(destReachTime)
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }
        return stack.length
    }
}