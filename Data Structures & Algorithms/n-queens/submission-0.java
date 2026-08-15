class Solution {
    Set<Integer> columnQueens = new HashSet<Integer>();
    Set<Integer> rowQueens = new HashSet<Integer>();
    Set<Integer> forwardDiagnols = new HashSet<Integer>();
    Set<Integer> reserseDiagnols = new HashSet<Integer>();
    List<List<String>> board = new ArrayList<>();
    List<List<String>> result = new ArrayList<>();

    public List<List<String>> solveNQueens(int n) {
        for (int i = 0; i < n; i++) {
            ArrayList<String> row = new ArrayList<String>();
            for (int j = 0; j < n; j++) {
                row.add(new String("."));
            }
            this.board.add(row);
        }
            this._solveQueens(0, n);

        // System.out.println(this.board);
        return this.result;
    }

    public void captureResult(int n) {
        ArrayList<String> row = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            String col = "";
            for (int j = 0; j < n; j++) {
                col += this.board.get(i).get(j);
            }
            row.add(col);
        }
        this.result.add(row);
    }

    public void _solveQueens(int row, int n) {
        if (row == n) return;

        for (int i = 0; i < n; i++) {
            if (columnQueens.contains(i) || forwardDiagnols.contains(i - row)
                || reserseDiagnols.contains(row + i)) {
                continue;
            }

            board.get(row).set(i, "Q");
            columnQueens.add(i);
            rowQueens.add(row);
            forwardDiagnols.add(i - row);
            reserseDiagnols.add(row + i);
            this._solveQueens(row + 1, n);

            if (row == n - 1) {
                this.captureResult(n);
            }

            board.get(row).set(i, ".");
            columnQueens.remove(i);
            rowQueens.remove(row);
            forwardDiagnols.remove(i - row);
            reserseDiagnols.remove(row + i);
        }
    }

}
