//第一种方法需要用i来记录状态，不好，多维护一种状态
//直接可以push相应的变量进去。
//递归找好出口即可。
var array = [];
var num = RandomArray();
function createArray(array, num) {
	if (array.length === 5) {
		console.log(array);
		return array;
	}

	if (!array.includes(num)) {
		array.push(num);
	} 
	createArray(array, RandomArray());
}

function RandomArray() {
	return Math.floor(Math.random() * 32 + 2)
}

createArray(array, num);
