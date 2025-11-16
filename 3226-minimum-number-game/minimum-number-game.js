/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a, b) => a - b);
    
    const arr = [];
    
    for (let i = 0; i < nums.length; i += 2) {
        const alice = nums[i];     
        const bob = nums[i + 1];   
       
        arr.push(bob, alice);
    }
    
    return arr;
};
