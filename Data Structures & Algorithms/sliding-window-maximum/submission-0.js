class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let left = 0, right = 0;
        const dequeue = new DeQue()
        const output = []


        while(right < nums.length) {
            while (dequeue && nums[dequeue.peekBack()] < nums[right]) {
                dequeue.removeBack()
            }
            dequeue.addBack(right)

            if (left > dequeue.peekFront()) {
                dequeue.removeFront()
            }

            if (right + 1 >= k) {
                output.push(nums[dequeue.peekFront()])
                left += 1
            }

            right++;
        }

        return output;
    }
}


class DeQue {
    constructor() {
        this.front = this.back = undefined
    }

    addFront(value) {
        if (!this.front) this.front = this.back = { value }
        else {
            this.front.next = { value, prev: this.front }
            this.front = this.front.next
        }
    }

    removeFront() {
        const value = this.peekFront()
        if (this.front === this.back) this.front = this.back = undefined
        else {
            this.front = this.front.next
            this.front.prev = undefined
        }
        return value
    }

    removeBack() {
        const value = this.peekBack()
        if (this.front === this.back) this.front = this.back = undefined;
        else {
            this.back = this.back.prev
            this.back.next = undefined
        }
        return value
    }

    peekFront() {
        return this.front && this.front.value
    }

    peekBack() {
        return this.back && this.back.value
    }

    addBack(value) {
        if (!this.back) this.front = this.back = { value }
        else {
            this.back.next = { value, prev: this.back }
            this.back = this.back.next
        }
    }
}
