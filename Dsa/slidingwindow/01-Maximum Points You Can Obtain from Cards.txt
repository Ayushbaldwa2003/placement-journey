Q.) Leetcode 1423 Maximum Points You Can Obtain from Cards


Solution:-

class Solution {
    public int maxScore(int[] nums, int k) {
        int l=0;
        int r=nums.length-k;
        int sum=0;
        int max=0;
        for(int i=r;i<nums.length;i++){
            sum+=nums[i];
        }
        max=sum;
        while(r<nums.length){
            sum=sum-nums[r];
            sum=sum+nums[l];
            r++;
            l++;
            max=Math.max(sum,max);
        }
        return max;
    }
}