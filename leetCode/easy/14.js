// 14.最长公共前缀

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 示例 2:

// 输入: ["dog","racecar","car"]
// 输出: ""
// 解释: 输入不存在公共前缀。
// 说明:

// 所有输入只包含小写字母 a-z 。

// 哇 这个方法很好。

var longestCommonPrefix = function(strs) {
	if (!strs.length) {
		return ''
	};
	let [a, ...b] = strs;// 数组解构
	let result  = '';
	for (let i = 0; i< a.length; i++) {
		let flag = b.every(item => item[i] === a[i]);
		if (flag) {
			result += a[i];
		} else {
			break
		}
	}
	console.log(result);
	return result;
};

// 这个方法真的好。
longestCommonPrefix(['abc', 'cba'])