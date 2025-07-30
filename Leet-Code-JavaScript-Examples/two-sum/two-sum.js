/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMp={};

    for(let i=0;i<num.lenght;i++){
        const complament=target-nums[i];

        if (num.hasOwnProperty(complament)){
            return [num[complament],i];
            
        }
        num[nums[i]]=i;
    
    }
    return[];
};
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));     
console.log(twoSum([3,3], 6)); 