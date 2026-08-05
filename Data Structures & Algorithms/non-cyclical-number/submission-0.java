class Solution {
    public boolean isHappy(int n) {
        int digitSum = 0;
        Set<Integer> knownNums = new HashSet<>();

        while (true) {
            while (n > 0) {
                int lastDigit = n % 10;
                digitSum += (lastDigit * lastDigit);
                n = n / 10;
            }

            if (digitSum == 1) {
                return true;
            }

            if (knownNums.contains(digitSum)) {
                return false;
            }
            knownNums.add(digitSum);
            n = digitSum;
            digitSum = 0;
        }
    }
}
