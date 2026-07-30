class Solution {

    // Represents a task that is currently in its cooldown period.
    class RemainingTask {
        int taskCount;   // Number of times this task still needs to be executed.
        int elapseTime;  // Time at which this task becomes available again.

        public RemainingTask(int count, int time) {
            this.taskCount = count;
            this.elapseTime = time;
        }
    }

    public int leastInterval(char[] tasks, int n) {

        // Tracks the current CPU time.
        int time = 0;

        // Count the frequency of each task.
        Map<Character, Integer> charFrequency = new HashMap<>();
        for (char task : tasks) {
            charFrequency.put(task, charFrequency.getOrDefault(task, 0) + 1);
        }

        // Max Heap:
        // Always execute the task with the highest remaining frequency first.
        PriorityQueue<Integer> pQueue = new PriorityQueue<>(Collections.reverseOrder());

        // Queue to store tasks that are cooling down.
        // Since tasks are added in chronological order,
        // the earliest available task will always be at the front.
        LinkedList<RemainingTask> ll = new LinkedList<>();

        // Add the frequency of every task to the max heap.
        for (Map.Entry<Character, Integer> entry : charFrequency.entrySet()) {
            pQueue.add(entry.getValue());
        }

        // Continue until there are no tasks left to execute
        // and no tasks waiting in cooldown.
        while (!pQueue.isEmpty() || !ll.isEmpty()) {

            // Move to the next unit of time.
            time++;

            // Check whether the first cooling task is available again.
            if (!ll.isEmpty()) {
                RemainingTask rt = ll.get(0);

                // If its cooldown has completed,
                // move it back to the max heap.
                if (rt.elapseTime < time) {
                    pQueue.add(rt.taskCount);
                    ll.remove(0);
                }
            }

            // Execute the highest-frequency available task.
            if (!pQueue.isEmpty()) {
                int taskCount = pQueue.poll();
                taskCount--;

                // If more executions of this task remain,
                // put it into the cooldown queue.
                if (taskCount > 0) {
                    ll.add(new RemainingTask(taskCount, time + n));
                }

                // Task executed for this time unit.
                continue;
            }

            // If the heap is empty, CPU remains idle for this time unit.
        }

        return time;
    }
}