class Pair {
    char ch;
    int count;
    public Pair(char ch, int count) {
        this.ch = ch;
        this.count = count;
    }
}

class Solution {
    public String removeDuplicates(String s, int k) {
        String result = "";
        ArrayList<Pair> stack = new ArrayList<>();

        for (char ch : s.toCharArray()) {
            if (stack.size() == 0) {
                stack.add(new Pair(ch, 1));
                continue;
            }

            Pair last = stack.get(stack.size() - 1);
            if (last.ch == ch) {
                last.count += 1;
                if (last.count == k) {
                    stack.remove(stack.size() - 1);
                }
            } else {
                stack.add(new Pair(ch, 1));
            }
        }

        for (int i = 0; i < stack.size(); i++) {
            Pair rem = stack.get(i);
            String temp = Character.toString(rem.ch).repeat(rem.count);
            result = result + temp;
        }

        return result;
    }
}