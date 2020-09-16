//Java Solution

class Solution {
    public boolean uniqueOccurrences(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        
        for (int val : arr) {
            map.put(val, map.getOrDefault(val, 0) + 1);
        }
        
        Set<Integer> set = new HashSet<>();
        
        for (int val : map.values()) {
            if (!set.contains(val)) {
                set.add(val);
            } else {
                return false;
            }
        }
        
        return true;
    }
}