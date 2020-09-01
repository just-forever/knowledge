// (10).add(10).reduce(2).add(10) //28

//  原生JS实现以上

// （10）即10，在Number的原型上定义add和reduce方法即可。

Number.prototype.add = function(num) {
	return this + num;
}

Number.prototype.reduce = function(num) {
	return this - num;
}