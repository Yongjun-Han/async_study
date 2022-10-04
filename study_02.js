// let a = 1;

// function yg(data) {


//   return new Promise(function(resolve, reject) {
    
//     console.log("용준이 메롱");
//     resolve(data);
//   })
// };



// console.log(yg(a));

const pr = new Promise( (resolve, reject) => {
  setTimeout(() => {
    resolve("ok");
    console.log(pr)
  }, 2000);
})
pr.then(result => {console.log(result + "가지러가자")})
.catch(err => {console.log("다시주문해주세요")})
.finally(() => {console.log("주문 끝")})
  
// const pr2 = new Promise( (resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('error...'))
//     console.log(pr2)
//   }, 3000);
// })

