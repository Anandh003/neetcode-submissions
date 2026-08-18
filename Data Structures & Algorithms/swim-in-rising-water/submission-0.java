class Solution {
     public class Elevation implements Comparable<Elevation> {
        int elevation;
        int row;
        int col;

        public Elevation(int elevation, int row, int col) {
            this.elevation = elevation;
            this.row = row;
            this.col = col;
        }

        @Override
        public int compareTo(Elevation o) {
            return this.elevation - o.elevation;
        }

        @Override
        public String toString() {
            // TODO Auto-generated method stub
            return "row: " + this.row + " col: " + this.col + " ele: " + this.elevation;
        }
    }

    public int swimInWater(int[][] grid) {
        PriorityQueue<Elevation> pq = new PriorityQueue<>();
        Set<String> visited = new HashSet<>();
        pq.add(new Elevation(grid[0][0], 0, 0));

        while (!pq.isEmpty()) {
            Elevation ele = pq.poll();

            if (visited.contains(ele.row + "_" + ele.col)) {
                continue;
            }

            if (ele.row == grid.length - 1 && ele.col == grid[0].length - 1) {
                return ele.elevation;
            }

            visited.add(ele.row + "_" + ele.col);

            if ((ele.col + 1) < grid[ele.row].length
                    && !visited.contains(ele.row + "_" + (ele.col + 1))) {
                pq.add(new Elevation(
                        Math.max(ele.elevation, grid[ele.row][ele.col + 1]), ele.row, ele.col + 1));
            }

            if (ele.col > 0 && !visited.contains(ele.row + "_" + (ele.col - 1))) {
                pq.add(new Elevation(
                        Math.max(ele.elevation, grid[ele.row][ele.col - 1]), ele.row, ele.col - 1));
            }

            if (ele.row > 0 && !visited.contains((ele.row - 1) + "_" + ele.col)) {
                pq.add(new Elevation(
                        Math.max(ele.elevation, grid[ele.row - 1][ele.col]), ele.row - 1, ele.col));
            }

            if (ele.row + 1 < grid.length && !visited.contains((ele.row + 1) + "_" + ele.col)) {
                pq.add(new Elevation(
                        Math.max(ele.elevation, grid[ele.row + 1][ele.col]), ele.row + 1, ele.col));
            }
        }

        return -1;
    }

}
