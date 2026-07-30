class Solution {
    class RemainingTask {
        int taskCount;
        int elapseTime;

        public RemainingTask(int count, int time) {
            this.taskCount = count;
            this.elapseTime = time;
        }
    }

    public int leastInterval(char[] tasks, int n) {
        int time = 0;
        Map<Character, Integer> charFrequency = new HashMap<>();
        ;
        for (char task : tasks) {
            charFrequency.put(task, charFrequency.getOrDefault(task, 0) + 1);
        }

        PriorityQueue<Integer> pQueue = new PriorityQueue<Integer>(Collections.reverseOrder());
        LinkedList<RemainingTask> ll = new LinkedList<>();

        for (Map.Entry<Character, Integer> charFrequencyEntry : charFrequency.entrySet()) {
            pQueue.add(charFrequencyEntry.getValue());
        }

        while (!pQueue.isEmpty() || !ll.isEmpty()) {
            time += 1;
            if (!ll.isEmpty()) {
                RemainingTask rt = ll.get(0);
                if (rt.elapseTime < time) {
                    pQueue.add(rt.taskCount);
                    ll.remove(0);
                }
            }
            if (!pQueue.isEmpty()) {
                int taskCount = pQueue.poll();
                taskCount -= 1;

                if (taskCount > 0) {
                    ll.add(new RemainingTask(taskCount, time + n));
                }
                continue;
            }
        }

        return time;
    }
}
