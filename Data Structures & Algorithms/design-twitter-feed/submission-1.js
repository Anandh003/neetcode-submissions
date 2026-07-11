class Twitter {
    constructor() {
        this.feeds = [];
        this.followersMap = {};
    }

    /**
     * @param {number} userId
     * @param {number} tweetId
     * @return {void}
     */
    postTweet(userId, tweetId) {
        this.feeds.push({ userId, tweetId });
    }

    /**
     * @param {number} userId
     * @return {number[]}
     */
    getNewsFeed(userId) {
        const followeeSet = this.followersMap[userId] ?? new Set();
        const newsFeed = [];

        for (let indx = this.feeds.length - 1; indx >= 0; indx--) {
            const feed = this.feeds[indx];

            if (followeeSet.has(feed.userId) || feed.userId === userId) {
                newsFeed.push(feed.tweetId);
            }

            if (newsFeed.length === 10) {
                break;
            }
        }

        return newsFeed;
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    follow(followerId, followeeId) {
        const followerSet = this.followersMap[followerId];
        if (followerSet) {
            this.followersMap[followerId].add(followeeId);
            return;
        }

        this.followersMap[followerId] = new Set();
        this.followersMap[followerId].add(followeeId)
        
    }

    /**
     * @param {number} followerId
     * @param {number} followeeId
     * @return {void}
     */
    unfollow(followerId, followeeId) {
        const followeeSet = this.followersMap[followerId];
        if (followeeSet && followeeSet.has(followeeId)) {
            followeeSet.delete(followeeId)
        }
    }
}