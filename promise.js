// Promise 
//state : pending -> fulfilled or rejected 

// Producer vs Consumer

// 1.Producer
//프로미스가 생성되면 executor 가 자동으로 실행됨

const promise = new Promise((resolve, reject) => {
  //code 
  console.log('doing something')
  setTimeout( () => {
    // resolve('yongjun');
    reject(new Error('no network'));
  }, 2000 );
}) 

// 2.Consumers : then catch finally

promise.then( (value) => {
  console.log(value);
})
.catch(error => console.log(error))
.finally( () => {
  console.log("yongjun");
})

// 3.Promise chaining 
const fecthNumber = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000);
});

fecthNumber.then(num => num*2)
.then(num => num*3)
.then(num => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(num -1)
    }, 1000);
  })
}).then(num => console.log(num));
