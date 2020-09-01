// 滑动窗口

var lengthOfLongestSubstring = function(s) {
	if (s.length == 0) return 0;
	let left = 0;
	let max = 0;
	const map = new Map();
	for(let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			// left += 1; 这样不行，这样的话，left永远重复的时候是一个一个递进的，'pwwkew'这种情况，left实际上一下子就到2了，left的值就不对了
			// 取map结构中w对应的下标加一，与left中取大值，作为下一次left的起始。
			left = Math.max(left, map.get(s[i]) + 1);
		};
		map.set(s[i], i);
		max = Math.max(max, i - left + 1);
	}
	console.log(max);
	return max;
};

console.log(lengthOfLongestSubstring('abcdacsdacsw'));
// lengthOfLongestSubstring('abcabcabcab');