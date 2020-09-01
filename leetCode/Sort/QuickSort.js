// 快速排序, 跳跃式交换。 递归。
// 传入的数字，加上左边和右边的下标。交换之后，实际上操作的是arr,递归调用均在数组上操作。
// 
var arr = [6,1,2,7,9,3,4,5,10,8,11,20,23,21,12];

function QuickSort(arr, left, right) {
	let tmp = arr[left];//定义基准数
	let i = left, j = right;//两边的哨兵，一定是j靠右的先移动。可以确保最终i,j 相遇的时候，是j找i相遇，相遇值比基准值小，然后交换。
	if (left > right) {
		// console.log(left, right);
		return arr;//递归出口，left > right的时候。此处未想到。实际对应场景为，最终每个分组都为1个的情况、0 ，对应的是i=0， right= -1，直接返回
	}
	while(i != j) {
		while(arr[j] >= tmp && i < j) {
			j--;//从右往左，找到第一个比tmp小的
		};
		while(arr[i] <= tmp && i < j) {
			i++;// 从左往右，找到第一个比tmp大的
		}
		if (i < j) {
			[arr[i], arr[j]] = [arr[j], arr[i]];// 二者交换。 不相等的时候，继续移动。
		}
	}
	[arr[left], arr[i]] = [arr[i], arr[left]];// 交换基准值和相遇值，

	// 交换之后，继续调用。
	QuickSort(arr, left, i - 1);
	QuickSort(arr, i + 1, right);
}

QuickSort(arr, 0 , arr.length - 1);