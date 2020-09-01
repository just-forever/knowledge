// 堆排序
// 堆是一个完全二叉树，二叉树除去最后一层，其他层结点数都达到最大，、

// 思路，把最大堆堆顶的最大数取出，将剩余的堆继续调整为最大堆，再次将堆顶的最大数取出，这个过程持续到剩余数只有一个。

// 最大堆调整(Max-heapify): 将堆的末端子节点做调整，使得子节点永远小于父节点。
// 创建最大堆(Build-Max-heap): 将堆的所有数据排序，使其成为最大堆。
// 堆排序(Heap-Sort): 移除位在第一个数据的根节点，并做最大堆调整的递归运算。

function heapSort(iArr) {
	let n = iArr.length;
	if (n <= 1) { return iArr;} // 一个或没有 直接返回
	// 若有多个，则建最大堆。
	else {
		// 建堆
		for (let i = Math.floor(n / 2); i > 0; i--) {
			maxHeapify(iArr, i, n);
		}
		// 堆排序
		for (let j = 0;j < n;j++) {
			[iArr[0], iArr[n - 1 - j]] = [iArr[n - 1 - j], iArr[0]];
			maxHeapify(iArr, 0, n - 2 - j);
		}
		console.log(iArr);
		return iArr;
	}
}

function maxHeapify(Arr, i, size) {
	let left = 2 * i + 1; // 左子节点
	let right = 2 * (i + 1); // 右子节点
	let largest = i;
	if (left <= size && Arr[left] > Arr[largest]) {
		largest = left;
	}

	if (right <= size && Arr[right] > Arr[largest]) {
		largest = right;
	}

	// 若标记有子节点，则交换父子位置，递归计算
	if (largest != i) {
		[Arr[i], Arr[largest]] = [Arr[largest], Arr[i]];
		maxHeapify(Arr, largest, size);
	}
}

heapSort([5, 2, 12, 2, 134, 1, 3, 34, 4, 6, 1, 3, 4]); 
