function creatPromise(executor) {
    let self = this;//留住this,防止后面出现this指向不明问题
    self.status = 'pending';
    self.value = undefined;
    self.reason = undefined;
    self.onResolved = [];//专门存放成功的回调
    self.onRejected = [];//专门存放失败的回调

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'fulfilled';
            self.onResolved.forEach(fn => fn());
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejected.forEach(fn => fn());
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}

creatPromise.prototype.then = function(onfulfilled, onrejected) {
    let self = this;
    console.log('26', self.value);
    console.log('27', self.status);
    if (self.status === 'fulfilled') {
        onfulfilled(self.value);
    }
    
    if (self.status === 'rejected') {
        onrejected(self.reason);
    }

    if (self.status === 'pending') {
        self.onResolved.push(function() {
            onfulfilled(self.value);
        });
        self.onRejected.push(function() {
            onrejected(self.reason);
        })
    }
}

let p = new creatPromise((resolve, reject) => {
    resolve(111);
})
//https://promisesaplus.com/
//https://juejin.im/post/5b88e06451882542d733767a