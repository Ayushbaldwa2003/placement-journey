Q.3) Leetcode 1004 Max Consecutive Ones III

Solution:-
class Solution {
    public int longestOnes(int[] nums, int k) {
        int max=0;
        int index=0;
        for(int i=0;i<nums.length;i++){
            if(nums[i]==0){
                if(k==0){
                    while(nums[index]!=0){
                        index++;
                    }
                    index++;
                    max=Math.max(max,i-index+1);
                }else{
                    k--;
                    max=Math.max(max,i-index+1);
                }
            }else{
                max=Math.max(max,i-index+1);
            }
        }
        return max;
    }
}