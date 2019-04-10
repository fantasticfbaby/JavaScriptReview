var pivotIndex = function(nums) {
    let total = nums.reduce((prev, acc)=>{
        return acc+prev;
    },0)
    let sum=0;
    for(let i=0;i<nums.length;i++){
        sum+=nums[i]
        if(sum===(total-nums[i+1])/2){
            return i+1
        }
    }
    return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]))
