class Solution {
    Map<Integer, Integer> cache = new HashMap<>();

    public int uniquePaths(int m, int n) {
        if (m == 1 && n == 1) {
            return 1;
        }
        _uniquePaths(0, 0, m, n);
        return cache.get(1);
    }

    public int _uniquePaths(int row, int col, int m, int n) {
        int cellNumber = (row * n) + col + 1;
        if (cache.containsKey(cellNumber)) {
            return cache.get(cellNumber);
        }

        if (row == m - 1 && col == n - 1) {
            cache.putIfAbsent(cellNumber, 0);
            return cache.get(cellNumber);
        } else if ((row == m - 1 && col == n - 2) || (row == m - 2 && col == n - 1)) {
            cache.putIfAbsent(cellNumber, 1);
            return cache.get(cellNumber);
        }

        for (int i = row; i < m; i++) {
            for (int j = col; j < n; j++) {
                int currentCellNumber = (i * n) + j + 1;

                if (cache.containsKey(currentCellNumber)) {
                    continue;
                }

                int rightWays = 0;
                int downWays = 0;
                if (j + 1 < n) {
                    int num = (i * n) + j + 2;
                    rightWays = cache.getOrDefault(num, _uniquePaths(i, j + 1, m, n));
                }

                if (i + 1 < m) {
                    int num = ((i + 1) * n) + j + 1;
                    downWays = cache.getOrDefault(num, _uniquePaths(i + 1, j, m, n));
                }

                cache.put(currentCellNumber, rightWays + downWays);

            }
        }

        return cache.get(cellNumber);
    }
}
