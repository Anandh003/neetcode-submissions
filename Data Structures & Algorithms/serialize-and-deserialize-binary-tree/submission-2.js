const numberRegex = /\d+/;

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let data = this._serialize(root, "")
        return data;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        console.log('deserialize', data)
        if (!data.length) {
            console.log('return')
            return new TreeNode(null);
        }

        const split = data.split(',').map(d => {
            if (numberRegex.test(d)) {
                return parseInt(d)
            }

            return null;
        })

        console.log(split)

        const root = this._deserialize(split, 0)

        return root
    }

    _deserialize(data, index) {
        if (!data[index]) {
            return;
        }
        const root = new TreeNode(data[index]);
        const leftIndex = (2 * index) + 1;
        const rightIndex = (2 * index) + 2;
        let leftNode = null, rightNode = null;

        if (leftIndex < data.length) {
            // leftNode = new TreeNode(data[leftIndex]);
            leftNode = this._deserialize(data, leftIndex)
            if (leftNode) {
                root.left = leftNode;
            }
        }

        if (rightIndex < data.length) {
            // rightNode = new TreeNode(data[rightIndex])
            rightNode = this._deserialize(data, rightIndex)
            if (rightNode) {
                root.right = rightNode;
            }
        }

        return root;
    }

    _serialize(root) {
        let st = []
        const queue = [root]

        while (queue.length > 0) {
            const length = queue.length;
            let nullCount = 0;
            for (let indx = 0; indx < length; indx++) {
                const node = queue.shift()
                if (node) {
                    st.push(node.val)
                    queue.push(node.left);
                    queue.push(node.right);
                } else {
                    st.push('#');
                    queue.push(null);
                    queue.push(null);
                    nullCount++;
                }
            }

            if (nullCount === length) {
                st = st.slice(0, st.length - nullCount);
                break;
            }
        }

        return st.join(',').replace(/(,#)+$/, '')
    }
}


