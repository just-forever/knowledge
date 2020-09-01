let iterator = (items) => {
	let iter = {
		index: 0,
		max: items.length,
		next: function() {
			console.log('======this=====', this);
			return this.index === this.max ? { value: undefined, done: true } : { value: items[this.index++], done: false };
		}
	}

	console.log('======iter=======', iter);

	return iter;
}

// this指向

let iter = iterator([1, 2, 3, 4]);
let result = null;
console.log('-------iterator-------', iter);

do{
	result = iter.next();
	console.log(result);
  }while (!result.done);