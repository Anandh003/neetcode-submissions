class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = [];

        for (let i = temperatures.length - 1; i >= 0; i--) {
            const temp = temperatures[i];

            if (!stack.length) {
                result.push(0);
                stack.push(i);
                continue;
            }

            while (true) {
                if (!stack.length) {
                    result.push(0);
                    stack.push(i);
                    break;
                }

                const last = stack.pop();
                const lastTemp = temperatures[last];

                if (lastTemp > temp) {
                    result.push(last - i);
                    stack.push(last);
                    stack.push(i);
                    break;
                }
            }
        }

        return result.reverse();
    }
}
