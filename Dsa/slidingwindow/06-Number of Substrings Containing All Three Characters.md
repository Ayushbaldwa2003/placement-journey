## 🔹 Leetcode 1358 Number of Substrings Containing All Three Characters

```java
class Solution {
    public int numberOfSubstrings(String s) {
        HashMap<Character,Integer> hm=new HashMap<>();
        int index=0;
        int ans=0;
        for(int i=0;i<s.length();i++){
            char a=s.charAt(i);
            if(hm.containsKey(a)){
                hm.put(a,hm.get(a)+1);
            }else{
                hm.put(a,1);
                if(hm.size()==3){
                    int res=s.length()-i;
                    while(hm.size()!=2){
                        char ch=s.charAt(index);
                        if(hm.get(ch)==1){
                            hm.remove(ch);
                        }else{
                            hm.put(ch,hm.get(ch)-1);
                        }
                        ans=ans+res;
                        index++;
                    }
                }
            }
        }
        return ans;
    }
}