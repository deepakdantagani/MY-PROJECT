// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * time complesity o(n2)
 * space complexity 0(1)
 * when even there is o(n2) as time complexity and o(1) as space complexity,
   we can reduce the time complexity to o(n) and space complexity as o(n)
 * if we need a value that already iterated, think of hashmap or hashset
 * map methods ==> has, get, delete, set
 * to find key in the object ==> key in object
 */
var twoSum = function(nums, target) {
    // let result = [];
    // for(let i=0; i<nums.length;i++){
    //     for(let j=i+1; j<nums.length;j++ ){
    //         if(nums[i] + nums[j] === target) {
    //             result.push(i);
    //             result.push(j);
    //             return result;
    //         }
    //     }
    // }
    // return result;

    // let map = new Map();
    // for(let i=0;i< nums.length;i++){
    //     let diffrence = target - nums[i];
    //     if(map.has(diffrence)){
    //         return [i, map.get(diffrence)];
    //     }
    //     map.set(nums[i], i)
    // }
    // return [];

    // let map = {};
    // for(let i=0;i< nums.length;i++){
    //     let difference = target - nums[i];
    //     if(difference in map){
    //         return [i, map[difference]]
    //     }
    //     map[nums[i]] = i;
    // }
    // return [];

    const map = {};
    for([index, num] of nums.entries()) {
        const difference = target - num;
        if(difference in map) return [map[difference], index];
        map[num] = index
    }
};

console.log(twoSum([1, 24, 5], 25)); // [1, 2]








