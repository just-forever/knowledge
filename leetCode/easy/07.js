// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

// 整数溢出，表示出这两个数，判断大小即可。

// time 22.38， mem 5.22
// var reverse = function(x) {
// 	const border = 2 ** 32 -1;
// 	const max = border - 1;
// 	const min = -border;

// 	const result = (x > 0 ? 1 : -1) * String(x).split('').filter(x => x !== '-').reverse().join('');
// 	console.log(result);
// 	return result > max || result < min ? 0 : result;
// };

var reverse = function(x) {
	
};

reverse();