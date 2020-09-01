// 将两个（或两个以上）有序表合并成一个新的序表，把待排序的序列分成若干个子序列，每个子序列都是有序的。

var arr = [1,5,7,2,6,3,8,9];

function merge(leftArr, rightArr) {
	var result = [];
	while(leftArr.length > 0 && rightArr.length > 0) {
		if (leftArr[0] < rightArr[0]) {
			result.push(leftArr.shift()); // 把最小的最先取出，放到结果中。
		} else {
			result.push(rightArr.shift());
		}
	}
	return [...result, ...leftArr, ...rightArr]; // 合并每个merge中，保持每个merge都是有序的
}

function mergeSort(arr) {
	if (arr.length == 1) return arr;
	let middle = Math.floor(arr.length / 2);// 求出中点
	let left = arr.slice(0, middle); // 分割数组
	let right = arr.slice(middle);

	return merge(mergeSort(left), mergeSort(right)); // 递归合并与排序
}

var arr = mergeSort([32,12,56,78,76,45,36,36]);
console.log(arr); 