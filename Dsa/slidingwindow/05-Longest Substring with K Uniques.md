## 🔹 Q.5) Longest Substring with K Uniques (GFG)

### 💡 Solution (Java)

```java
class Solution {
    public int longestKSubstr(String s, int k) {
        // code here
        HashMap<Character,Integer> hm=new HashMap<>();
        int index=0;
        int max=0;
        for(int i=0;i<s.length();i++){
            char current=s.charAt(i);
            if(hm.containsKey(current)){
                hm.put(current,hm.get(current)+1);
                max=Math.max(max,i-index+1);
            }else{
                if(hm.size()==k){
                    hm.put(current,1);
                    while(hm.size()!=k){
                        char a=s.charAt(index);
                        if(hm.get(a)==1){
                            hm.remove(a);
                        }else{
                            hm.put(a,hm.get(a)-1);
                        }
                        index++;
                    }
                    max=Math.max(max,i-index+1);
                }else{
                    hm.put(current,1);
                    max=Math.max(max,i-index+1);
                }
            }
        }
        if(hm.size()<k){
            return -1;
        }
        return max;
    }
}