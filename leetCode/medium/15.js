// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

//  

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 标签：数组遍历
// 首先对数组进行排序，排序后固定一个数 nums[i]nums[i]，再使用左右指针指向 nums[i]nums[i]后面的两端，数字分别为 nums[L]nums[L] 和 nums[R]nums[R]，计算三个数的和 sumsum 判断是否满足为 00，满足则添加进结果集
// 如果 nums[i]nums[i]大于 00，则三数之和必然无法等于 00，结束循环
// 如果 nums[i]nums[i] == nums[i-1]nums[i−1]，则说明该数字重复，会导致结果重复，所以应该跳过
// 当 sumsum == 00 时，nums[L]nums[L] == nums[L+1]nums[L+1] 则会导致结果重复，应该跳过，L++L++
// 当 sumsum == 00 时，nums[R]nums[R] == nums[R-1]nums[R−1] 则会导致结果重复，应该跳过，R--R−−
// 时间复杂度：O(n^2)O(n 
// 2
//  )，nn 为数组长度

var threeSum = function(nums) {
	let ans = [];
	const len = nums.length;
	if (nums == null || len < 3) return ans; // 边界条件

	nums.sort((a, b) => a - b);// 升序

	for (let i = 0; i < len; i++) {
		if (nums[i] > 0) break;// 如果当前数字大于0，则三数之和一定大于0， 这一点很关键。因为可以省很多时间。
		if (i > 0 && nums[i] == nums[i-1]) continue; // 去重，相等情况直接略过。

		// 定义左右指针，两者互相移动
		let L = i + 1;
		let R = len - 1;
		while(L < R) {
			const sum = nums[i] + nums[L] + nums[R];
			if (sum == 0) {
				ans.push([nums[i], nums[L], nums[R]]);
				while(L < R && nums[L] == nums[L+1]) L++;// 去重
				while(L < R && nums[R] == nums[R-1]) R--;//去重
				L++;
				R--;
			} 
			else if (sum < 0) L++;
			else if (sum > 0) R--;
		}
	}

	return ans;
};