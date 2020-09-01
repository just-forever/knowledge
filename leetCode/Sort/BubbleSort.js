//
// [1,2,5,6,7,9,8,10,15,11,4,3];
// 冒泡排序，两层循环，第一次循环确定最大数或者最小数，第n次确定第n大的元素
var a = [1,2,5,6,7,9,8,10,15,11,4,3];
function BubbleSort() {
	const length = a.length;
	for (let i = 0; i < length; i++) {
		for(let j = 1; j < length - i; j++) {
			if (a[j] > a[j+1]) {
				[a[j], a[j+1]] = [a[j+1], a[j]];
			}
		}
	}
	console.log(a);
	return a;
}
BubbleSort();