// 选择排序，找最小或最大元素，两层循环，第一层循环，从0到length-1,遍历。
// 第二层循环，找出最小或者最大值，有自己的对应下标，与外层值交换即可。

// 做个升序
var arr = [6,1,2,7,9,3,4,5,10,8,11,20,23,21,12];
function SelectionSort(arr) {
	let minIndex = 0;
	for (let i = 0; i < arr.length; i++) { //外层始终以初始值为
		minIndex = i;
		for (let j = i; j < arr.length; j++) {// 内层下标以i开始。
			if (arr[j] < arr[minIndex]) {
				minIndex = j; // 升序，找最小，找到才交换。复杂度o(n ^ 2)
			}
		}
		[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
	}
}
SelectionSort(arr);
console.log(arr);