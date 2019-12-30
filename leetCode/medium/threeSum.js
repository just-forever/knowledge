// think
// 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const nums = [-1, 0, 1, 2, -1, -4];

var threeSum = function (nums) {
	nums.sort((a, b) => { return a - b })
	// 先排序，才能左右夹逼
	let res = []
	for (k = 0; k < nums.length; k++) {
	  if (nums[k] > 0) break
	  // 如果当前数大于 0，不用循环，因为 k 是最小数，最小数已经大于 0，三数之和不可能等于 0
	  if (k > 0 && nums[k] === nums[k - 1]) continue
	  // 去重
	  let i = k + 1
	  let j = nums.length - 1
  
	  while (i < j) {
		// 夹逼条件，如果两个边界都挨着了就不用循环了
		let sum = nums[k] + nums[i] + nums[j]
		if (sum === 0) {
		  // 满足条件 push 到返回数组
		  res.push([nums[k], nums[i], nums[j]])
		  while (nums[i] === nums[++i]) { }
		  while (nums[j] === nums[--j]) { }
		  // 去重，相当于下面四句，去重后还要指向不重复的那一个
		  // while (nums[i] === nums[i + 1]) { i++ }
		  // while (nums[j] === nums[j - 1]) { j-- }
		  // i++
		  // j--
		} else if (sum < 0) {
		  // 小于 0 说明左边界的数小了，往右移动，因为整个数是排序好的
		  // k > i + j，i 右移动，可以让 i + j 更大一点
		  // 
		  i++
		} else {
		  // 左夹
		  j--
		}
	  }
	}
	return res
  };

console.log(threeSum(nums))