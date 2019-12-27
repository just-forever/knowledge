var array = new Array(5);
var i = 0;
var num = RandomArray();
function createArray(array, num) {
	if (i === 5) {
		return array;
	}

	if (!array.includes(num)) {
		array[i++] = num;
		createArray(array, RandomArray());
	} else {
		createArray(array, RandomArray());
	}
}

function RandomArray() {
	return Math.floor(Math.random() * 32 + 2)
}

createArray(array, num);
//Math.floor: 小于等于
//Math.ceil: 大于等于
//Math.round: 四舍五入