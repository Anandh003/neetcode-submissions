class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length) {
            const top = this.stack[this.stack.length - 1]
            const min = top[1] > val ? val : top[1]
            this.stack.push([val, min])
        } else {
            this.stack.push([val, val])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length) {
            const last = this.stack[this.stack.length - 1]
            return last[0]
        }
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length) {
            const last = this.stack[this.stack.length - 1]
            return last[1]
        }
        return Infinity
    }
}
