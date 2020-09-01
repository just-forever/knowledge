// 字符串中的第一个唯一字符

// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。

// 案例:

// s = "leetcode"
// 返回 0.

// s = "loveleetcode",
// 返回 2.

// 最快解法，直接运用库函数。遍历一次

var firstUniqChar = function(s) {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i] == s.lastIndexOf(s[i]))) {
			return i
		}
	}
	return -1;
};

/**
 * @param {string} s
 * @return {number}
 */

// 利用Map + hash,
var firstUniqChar = function(s) {
	var hash = {};
	var result = new Map();
	for(let i=0; i < s.length; i++) {
		if (!hash[s[i]]) {
			hash[s[i]] = 1;
			result.set(s[i], i);
		} else {
			result.delete(s[i]);
		}
	}
	if (result.size == 0) return -1;
	return result.values().next().value;
};