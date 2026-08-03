/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 */

class Solution {
    public boolean canAttendMeetings(List<Interval> intervals) {
        boolean result = true;
        intervals.sort((Interval i1, Interval i2) ->  i1.end - i2.start);

        for(int indx = 1; indx < intervals.size(); indx++) {
            Interval secondInterval = intervals.get(indx);
            Interval firstInterval = intervals.get(indx - 1);

            if (secondInterval.start < firstInterval.end) {
                return false;
            }
        }
        return true;
    }
}
