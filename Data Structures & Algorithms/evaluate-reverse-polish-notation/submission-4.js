class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operands = [ '+', '-', '*', '/'];
        const stack = [];
        for (const token of tokens) {
            if (!operands.includes(token)) {
                stack.push(parseInt(token));
                continue;
            }
            const rhs = stack.pop();
            const lhs = stack.pop();

            if (!Number.isInteger(rhs) || !Number.isInteger(lhs)) {
                throw Error('Invalid expression')
            }

            switch (token) {
                case '+':
                    stack.push(lhs + rhs);
                    break;
                case '-':
                    stack.push(lhs - rhs);
                    break;
                case '*':
                    stack.push(lhs * rhs);
                    break;
                case  '/':
                    const val = lhs / rhs;
                    stack.push(val < 0 ? Math.ceil(val) : Math.floor(val));
                    break;
            }
        }

        if (stack.length !== 1) {
            throw Error('Invalid expression')
        }
        return Math.floor(stack.pop());
    }
}