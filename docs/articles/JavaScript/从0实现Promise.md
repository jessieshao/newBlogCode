### Promise 是什么
Promise 是异步编程的一种解决方案，有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数
简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。（与event不同）
### 基本用法
```
const promise = new Promise((resolve, reject) => {
  resolve('成功');
}).then(
  (data) => {
    console.log('success', data)
  },
  (err) => {
    console.log('faild', err)
  }
)
```
#### 实现promise的基本功能
* Promise对象是一个构造函数，用来生成Promise实例。
* Promise构造函数接收一个``executor``（执行器）函数作为参数，该函数的两个参数分别是``resolve``和``reject``。
* Promise 的状态不可逆，默认状态是``pending``，同时调用 resolve 函数和 reject 函数，默认会采取第一次调用的结果。
* ``resolve``接收``value``保存成功值，可以是``undefined/thenable/promise``
* ``reject``接收``reason``保存失败值
* 必须有一个then方法，then 接收两个参数，分别是 promise 成功的回调 ``onFulfilled``, 和 promise 失败的回调 ``onRejected``；


```
class Promise{
	constructor(executor){
		this.status = 'PENDING'
		this.value = undefined
		this.reason = undefined

		let resolve = (value) =>{
            // 状态为 PENDING 时才可以更新状态，防止 executor 中调用了两次 resovle/reject 方法
            if(this.status ===  'PENDING') {
              this.status = 'FULFILLED';
              this.value = value;
            }
		}

		let reject = (reason) =>{
            if(this.status ===  'PENDING') {
              this.status = 'REJECTED';
              this.reason = reason;
            }
		}

		try{
			executor(resolve,reject)
		}catch(error){
			reject(error)
		}
	}

	then(onFulfilled,onRejected){
      if (this.status === 'FULFILLED') {
        onFulfilled(this.value)
      }

      if (this.status === 'REJECTED') {
        onRejected(this.reason)
      }
	}	
}
```
>几个需要注意的点：
>* ``resolve``和``reject``声明写在``constructor``同级时需要bind绑定``this``
>* 需要``try...catch...``捕获异常，调用reject













规定必须给Promise对象传入一个执行函数，否则将会报错。
Promise中有throw的话，就相当于执行了reject()