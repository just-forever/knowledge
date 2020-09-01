# promise

## promise.race 应用场景

是给 Promise 设置一个 timeout/deadline 或者 abort 一个 Promise
fetch api 不想xmlRequest 一样直接支持timeout，可以通过promise.race来模拟。

```js
Promise.race([
	fetch('aaa'),
	new Promise((, _reject) => {
		setTimeout(() => reject(new Error('timeout')), 1000)
	})
])
```

## promise.all 捕获请求错误。
