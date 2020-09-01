// 两个数组的交集 II

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2,2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [4,9]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 数组的splice 方法，利用该方法返回值为删除的元素，可以间接做一些事情。判断第二个元素是否在第一个存在，则删除，并追加。
var intersect = function(nums1, nums2) {
    const result = [];
    // for (let i=0;i<nums1.length;i++) {
    //     let j = nums2.indexOf(nums1[i]);
    //     if (j > -1) {
    //         result.push(nums2.splice(j, 1)[0]);
    //     }
	// }
	nums1.forEach(v => {
		var index = nums2.indexOf(v);
	
		if (index !== -1) {
		  // 2.找到的话就切除
		  // 如果不去掉，循环的数组中后续还有一项与该项相同，将会重复。如开头自定义的两个数组
		  nums2.splice(index, 1);
		  
		  // 3.将循环数组中匹配到的当前项存入
		  result.push(v);
		}
	  });
	

    return result;
};

// 双指针法、
var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)
    let pointer1 = 0
    let pointer2 = 0
    const res = []
    while (pointer1 < nums1.length && pointer2 < nums2.length) {
        if (nums1[pointer1] === nums2[pointer2]) {
            res.push(nums1[pointer1])
            pointer1++
            pointer2++
        } else if (nums1[pointer1] < nums2[pointer2]) {
            pointer1++
        } else {
            pointer2++
        }
    }
    return res
};