class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }
        Map<Character, Integer> sMap = new HashMap();
        Map<Character, Integer> tMap = new HashMap();
        findFrequency(s, sMap);
        findFrequency(t, tMap);

        return sMap.equals(tMap);
    }

    private void findFrequency(String str, Map<Character, Integer> map) {
        for (int i = 0; i < str.length(); i++) {
            int frequency = map.getOrDefault(str.charAt(i), 0);
            map.put(str.charAt(i), frequency + 1);
        }
    }
}
