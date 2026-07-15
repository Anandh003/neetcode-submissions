class Solution {
    public int minOperations(String[] logs) {
        String MOVE_BACK = "../";
        String REMAIN = "./";
        List<String> stack = new ArrayList();

        for (String log : logs) {
            if (log.equals(MOVE_BACK)) {
                if (stack.size() > 0) {
                    stack.remove(stack.size() - 1);
                }
            } else if (log.equals(REMAIN)) {
                continue;
            } else {
                stack.add(log);
            }
        }

        return stack.size();
    }
}