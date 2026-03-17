Q.4) Leetcode 904 Fruit Into Baskets

Solution:-
class Solution {
    public int totalFruit(int[] nums) {
        int number1=-1;
        int number2=-1;
        int index=0;
        for(index=0;index<nums.length;index++){
            if(nums[index]==number1 || nums[index]==number2){
                continue;
            }else{
                if(number1==-1){
                    number1=nums[index];
                }else{
                    if(number2==-1){
                        number2=nums[index];
                    }else{
                        break;
                    }
                }
            }
        }
        int ans=index-0;
        int last=0;
        while(index<nums.length){
            if(nums[index]==number1 || nums[index]==number2){
                ans=Math.max(index-last+1,ans);
            }else{
                int prev=nums[index-1];
                if(number1==prev){
                    number2=nums[index];
                }else{
                    number1=nums[index];
                }
                last=index-1;
                while(nums[last]==prev){
                    last--;
                }
                last++;
                ans=Math.max(ans,index-last+1);
            }
            index++;
        }
        return ans;
    }
}