/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let a = nums[i];
        elementSum += a;

        let digits = a.toString().split('');

        for (let j = 0; j < digits.length; j++) {
            digitSum += parseInt(digits[j]);
        }
    }

    return Math.abs(elementSum - digitSum);
};
