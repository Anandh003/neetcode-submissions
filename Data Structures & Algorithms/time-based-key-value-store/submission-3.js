class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        this.keyStore[key] = this.keyStore[key] ?? [];
        this.keyStore[key].push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore[key]
        if (!values || !values?.length || values[0][0] > timestamp) {
            return ""
        }

        if (values.length === 1 || values[values.length - 1][0] <= timestamp) {
            return values[values.length - 1][1]
        }


        let left = 0;
        let right = values.length - 1;
        let mid = right;

        while (right > left) {
            mid = Math.floor(((left + right) / 2));
            if (values[mid][0] > timestamp) {
                right = mid;
            } else if (values[mid][0] < timestamp) {
                left = mid + 1;
            } else {
                return values[mid][1];
            }
        }

        return values[mid][1];
    }
}