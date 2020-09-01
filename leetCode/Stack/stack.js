// JS实现栈
// 

function Stack() {
	let items = [];
	this.push = function(e) {
		items.push(e);
	};
	this.pop = function() {
		return items.pop();
	}
	this.isEmpty = function() {
		return items.length === 0;
	}
	this.size = function() {
		return items.length;
	}
	this.clear = function() {
		items = [];
	}
	this.show = function() {
		return items;
	}
}

const stack = new Stack();

stack.push('a');
console.log(stack.size());
console.log(stack.show());
// stack.isEmpty;
console.log(stack);
