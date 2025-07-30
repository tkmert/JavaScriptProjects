nums=[1,2,1];

var getConcatenation = function(nums) {
    let contatenation=[...nums];
    for (let i = 0; i < nums.length; i++) {
        contatenation.push(nums[i]);
    }
    return contatenation;
};