Q.2) Leetcode 3 Longest Substring Without Repeating Characters

Solution:-
class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> hs=new HashSet<>();
        int max=0;
        int index=0;
        for(int i=0;i<s.length();i++){
            char a=s.charAt(i);
            if(hs.contains(a)){
                while(s.charAt(index)!=a){
                    hs.remove(s.charAt(index));
                    index++;
                }
                index++;
            }else{
                hs.add(a);
                max=Math.max(max,i-index+1);
            }
        }
        return max;
    }
}