// 插入排序
// 从左到右比一次有序。
// 做个升序。外层每一次都能确保i之前为升序有序的。
var arr = [6,1,2,7,9,3,4,5,10,8,11,20,23,21,12];

function InsertionSort(arr) {
	for (let i = 0; i < arr.length; i++) { // 实际上外层只是提供j的起点。
		for (let j = i + 1; j < arr.length && j > 0; j--) { // j的前面已经排好序，只需j向前一个比较，如果小或者大就交换。
			if (arr[j] >= arr[j-1]) {
				[arr[j], arr[j-1]] = [arr[j-1], arr[j]];
			}
		}
	}
	console.log(arr);
}

InsertionSort(arr);
