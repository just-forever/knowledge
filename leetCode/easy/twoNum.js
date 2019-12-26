// O(n^2)

var twoSum = function(nums, target) {
    let tmp = [];
    nums.forEach((item, index) => {
        nums.forEach((items, indexs) => {
            if (index < indexs && item + items === target) {
                tmp[0] = index;
                tmp[1] = indexs;
            }
        })
    });
    
    return tmp;
};

// O(n)

var twoSum = function(nums, target) {
    let tmp = [];
    let result = [];
    nums.forEach((item, index) => {
        const diff =  target - item;
        if (tmp[diff] != undefined) {
            result = [tmp[diff], index];
        }
        tmp[item] = index;
    });
    
    return result;
};