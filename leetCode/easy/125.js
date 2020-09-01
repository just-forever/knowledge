// 125. 验证回文串

// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1:

// 输入: "A man, a plan, a canal: Panama"
// 输出: true
// 示例 2:

// 输入: "race a car"
// 输出: false

/**
 * @param {string} s
 * @return {boolean}
 */

// 筛选符合条件的字符串，

// 第一次没看题漏掉了数字。后来加入了数字，空格直接被略过。因为' ' == 0 是成立的。这一点需要额外注意、

// 这种做法，排除筛选的条件似乎总容易漏掉条件。

// 然后使用双指针法，即可实现。
var isPalindrome = function(s) {
    if (s.length == 0) return true;
    let result = s.split('').filter(item => ('a' <= item && 'z' >= item) || ('A' <= item && 'Z' >= item) || (0 <= item && 9 >= item && item != ' ')).join('').toLowerCase();
    let left = 0;
    let right = result.length - 1;
    while(left < right) {
        if (result[left] !== result[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    
    return true
};